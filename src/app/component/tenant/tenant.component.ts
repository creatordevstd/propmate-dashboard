import { Component, OnInit, Type } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TenantLeaseComponent } from '../tenant-lease/tenant-lease.component';
import { TenantOverviewComponent } from '../tenant-overview/tenant-overview.component';
import { Constants } from 'src/app/common/Constants';

@Component({
  selector: 'app-tenant',
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.scss']
})
export class TenantComponent implements OnInit {
  protected readonly Constants = Constants;
  title: any;
  subTitle: any;
   // @ts-ignore
  currentComponent: Type<any>;
  componentName: any;
  tenantId: any;
  userList:any =[]
  constructor(public activatedRoute: ActivatedRoute){
    this.userList = Constants.TENANTS_LIST[0]
  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.componentName = params.get('component');
     console.log( this.componentName);
     
     this.activatedRoute.queryParams.subscribe((params)=>{
       this.tenantId = params['id'];
     })
     this.loadComponent( this.componentName);
   });
  }
  loadComponent(componentName: string, param?:any){
    switch(componentName){
      case 'lease':
        this.currentComponent = TenantLeaseComponent;
        this.title = 'Add new lease';
        this.subTitle = 'Lease'
        break;
        case 'overview':
          this.currentComponent = TenantOverviewComponent;
          this.title = 'Overview';
          this.subTitle = 'Tenants'
          break;
        default:
          this.currentComponent = TenantOverviewComponent;
    }
  }
}
