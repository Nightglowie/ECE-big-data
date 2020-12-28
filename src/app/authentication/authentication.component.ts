import { Component, OnInit } from '@angular/core';
import { AuthenticateRequest, FaceCoordinates, FaceRequest } from '../services/workflow.pb';
import { AuthenticatorClient } from '../services/workflow.pbsc';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  selectedFile: File

  constructor(private authentClient: AuthenticatorClient) { }

  ngOnInit(): void {
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
  }

  sendBuffer(arrayBuffer: Uint8Array) {
    let authentRequest = new AuthenticateRequest({
      faceRequest: new FaceRequest({
        id: "Vin diesel",
        face: arrayBuffer
      })
    });

    this.authentClient.authenticate(authentRequest)
    .toPromise()
    .then(res => console.log(res))
    .catch(res => console.log(res));
  }

  onUpload() {
    // upload code goes here

    var reader = new FileReader();
    reader.onloadend  = () => {
      const arrayBuffer: ArrayBuffer = reader.result as ArrayBuffer;
      const bytes = new Uint8Array(arrayBuffer);

      console.log(arrayBuffer);

      this.sendBuffer(bytes);

    }
    reader.readAsArrayBuffer(this.selectedFile);


  }

}
