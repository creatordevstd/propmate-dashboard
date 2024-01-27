import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Constants } from 'src/app/common/Constants';

@Component({
  selector: 'app-tenant-add',
  templateUrl: './tenant-add.component.html',
  styleUrls: ['./tenant-add.component.scss']
})
export class TenantAddComponent implements OnInit {

  stepMenuItems: any = [];
  currentStep = 1;
  startStepperIndex = 1;
  isNextStepDisabled = false;
  isPreviousStepDisabled = false;
  isShowLandlordDetails = false;
  jobOccupationList: any = [] ;

  applicantForm = this.formBuilder.group({
    applicantFullName: new FormControl(),
    dateOfBirth: new FormControl(),
    idNumber: new FormControl(),
    phoneNumber: new FormControl(),
    email: new FormControl(),
    bankruptcy: new FormControl(),
    criminalConviction: new FormControl(),
    brokenLease: new FormControl(),
  });

  addressForm = this.formBuilder.group({
    currentAddress: new FormControl(),
    currentAddressDuration: new FormControl(),
    currentOwnershipStatus: new FormControl(),
    reasonForMoving: new FormControl(),
    isCurrentResidencyRented: new FormControl(),
    landlordName: new FormControl(),
    landlordPhoneNumber: new FormControl()
  });

  employmentForm = this.formBuilder.group({
    currentEmployer: new FormControl(),
    occupation: new FormControl(),
    employmentLength: new FormControl(),
    monthlyIncome: new FormControl(),
    employerPhoneNumber: new FormControl(),
    employerAddress : new FormControl(),
    bankName: new FormControl(),
    accountNumber: new FormControl(),
    branchName: new FormControl(),
    branchCode: new FormControl()
  });

  documentForm = this.formBuilder.group({
    
  })

  
  constructor( private formBuilder: FormBuilder){
    this.stepMenuItems = ['Applicant', ' Address', 'Financial', 'Documents']
    this.jobOccupationList = Constants.JOB_OCCUPATION;
  }

  ngOnInit() {
    this.isShowLandlordDetails = false;
    this.showLandLordDetails();
  }

  nextStep() {
    if (this.currentStep < this.stepMenuItems.length) {
      this.currentStep++;
      this.isPreviousStepDisabled = false;
    } 
     if(this.currentStep == this.stepMenuItems.length ) {
      this.isNextStepDisabled = true;
    }
  }

  prevStep() {
    if (this.currentStep > this.startStepperIndex) {
      this.currentStep--;
      this.isNextStepDisabled = false;
    } 
    if(this.currentStep == this.startStepperIndex){
      this.isPreviousStepDisabled = true;
    }
  }

  showLandLordDetails(){
    this.addressForm.valueChanges.subscribe(()=>{
      if(this.addressForm.controls.isCurrentResidencyRented.value == 'yes'){
        this.isShowLandlordDetails = true;
      } else {
        this.isShowLandlordDetails = false;
      }
    })
    if(this.addressForm.controls.isCurrentResidencyRented.value == 'yes'){
      this.isShowLandlordDetails = true;
    } else {
      this.isShowLandlordDetails = false;
    }
  }
}
