import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-tenant',
  templateUrl: './add-tenant.component.html',
  styleUrls: ['./add-tenant.component.scss']
})
export class AddTenantComponent implements OnInit {
  @Output() fileSelected = new EventEmitter<File>();

  profileImageUrl = '../assets/images/img1.jpg';
  defaultInputTypePassword ='password';
  defaultInputTypeConfirmedPassword ='password';
  showPasswordIcon = false;
  showConfirmPasswordIcon = false;

  addNewUserForm = new FormGroup({
    applicationType: new FormControl(null, [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
    consentAgreement: new FormControl('', [Validators.required]),
  })


  constructor(){}

  ngOnInit(): void {

  }
  setToggleIcon(inputCtrlName: any){
    console.log(inputCtrlName);

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
  onSubmit(){

  }
  onFileSelected(event: any){
    console.log(event);
    const file: File = event.target.files[0];
    console.log(file);
    
    this.fileSelected.emit(file);
  }
}
