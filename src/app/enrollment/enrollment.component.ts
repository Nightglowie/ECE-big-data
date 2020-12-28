import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent implements OnInit {
  selectedFile: File

  constructor(private http : HttpClient ) { }

  ngOnInit(): void {
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
  }

  onUpload() {
    // upload code goes here
  }

}
