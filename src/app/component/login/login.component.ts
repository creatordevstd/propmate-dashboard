import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Route, Router} from "@angular/router";
import {Constants} from "../../common/Constants";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  isInvalidCredentials = false;
  loginForm = new FormGroup({
    username: new FormControl('',[Validators.required]),
    password: new FormControl('', [Validators.required]),
    rememberMe: new FormControl()
  })

  constructor(private router : Router) {
  }

  ngOnInit() {
  }

  onSubmit(){
    const usernameValue = 'admin';
    const passwordValue = 'admin';
    if (this.loginForm.valid){
      if (this.loginForm.controls.username.value !== usernameValue &&
      this.loginForm.controls.password.value !== passwordValue){
        this.isInvalidCredentials = true;
      } else {
        this.isInvalidCredentials = false;
        this.router.navigate([Constants.OTP_ROUTE]);
      }
    }
  }

}
