import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import { Constants } from 'src/app/common/Constants';

@Component({
  selector: 'app-tenant-edit-profile',
  templateUrl: './tenant-edit-profile.component.html',
  styleUrls: ['./tenant-edit-profile.component.scss']
})
export class TenantEditProfileComponent implements OnInit {
  // tenantList: any = [];
  // filterTenant: any;
  tenantEditProfileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    newEmail: new FormControl('', [Validators.required]),
    currentPassword: new FormControl('', [Validators.required]),
    newPassword: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  })

  constructor(private activatedRoute: ActivatedRoute){
    // this.tenantList = Constants.TENANTS_LIST;
  }

  ngOnInit(): void {
    
    
  }
}
