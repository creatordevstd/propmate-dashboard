import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NgbAccordionItem} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit{

  registrationForm = new FormGroup({
    applicationType: new FormControl(null),
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
      alert('Navigate to next page');
    }
  }
}
