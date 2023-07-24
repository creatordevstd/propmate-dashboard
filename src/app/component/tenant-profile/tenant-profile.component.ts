import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Constants} from "../../common/Constants";

@Component({
  selector: 'app-tenant-profile',
  templateUrl: './tenant-profile.component.html',
  styleUrls: ['./tenant-profile.component.scss']
})
export class TenantProfileComponent implements OnInit{

  tenantList: any = [];
  filterTenant: any;
  constructor(private activatedRoute: ActivatedRoute) {
    this.tenantList = Constants.TENANTS_LIST;
  }
ngOnInit() {
    this.activatedRoute.queryParams.subscribe((param) =>{
      const tenantId = param['id'];
      // @ts-ignore
      this.filterTenant = this.tenantList.filter(item => item.id == tenantId)
    })
  console.log(this.filterTenant);
  }
}
