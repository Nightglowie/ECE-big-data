import { Component, OnInit } from '@angular/core';
import { AuthenticateRequest, FaceCoordinates, FaceRequest, Point } from '../services/workflow.pb';
import { AuthenticatorClient } from '../services/workflow.pbsc';
import { MatInputModule } from '@angular/material/input';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  selectedFile: File;
  invalidAddress = false;
  invalidPicture = false;
  authentified = false;
  notAuthentified = false;
  email: string;
  imgUrl: SafeUrl;

  constructor(private authentClient: AuthenticatorClient, private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
    this.imgUrl = this._sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(event.target.files[0]))
  }

  sendBuffer(arrayBuffer: Uint8Array) {
    let authentRequest = new AuthenticateRequest({
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

    this.authentClient.authenticate(authentRequest)
    .toPromise()
    .then(res => {
      this.authentified = true;
      console.log(res)
    })
    .catch(res => {
      this.notAuthentified = true;
      console.log(res);

    });
  }

  onUpload() {
    this.invalidAddress = false;
    this.invalidPicture = false;
    this.notAuthentified = false;
    if(this.email == undefined) {
      this.invalidAddress = true;
    }
    if(this.validateEmail(this.email) == false) {
      this.invalidAddress = true;
    }
    else {
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
