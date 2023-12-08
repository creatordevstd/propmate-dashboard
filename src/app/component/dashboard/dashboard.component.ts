import {AfterViewInit, Component, EventEmitter, OnInit, Output, Type} from '@angular/core';
import { EChartsOption } from 'echarts';
import {auto, start} from "@popperjs/core";
import * as moment from "moment";
import {Constants} from "../../common/Constants";
import {ActivatedRoute, Router} from "@angular/router";
import * as feather from "feather-icons";
import {BuildingListComponent} from "../building-list/building-list.component";
import {DashboardOverviewComponent} from "../dashboard-overview/dashboard-overview.component";
import {BuildingDetailsComponent} from "../building-details/building-details.component";
import {TenantProfileComponent} from "../tenant-profile/tenant-profile.component";
import {TenantEditProfileComponent} from "../tenant-edit-profile/tenant-edit-profile.component";
import { AddTenantComponent } from '../add-tenant/add-tenant.component';
import { FinancialHistoryComponent } from '../financial-history/financial-history.component';
import { MaintenanceComponent } from '../maintenance/maintenance.component';
import { OwnerFinanceComponent } from '../owner-finance/owner-finance.component';
import { GenerateInvoiceComponent } from '../generate-invoice/generate-invoice.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit{


  title: any;
  subTitle: any;
  // @ts-ignore
  currentComponent: Type<any>;
  propertyId: any;
  buildingList: any;
  filteredBuildingList: any;
  propertyName: any = ''
  userList: any = {};
  constructor(public router: Router, private route: ActivatedRoute) {
    this.buildingList = Constants.BUILDING_LISTING;
    this.userList = Constants.TENANTS_LIST[0]
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const componentName: any = params.get('component');
      this.route.queryParams.subscribe((params)=>{
        this.propertyId = params['id'];
      })
      if (componentName == Constants.BUILDING_DETAILS_ROUTE){
        // @ts-ignore

        this.filteredBuildingList = this.buildingList.filter(item => item.id == this.propertyId);
        this.propertyName = this.filteredBuildingList[0].name.toString()
      }

      this.loadComponent(componentName);
    });
    // @ts-ignore

  }

  ngAfterViewInit() {
    feather.replace();

  }

  protected readonly Constants = Constants;

  loadComponent(componentName: string, param?:any) {
    switch (componentName) {
      case 'overview':
        this.currentComponent = DashboardOverviewComponent;
        this.title = 'Hello, Matthew';
        this.subTitle = 'Here\'s your dashboard for today';
        break;
      case 'building-list':
        this.currentComponent = BuildingListComponent;
        this.title = 'Properties';
        this.subTitle = 'Showing properties list';
        break;
      case 'building-details':
        this.currentComponent = BuildingDetailsComponent;
        this.title = 'Properties Overview';
        this.subTitle = 'Showing property details of '.concat(this.filteredBuildingList[0].name);
        break;
      case 'tenant-details':
        this.currentComponent = TenantProfileComponent;
        this.title = 'Tenant details'
        this.subTitle = 'Showing tenant details '
        break;
      case Constants.EDIT_TENANT_PROFILE:
        this.currentComponent = TenantEditProfileComponent;
        this.title = 'Edit Profile';
        this.subTitle = 'Edit user profile'
        break;
        case Constants.ADD_TENANT:
        this.currentComponent = AddTenantComponent;
        this.title = 'Add New Lease';
        this.subTitle = 'Adding new user'
        break;
        case Constants.FINANCIAL_HISTORY:
          this.currentComponent = FinancialHistoryComponent;
          this.title = 'Financial History';
          this.subTitle = 'Showing Financial History'
        break;
        case Constants.MAITNENACE_ROUTE:
          this.currentComponent = MaintenanceComponent;
          this.title = 'Maintenance';
          this.subTitle = 'Showing Maintenance Requests'
        break;
        case Constants.OWNER_FINANCIAL_ROUTE:
          this.currentComponent = OwnerFinanceComponent;
          this.title = 'Transaction History';
          this.subTitle = 'Showing Transaction History'
        break;
        case Constants.INVOICE_ROUTE:
          this.currentComponent = GenerateInvoiceComponent;
          this.title = 'Invoice';
          this.subTitle = 'Showing Invoice details'
        break;
      default:
        this.currentComponent = DashboardComponent;
        break;
    }
  }

  // Assuming you have included the Font Awesome library



}
