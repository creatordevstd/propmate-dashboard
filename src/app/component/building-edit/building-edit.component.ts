import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Constants } from 'src/app/common/Constants';

@Component({
  selector: 'app-building-edit',
  templateUrl: './building-edit.component.html',
  styleUrls: ['./building-edit.component.scss']
})
export class BuildingEditComponent implements OnInit {

  buildingList: any = [];
  filteredBuildingList: any = [];
  propertyType: any = [];
  tenantList: any = [];

  languageList: any = [];
  userRole: any = [];

  buildingEditForm = this.formBuilder.group({
    propertyType: new FormControl(),
    propertyName: new FormControl(),
    address1: new FormControl(),
    address2: new FormControl(),
    city: new FormControl(),
    province: new FormControl(),
    postalCode: new FormControl(),
    buildingUnitItemArray: this.formBuilder.array([]),
    languageList: new FormControl(),
    timeZone: new FormControl(),
    userRole: new FormControl()
  });
  constructor(private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute) {
    this.buildingList = Constants.BUILDING_LISTING;
    this.propertyType = [{ name: 'Residential', value: 'residential' },
    { name: 'Commercial', value: 'commercial' }]
    this.languageList = [
      {name: 'English (UK)', value: 'english'},
      {name: 'Deutsch', value: 'deutsch'},
      {name: 'French', value: 'french'}
    ];
    this.tenantList = Constants.TENANTS_LIST;
    this.userRole = [
      {name: 'Building Manager', value: 'buildingmanager'},
      {name: 'Receptionist', value: 'receptionist'},
      {name: 'Security', value: 'security'},
    ];
  }
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((param) => {
      const buildingId = param['id'];
      // @ts-ignore
      this.filteredBuildingList = this.buildingList.filter(item => item.id == buildingId)
    });
    this.addUnitItem();

    console.log(this.filteredBuildingList);
    this.setInitFormValues();
  }

  get buildingItemArray() {
    return this.buildingEditForm.controls.buildingUnitItemArray as FormArray;
  }

  addUnitItem() {
    const buildingUnitItemForm = this.formBuilder.group({
      unitName: ['', Validators.required],
      unitBed: [''],
      unitBathroom: [''],
      unitSize: [''],
      unitRent: ['']
    })
    this.buildingItemArray.push(buildingUnitItemForm);
  }

  deleteUnitItem(buildingUnitItemIndex: number) {
    this.buildingItemArray.removeAt(buildingUnitItemIndex);
  }

  setInitFormValues() {
    for (let item of this.filteredBuildingList) {
      this.buildingEditForm.get('propertyType')?.patchValue(item.type.toLowerCase());
      const address = item.address.split(',');
      this.buildingEditForm.controls.propertyName.setValue(item.name)
      this.buildingEditForm.controls.address1.setValue(address[0]);
      this.buildingEditForm.controls.city.setValue(address[1]);
      this.buildingEditForm.controls.province.setValue(address[2]);
      this.buildingEditForm.controls.postalCode.setValue(address[3]);
    }
  }

  disableControls(formGroup: FormGroup, singleControlName?: any, multipleControlsNames?: any) {
    if (singleControlName) {
      formGroup.controls['singleControlName'].disable();
    }
    if (multipleControlsNames) {
      for (let ctrlName of multipleControlsNames) {
        formGroup.controls[ctrlName].disable()
      }
    }
  }
}
