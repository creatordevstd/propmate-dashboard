import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { EChartsOption } from 'echarts';
import {auto, start} from "@popperjs/core";
import * as moment from "moment";
import {Constants} from "../../common/Constants";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  @Output() loadComponent = new EventEmitter<boolean>();

  chartOptionRevenue: EChartsOption = {}
  chartOptionTenants: EChartsOption = {}
  chartOptionExpiringLease: EChartsOption = {}
  chartOptionLandlords: EChartsOption = {}
  chartOptionUnitInspection: EChartsOption = {}

  buildingList: any = [];
  maintenanceRequestListing: any = []
  constructor() {
    this.buildingList = Constants.BUILDING_LISTING;
    this.maintenanceRequestListing = Constants.MAINTENANCE_REQUEST_LISTING;
  }

  ngOnInit() {
    this.setRevenueChart();
    this.setTenantChart();
    this.setExpiringLeaseChart();
    this.setTotalLandlordsChart();
    this.setUnitInspectionChart();
    console.log(this.buildingList)
  }
  setRevenueChart(){
    this.chartOptionRevenue = {
      legend: {
        bottom: 0,
        selectedMode: true,
        itemGap: 15,
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'none'
        }
      },
      dataset: {
        source: [
          ['month', 'Revenue', 'Income'],
          ['Jan', 56, 17],
          ['Feb', 89, 73],
          ['Mar', 86.4, 65.2],
          ['Apr', 41, 66],
          ['May', 92, 29],
          ['Jun', 7, 54],
          ['Jul', 79, 11],
          ['Aug', 38, 70],
          ['Sep', 62, 96],
          ['Oct', 13, 82],
          ['Nov', 58, 23],
          ['Dec', 93, 67]
        ]
      },
      xAxis: {
        type: 'category',
        axisTick :{
          show: false
        },
        axisLine : {
          lineStyle: {
            color: Constants.CHART_X_AXIS_COLOR_LINE
          }
        },
        axisLabel :{
          color: Constants.CHART_LABEL_COLOR_SUBTITLE
        }
      },
      yAxis: {
        axisLine: {
          show: false
        }
      },
      color: ["#3675FE", "#E5EDFF"],
      series: [
        {
          type: 'bar',
          itemStyle:{
            borderRadius: [50,50,0,0],
          },
          barWidth: '25%',
          emphasis: {
            disabled: true,
            focus: 'none'
          }
        },
        {
          type: 'bar',
          itemStyle:{
            borderRadius: [50,50,0,0]
          },
          barWidth: '25%',
          emphasis: {
            disabled: true,
            focus: 'none'
          }
        }
      ]
    }
  }
  setTenantChart() {
    this.chartOptionTenants = {
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
          type: 'line',
          data: this.generateRandomNumberObj(30, 67),
          showSymbol: false,
          symbol: 'circle',
          lineStyle : {
            width: 2,
            color: Constants.CHART_PRIMARY_COLOR_LINE
          }
        }
      ]
    }
  }
  setTotalLandlordsChart(){
    this.chartOptionLandlords = {
      tooltip: {
        trigger : 'axis',
        triggerOn: 'mousemove',
        borderWidth: 1,
        padding: [7,10],
        transitionDuration: 0,
        textStyle: {
          color: '#000000',
        },
        axisPointer: {
          type: 'none'
        }
      },
      xAxis: [
        {
          type: 'category',
          data : this.getDateRange(30),
          show: true,
          boundaryGap: false,
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
          type: 'line',
          data: this.generateRandomNumberObj(30, 45),
          showSymbol: false,
          symbol: 'circle',
          lineStyle : {
            width: 2,
            color: Constants.CHART_PRIMARY_COLOR_LINE
          }
        }
      ]
    }
  }
  setExpiringLeaseChart(){
    this.chartOptionExpiringLease = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        bottom: 0
      },
      series: [
        {
          name: 'Expiring Leases Period',
          type: 'pie',
          radius: [' 40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 0,
            borderColor: '#ffffff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            scale: false,
            focus: 'none',
            label: {
              show: true,
              fontSize: 16,
              fontWeight: 'normal',
              formatter: '{b}: {d}%'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 11, name: '< 30 days', },
            { value: 3, name: '31 - 60 days' },
            { value: 7, name: '> 61 days' },
          ]
        }
      ],
      color: ["#3675FE", "#E5EDFF", "#b2b2ff"],
    }
  }
  setUnitInspectionChart(){
    this.chartOptionUnitInspection = {
      tooltip:{
        trigger: 'item'
      },
      legend: {
        left: 'auto',
        bottom: 0,
        selectedMode: false,
        itemGap: 15,
        orient: 'vertical'
      },
      series:[
        {
          name : 'Unit Inspection',
          type: 'pie',
          radius: ['80%', '70%'],
          center: ['50%', '50%'],
          avoidLabelOverlap: false,
          startAngle: 180,
          emphasis:{
            scale: false
          },
          label: {
            show: false,
            position: 'center'
          },
          color: [Constants.CHART_PRIMARY_COLOR_LINE, Constants.CHART_SECONDARY_COLOR_LINE],
          data: [
            { value: 3, name: 'Completed'},
            { value: 7, name: 'Pending inspection'},
            {
              value: 3 + 7,
              itemStyle : {
                color: 'none',
                decal:{
                  symbol: 'none'
                }
              },
              label: {
                show: false
              }
            }
          ]
        }
      ]
    }
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

  protected readonly Constants = Constants;
}
