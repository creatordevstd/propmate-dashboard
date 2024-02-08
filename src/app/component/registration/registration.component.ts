import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit{

  defaultInputTypePassword ='password';
  defaultInputTypeConfirmedPassword ='password';
  showPasswordIcon = false;
  showConfirmPasswordIcon = false;
  registrationForm = new FormGroup({
    applicationType: new FormControl(null, [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
    consentAgreement: new FormControl('', [Validators.required]),
  })

  constructor() {
  }
  ngOnInit() {
  }

  onSubmit(){
    if (this.registrationForm.valid){

    }
  }
  setToggleIcon(inputCtrlName: any){
    if(inputCtrlName === 'password'){
      this.showPasswordIcon = !this.showPasswordIcon;
      if(this.showPasswordIcon){
       this.defaultInputTypePassword ='text'
      } else {
       this.defaultInputTypePassword = 'password'
      }
    } else if(inputCtrlName === 'confirmPassword'){
      this.showConfirmPasswordIcon = !this.showConfirmPasswordIcon;
      if(this.showConfirmPasswordIcon){
      this.defaultInputTypeConfirmedPassword ='text'
      } else {
      this.defaultInputTypeConfirmedPassword = 'password'
      }
    }
  }
}
