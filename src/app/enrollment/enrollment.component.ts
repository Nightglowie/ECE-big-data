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
  selectedFile: File
  imgUrl: SafeUrl
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
    .then(res => console.log(res))
    .catch(res => console.log(res));
  }

  onUpload() {
    // upload code goes here
    this.selectedFile.arrayBuffer()
      .then(buffer => {
        this.sendBuffer(new Uint8Array(buffer));
      })
      .catch(res => {
        console.log("Error loading file");
      })



  }

}
