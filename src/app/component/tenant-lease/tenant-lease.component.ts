import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Constants } from 'src/app/common/Constants';

@Component({
  selector: 'app-tenant-lease',
  templateUrl: './tenant-lease.component.html',
  styleUrls: ['./tenant-lease.component.scss']
})
export class TenantLeaseComponent implements OnInit {
  buildingList: any = [];
  filteredBuildingList: any = []
  tenantList: any = [];
  filteredUnitList: any = [];
  filteredTenantList: any = [];
  stepMenuItems: any = [];
  currentStep = 1;
  startStepperIndex = 1;
  isNextStepDisabled = false;
  isPreviousStepDisabled = false;


  propertyInfoForm = this.formBuilder.group({
    buildingName: new FormControl([Validators.required]),
    unitNumber: new FormControl([Validators.required]),
  });


  leaseForm = this.formBuilder.group({
    leaseTerm: new FormControl(),
    leaseStartDate: new FormControl(),
    leaseEndDate: new FormControl(),
    tenant: new FormControl(),
   
  });

  rentalChargeForm = this.formBuilder.group({
    firstRentDateCharge: new FormControl(),
    frequency: new FormControl(),
    additionalRentalFeeChargeArray: this.formBuilder.array([])
  })
  constructor( public formBuilder: FormBuilder){
    this.buildingList = Constants.BUILDING_LISTING;
    this.tenantList = Constants.TENANTS_LIST;
    this.stepMenuItems = ['Property', ' Lease details', 'Rent']
   
  }

  get additionalRentalFeeCharges(){
    return this.rentalChargeForm.controls.additionalRentalFeeChargeArray as FormArray;
  }
  addInvoiceItem(){
    const additionalRentalFeeForm = this.formBuilder.group({
      itemName: ['', Validators.required],
      itemDescription: [''],
      itemAmount: ['']
    })
    this.additionalRentalFeeCharges.push(additionalRentalFeeForm);
  }
  deleteAdditionalRentalFee(index: number){
    this.additionalRentalFeeCharges.removeAt(index);
  }
  ngOnInit(): void {
    this.getBuildingList();
    this.getUnitList();
    this.getTenantList();
    this.addInvoiceItem();
  }

  getBuildingList(){
    for(let item of this.buildingList){
      this.filteredBuildingList.push(item.name)
    }
    this.filteredBuildingList.sort((a: any,b: any)=>{
      return a -b
    });
  }
  onSelectedBuilding(){

  }
  getUnitList(){
    for(let item of this.tenantList){
      this.filteredUnitList.push(item.unitNumber);
    }
    this.filteredUnitList.sort()
    this.filteredUnitList.sort((a: any,b: any)=>{
      return a -b
    });
  }

  getTenantList(){
    for(let item of this.tenantList){
      this.filteredTenantList.push(item.name);
    }
    this.filteredBuildingList.sort((a: any,b: any)=>{
      return a - b
    });
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
}
