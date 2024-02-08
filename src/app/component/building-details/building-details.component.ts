import {Component, OnInit, Type} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Constants} from "../../common/Constants";
import {EChartsOption} from "echarts";
import * as moment from "moment";
import {TableFilterService} from "../../services/table-filter/table-filter.service";
import * as $ from 'jquery';
import 'datatables.net';
import { BuildingAccountingComponent } from '../building-accounting/building-accounting.component';
import { BuildingListComponent } from '../building-list/building-list.component';
import { BuildingOverviewComponent } from '../building-overview/building-overview.component';
import { BuildingDocumentsComponent } from '../building-documents/building-documents.component';
import { BuildingDirectoryComponent } from '../building-directory/building-directory.component';
import { BuildingMaintenanceComponent } from '../building-maintenance/building-maintenance.component';
import { BuildingEditComponent } from '../building-edit/building-edit.component';
import { BuildingLeaseComponent } from '../building-lease/building-lease.component';
import { BuildingTenantComponent } from '../building-tenant/building-tenant.component';
import { BuildingStatementComponent } from '../building-statement/building-statement.component';
import { ReportsComponent } from '../reports/reports.component';


@Component({
  selector: 'app-building-details',
  templateUrl: './building-details.component.html',
  styleUrls: ['./building-details.component.scss']
})
export class BuildingDetailsComponent implements OnInit {

  chartOptionUnits: EChartsOption = {};
  // @ts-ignore
  currentComponent: Type<any>;
  propertyId: any;
  buildingName: any;
  buildingList: any = [];
  tenantList: any = [];
  filteredBuildingList: any;
  userList: any = {};
  setCurrentLinkActive = false;
  buildingId: any;
  componentName: any;
  showDropdown = false;
  showChatDropdown = false;
  showNotificationDropdown = false;
  showImageDropdown = false;
  notificationList : any = [];

  constructor(private activatedRoute: ActivatedRoute,
              private tableFilterService: TableFilterService,
              public router: Router) {
    this.buildingList = Constants.BUILDING_LISTING;
    this.tenantList = Constants.TENANTS_LIST;
    this.userList = Constants.TENANTS_LIST[0]
    this.notificationList = Constants.NOTIFICATION_LIST;
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((param) => {
      this.buildingId = param['id'];
      // @ts-ignore
      this.filteredBuildingList = this.buildingList.filter(item => item.id == this.buildingId)
    });
    this.setUnitVacancyChart();
  this.activatedRoute.paramMap.subscribe(params => {
     this.componentName = params.get('component');
    console.log( this.componentName);
    
    this.activatedRoute.queryParams.subscribe((params)=>{
      this.propertyId = params['id'];
    })
    this.loadComponent( this.componentName);
  });
  
  }

  getDaysDifference(){
    const startDate = moment().subtract(30, 'days').format('YYYY-MM-DD');
    return (moment().diff(moment(startDate, 'YYYY-MM-DD'), 'days'));
  }
  getDateRange(number: number){
    let dateObj = []
    for (let i = number ; i >= 0 ; i--){
      dateObj.push(moment().subtract(i, 'days').format('YYYY-MM-DD'))
    }
    return dateObj
  }
  generateRandomNumberObj(maxNumber: number, maxValue: number){
    let numbers = [];
    for (let i = 0; i < maxNumber; i++) {
      let randomNumber = Math.floor(Math.random() * maxValue) + 1;
      numbers.push(randomNumber);
    }
    return numbers;
  }

  filterTable(tableId: any, inputId: any){
    console.log(tableId)
    this.tableFilterService.searchFilter(tableId.toString(), inputId.toString());
  }

  setUnitVacancyChart() {
    this.chartOptionUnits = {
      tooltip: {
        trigger : 'axis',
        triggerOn: 'mousemove|click',
        borderWidth: 1,
        padding: [7,10],
        transitionDuration: 0,
        axisPointer: {
          type: 'none'
        }
      },
      legend: {
        show: true,
        data: ['Vacant', 'Occupied'],
        bottom: 0,
        left: 'auto',
        orient: 'vertical',
        itemStyle: {
          color: 'inherit'
        }
      },
      xAxis: [
        {
          type: 'category',
          data : this.getDateRange(30),
          show: true,
          boundaryGap: true,
          axisTick: {
            show: false,
          },
          axisLine :{
            show: true,
            lineStyle : {
              color: Constants.CHART_X_AXIS_COLOR_LINE
            }
          },
          axisLabel: {
            formatter: function(value){
              return moment(value).format('DD MMM')
            },
            showMinLabel: true,
            showMaxLabel: true,
            interval: this.getDaysDifference() - 2,
            color: Constants.CHART_LABEL_COLOR_SUBTITLE
          }
        }
      ],
      yAxis: {
        show: false,
        type: 'value',
        boundaryGap : false,
      },
      series: [
        {
          name: 'Vacant',
          type: 'line',
          data: this.generateRandomNumberObj(30, 67),
          showSymbol: false,
          symbol: 'circle',
          lineStyle : {
            width: 2,
            color: Constants.CHART_PRIMARY_COLOR_LINE
          }
        },
        {
          name: 'Occupied',
          type: 'line',
          data: this.generateRandomNumberObj(30, 45),
          showSymbol: false,
          symbol: 'circle',
          lineStyle : {
            width: 2,
            color: Constants.CHART_TERTIARY_COLOR_LINE
          }
        }
      ]
    }
  }

  protected readonly Constants = Constants;

  loadComponent(componentName: string, param?:any){
    switch(componentName){
      case 'accounting':
        this.currentComponent = BuildingAccountingComponent;
        break;
      case Constants.BUILDING_OVERVIEW:
        this.currentComponent = BuildingOverviewComponent;
        break;
      case Constants.BUILDING_DOCUMENTS:
        this.currentComponent = BuildingDocumentsComponent;
        break;
      case Constants.BUILDING_DIRECTORY:
        this.currentComponent = BuildingDirectoryComponent;
        break;
      case Constants.BUILDING_MAINTENANCE:
        this.currentComponent = BuildingMaintenanceComponent;
        break;
      case Constants.BUILDING_EDIT:
          this.currentComponent = BuildingEditComponent;
          break;
      case Constants.BUILDING_TENANT:
            this.currentComponent = BuildingTenantComponent;
            break;
      case Constants.BUILDING_STATEMENT:
            this.currentComponent = BuildingStatementComponent;
            break;
            case Constants.REPORT_ROUTE:
              this.currentComponent = ReportsComponent
              break;
        default:
          this.currentComponent = BuildingOverviewComponent;
    }
  }

  toggleChatHeader() {

    this.showChatDropdown = !this.showChatDropdown;
  }
  toggleNotificationHeader(){
    this.showNotificationDropdown = !this.showNotificationDropdown;
  }

  toggleNotificationHedaer(){
    this.showNotificationDropdown = !this.showNotificationDropdown;
  }
}
