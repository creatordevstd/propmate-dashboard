import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit{

  otpForm = new FormGroup({
    otpCode: new FormControl('', [Validators.required])
  })

  constructor() {
  }
  ngOnInit() {
  }
  onSubmit(){
    alert('so something!!!');
  }
}
