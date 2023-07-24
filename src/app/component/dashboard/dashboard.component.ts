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
  constructor(public router: Router, private route: ActivatedRoute) {
    this.buildingList = Constants.BUILDING_LISTING;
    // const dropdownButton: HTMLElement | null = document.querySelector(".dropdown-toggle i.toggle-icon");
    // console.log(dropdownButton)
    // if (dropdownButton) {
    //   dropdownButton.addEventListener("click", function () {
    //     // Check if the icon has the "fa-caret-down" class
    //     const isCaretDown: boolean = dropdownButton.classList.contains("bi-chevron-compact-down");
    //
    //     // Toggle classes to change the icon
    //     if (isCaretDown) {
    //       dropdownButton.classList.remove("bi-chevron-compact-down");
    //       dropdownButton.classList.add("bi-chevron-compact-up");
    //     } else {
    //       dropdownButton.classList.remove("bi-chevron-compact-up");
    //       dropdownButton.classList.add("bi-chevron-compact-down");
    //     }
    //   });
    // }
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
        this.title = 'Building List';
        this.subTitle = 'Showing building list';
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
      case 'edit-tenant':
        this.currentComponent = TenantEditProfileComponent;
        this.title = 'Edit Profile';
        this.subTitle = 'Showing tenant profile'
        break;
      default:
        this.currentComponent = DashboardComponent;

        break;
    }
  }

  // Assuming you have included the Font Awesome library



}
