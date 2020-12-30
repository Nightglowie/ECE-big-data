import { Component, OnInit } from '@angular/core';
import { EnrollRequest, FaceCoordinates, FaceRequest, Point } from '../services/workflow.pb';
import { EnrollerClient } from '../services/workflow.pbsc';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent implements OnInit {
  selectedFile: File;
  imgUrl: SafeUrl;
  invalidPicture = false;
  invalidAddress = false;
  enrolled = false;
  notEnrolled = false;
  email: string;
  constructor(private enrollerClient: EnrollerClient, private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
    this.imgUrl = this._sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(event.target.files[0]))
  }


  sendBuffer(arrayBuffer: Uint8Array) {
    let enrollRequest = new EnrollRequest({
      faceRequest: new FaceRequest({
        id: "Vin diesel",
        face: arrayBuffer,
        faceCoordinates: new FaceCoordinates({
          topLeft : new Point({
            y: "29",
            x: "101"
          }),
          bottomRight : new Point({
            y: "101",
            x: "173"
          })
        })
      })
    });
    this.enrollerClient.enroll(enrollRequest)
    .toPromise()
    .then(res => {
      this.enrolled = true;
      console.log(res)
    })
    .catch(res => {
      this.notEnrolled = true;
      console.log(res);

    });
  }

  onUpload() {
    this.invalidAddress = false;
    this.invalidPicture = false;
    this.notEnrolled = false;
    if(this.email == undefined) {
      this.invalidAddress = true;
    }
    if(this.validateEmail(this.email) == false) {
      this.invalidAddress = true;
    }
    else{
    // upload code goes here
    if (this.selectedFile == null) {
      this.invalidPicture = true;
      return;
    }
    this.selectedFile.arrayBuffer()
      .then(buffer => {
        this.sendBuffer(new Uint8Array(buffer));
      })
      .catch(res => {
        console.log("Error loading file");
      })
    }
  }

  validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

}

