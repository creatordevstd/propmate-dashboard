import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { Constants } from 'src/app/common/Constants';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  chartOptionRevenue: EChartsOption = {};
  chartOptionOccupancy: EChartsOption = {};
  chartOptionLeaseRenewal: EChartsOption = {}; 
  chartOptionMaintenanceRequest: EChartsOption = {}; 
  chartOptionLatePayment: EChartsOption = {}; 
  chartOptionSecurityIncident: EChartsOption = {}; 
  protected readonly Constants = Constants;
  constructor(){}

  ngOnInit(): void {
    this.setRevenueChart();
    this.setVacancyChart();
    this.setLeaseRenewalRate();
    this.setMaintenanceRequestsChart();
    this.setLatePaymentChart();
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
  setVacancyChart(){
    this.chartOptionOccupancy ={
      tooltip:{
        trigger: 'axis'
      },
      legend:{
        data: ['Occupied', 'Vacant'],
        bottom: 0,
        selectedMode: true,
      },
      xAxis:{
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
        type: 'value'
      },
      series:[
        {
          name: 'Occupied',
          type: 'line',
          stack: 'Total',
          data: this.generateRandomNumberObj(12,100)
        },
        {
          name: 'Vacant',
          type: 'line',
          stack: 'Total',
          data: this.generateRandomNumberObj(12,100)
        }
      ]
    }
  }
  setLeaseRenewalRate(){
    this.chartOptionLeaseRenewal = {
      tooltip: {
        trigger: 'item'
      },
      legend:{
        bottom: 0,
        selectedMode: true,
      },
     
      series:[
        {
          name: 'Lease Renewal Rate',
          type: 'pie',
          radius: '50%',
          data: [
            {value: this.generateRandomNumberObj(1,100), name: 'Lease renewals'},
            {value: this.generateRandomNumberObj(1,100), name: 'Lease expirations'},
            {value: this.generateRandomNumberObj(1,100), name: 'New Leases'}
          ]
        }
      ]
    }
  }
  setMaintenanceRequestsChart(){
    this.chartOptionMaintenanceRequest = {
      legend: {
        bottom: 0,
        selectedMode: true,
        data: ['Categories', 'Frequency', 'Urgency']
      },
      radar:{
        indicator:[
          {name: 'Plumbing', max: 100},
          {name: 'Electrical', max: 100},
          {name: 'HVAC', max: 100},
          {name: 'Painting', max: 100},
          {name: 'Roofing', max: 100},
          {name: 'Elevator', max: 100},
          {name: 'Security', max: 100},
          {name: 'Landscaping', max: 100},
        ]
      },
      series:[
        {
          type: 'radar',
          data: [
            {value :this.generateRandomNumberObj(8,50), name: 'Categories'},
            {value :this.generateRandomNumberObj(8,100), name: 'Frequency'},
            {value :this.generateRandomNumberObj(8,100), name: 'Urgency'}
          ]
        }
      ]
    }
  }
  setLatePaymentChart(){
    this.chartOptionLatePayment = {
      tooltip:{
        trigger: 'axis'
      },
      legend:{
        data: ['Frequency', 'Amount'],
        bottom: 0,
        selectedMode: true,
      },
      xAxis:{
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
        type: 'value'
      },
      series:[
        {
          name: 'Frequency',
          type: 'line',
          stack: 'Total',
          data: this.generateRandomNumberObj(12,100)
        },
        {
          name: 'Amount',
          type: 'line',
          stack: 'Total',
          data: this.generateRandomNumberObj(12,10000)
        }
      ]
    }
  }
  setSecurityIncidentChart(){
    
  }
  generateRandomNumberObj(maxNumber: number, maxValue: number){
    let numbers = [];
    for (let i = 0; i < maxNumber; i++) {
      let randomNumber = Math.floor(Math.random() * maxValue) + 1;
      numbers.push(randomNumber);
    }
    return numbers;
  }
}
