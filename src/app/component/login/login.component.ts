import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginForm = new FormGroup({
    username: new FormControl('',[Validators.required]),
    password: new FormControl('', [Validators.required]),
    rememberMe: new FormControl()
  })

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(){
    if (this.loginForm.valid){
      alert('navigate to otp');
    }
  }

}
