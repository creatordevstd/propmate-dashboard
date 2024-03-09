import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Constants } from 'src/app/common/Constants';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  buildingList: any = [];
  filteredBuildingList: any = [];
  propertyType: any = [];
  tenantList: any = [];
  languageList: any = [];
  userRole: any = [];

  constructor(private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute) {
    this.buildingList = Constants.BUILDING_LISTING;
    this.propertyType = [{ name: 'Residential', value: 'residential' },
    { name: 'Commercial', value: 'commercial' }]
    this.languageList = [
      { name: 'English (UK)', value: 'english' },
      { name: 'Deutsch', value: 'deutsch' },
      { name: 'French', value: 'french' }
    ];
    this.tenantList = Constants.TENANTS_LIST;
    this.userRole = [
      { name: 'Building Manager', value: 'buildingmanager' },
      { name: 'Receptionist', value: 'receptionist' },
      { name: 'Security', value: 'security' },
    ];
  }

  ngOnInit(): void {

  }
}
