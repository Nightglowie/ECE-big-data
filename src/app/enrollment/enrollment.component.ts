import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EnrollRequest, FaceCoordinates, FaceRequest, Point } from '../services/workflow.pb';
import { EnrollerClient } from '../services/workflow.pbsc';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { Image } from 'canvas';
import { stringify } from '@angular/compiler/src/util';

interface Coord {
  x: number,
  y: number
}

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent implements OnInit {
  selectedFile: File;
  imgUrl: SafeUrl;
  invalidPicture = false;
  pictureShowed = false;
  invalidAddress = false;
  enrolled = false;
  notEnrolled = false;
  email: string;
  imgWidth = 200;
  imgHeight = 300;
  @ViewChild('imgId')
  img: ElementRef<HTMLImageElement>
  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;
  @ViewChild('layout') canvasRef;
  private ctx: CanvasRenderingContext2D;
  buffer: Uint8Array
  isDisabled = true;
  firstClick: Coord;
  secondClick: Coord;
  topPoint: Point;
  bottomPoint: Point;

  constructor(private enrollerClient: EnrollerClient, private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    const canvas = document.querySelector('canvas')
    canvas.addEventListener('click', (event) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const coord: Coord = {
        x,
        y
      }
      if (this.firstClick == null) {
        this.drawImage();
        this.firstClick = coord;
      } else if (this.firstClick != null && this.secondClick == null) {
        this.secondClick = coord;
        this.animate(this.firstClick, this.secondClick, rect)
      }
    }, false);
  }

  drawImage() {
    createImageBitmap(new Blob([this.buffer]))
      .then(
        bitmap => {
          this.imgHeight = bitmap.height;
          this.imgWidth = bitmap.width;
          setTimeout(() => {
            this.pictureShowed = true;
            this.ctx.drawImage(bitmap, 0, 0, this.imgWidth, this.imgHeight);
          }, 100);
        }
      ).catch(
        error => console.log(error)
      )
  }

  onFileChanged(event) {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.selectedFile = event.target.files[0];
    this.imgUrl = this._sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(event.target.files[0]));
    this.selectedFile.arrayBuffer()
      .then(buffer => {
        this.buffer = new Uint8Array(buffer);
        this.drawImage();
      })
      .catch(res => {
        console.log("Error loading file");
      })
  }



  sendBuffer(arrayBuffer: Uint8Array) {
    let faceCoordinates: FaceCoordinates = null;
    if (this.topPoint != null && this.bottomPoint != null) {
      faceCoordinates = new FaceCoordinates({
        topLeft: this.topPoint,
        bottomRight: this.bottomPoint
      })
    }

    let enrollRequest = new EnrollRequest({
      faceRequest: new FaceRequest({
        id: this.email,
        face: arrayBuffer,
        faceCoordinates: faceCoordinates
      })
    });

    this.enrollerClient.enroll(enrollRequest)
      .toPromise()
      .then(res => {
        this.enrolled = true;
        this.notEnrolled = false;
        console.log(res)
      })
      .catch(res => {
        this.notEnrolled = true;
        this.enrolled = false;
        console.log(res);

      });
  }

  onUpload() {
    this.pictureShowed = false;
    this.invalidAddress = false;
    this.invalidPicture = false;
    this.notEnrolled = false;
    if (this.email == undefined) {
      this.invalidAddress = true;
    }
    if (this.validateEmail(this.email) == false) {
      this.invalidAddress = true;
    }
    else {
      // upload code goes here
      if (this.selectedFile == null) {
        this.invalidPicture = true;
        return;
      }
      this.sendBuffer(this.buffer);
    }
  }

  validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  animate(p1: Coord, p2: Coord, rect: DOMRect) {
    this.ctx.lineWidth = 3;
    this.ctx.strokeStyle = "#FF0000";
    /*const square = new Square(this.ctx);
    square.draw(1, 1, 76);*/
    const translatedP1 = this.translate(p1, rect.height, rect.width, this.imgHeight, this.imgWidth);
    const translatedP2 = this.translate(p2, rect.height, rect.width, this.imgHeight, this.imgWidth);
    const height = Math.abs(translatedP2.y - translatedP1.y);
    const width = Math.abs(translatedP2.x - translatedP1.x);
    const [rightP1, rightP2] = this.findRightCoordinates(translatedP1, translatedP2, height, width);
    this.ctx.strokeRect(rightP1.x, rightP1.y, width, height);
    this.topPoint = new Point({
      x: stringify(Math.floor(rightP1.x)),
      y: stringify(Math.floor(rightP1.y)),
    });
    this.bottomPoint = new Point({
      x: stringify(Math.floor(rightP2.x)),
      y: stringify(Math.floor(rightP2.y)),
    });
    this.firstClick = null;
    this.secondClick = null;
  }

  translate(p: Coord, canvasHeight: number, canvasWidth: number, imgHeight: number, imgWidth: number): Coord {
    return {
      x: p.x * imgWidth / canvasWidth,
      y: p.y * imgHeight / canvasHeight,
    }
  }

  findRightCoordinates(p1: Coord, p2: Coord, height: number, width: number): Coord[] {
    let newP1: Coord, newP2: Coord;
    if (p1.x < p2.x) {
      if (p1.y < p2.y) {
        // that's the order we want
        newP1 = p1;
        newP2 = p2;
      } else {
        newP1 = {
          x: p1.x,
          y: p1.y - height,
        };
        newP2 = {
          x: p2.x,
          y: p2.y + height,
        };
      }
    } else {
      if (p1.y < p2.y) {
        newP1 = {
          x: p1.x - width,
          y: p1.y,
        };
        newP2 = {
          x: p2.x + width,
          y: p2.y,
        };
      } else {
        newP1 = {
          x: p1.x - width,
          y: p1.y - height,
        };
        newP2 = {
          x: p2.x + width,
          y: p2.y + height,
        };
      }
    }
    return [newP1, newP2];
  }

}

