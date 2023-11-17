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

  defaultInputType ='password';
  showPasswordIcon = false;
  

  isInvalidCredentials = false;
  loginForm = new FormGroup({
    username: new FormControl('',[Validators.required, Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]),
    password: new FormControl('', [Validators.required]),
    rememberMe: new FormControl()
  })

  constructor(private router : Router) {
  }

  ngOnInit() {

  }

  onSubmit(){
    const usernameValue = 'admin@mail.com';
    const passwordValue = 'admin@1234';
    if (this.loginForm.valid){
      console.log(this.loginForm.controls.username.value);
      
      if (this.loginForm.controls.username.value === usernameValue.toLowerCase() &&
      this.loginForm.controls.password.value === passwordValue.toLowerCase()){
        this.isInvalidCredentials = false;
        this.router.navigate([Constants.OTP_ROUTE]);
      } else {
        this.isInvalidCredentials = true;
      }
    }
  }

  setToggleIcon(){
   this.showPasswordIcon = !this.showPasswordIcon;
   if(this.showPasswordIcon){
    this.defaultInputType ='text'
   } else {
    this.defaultInputType = 'password'
   }
  }
}
