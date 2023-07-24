import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-tenant-edit-profile',
  templateUrl: './tenant-edit-profile.component.html',
  styleUrls: ['./tenant-edit-profile.component.scss']
})
export class TenantEditProfileComponent {
  tenantEditProfileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    gender: new FormControl(''),
    newEmail: new FormControl(''),
    currentPassword: new FormControl(''),
    newPassword: new FormControl(''),
    confirmPassword: new FormControl(''),
  })
}
