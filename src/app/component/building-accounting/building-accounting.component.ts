import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { Constants } from 'src/app/common/Constants';
import { HelperService } from 'src/app/services/helper/helper.service';
import { TableFilterService } from 'src/app/services/table-filter/table-filter.service';
import * as moment from "moment/moment";
@Component({
  selector: 'app-building-accounting',
  templateUrl: './building-accounting.component.html',
  styleUrls: ['./building-accounting.component.scss']
})
export class BuildingAccountingComponent implements OnInit {
  transactionHistoryList: any = [];
  protected readonly Constants = Constants;
  chartOptionTotalRevenue: EChartsOption = {}
  chartOptionTotalIncome: EChartsOption = {}
  chartOptionTotalOperationCost: EChartsOption = {}
  chartOptionCurrentNetRental: EChartsOption = {}

  constructor(public helperService: HelperService, public tableFilterService: TableFilterService){
    this.transactionHistoryList = Constants.TRANSACTION_HISTORY_LIST
  }
  ngOnInit(): void {
    $(document).ready(function () {
      $('#transactionHistoryTable').DataTable({}
      );
    });
    this.setOperationCost();
    this.setRevenueChart();
    this.setIncomeChart();
    this.setCurrentNetRental()
    
  }

  filterTable(tableId: any, inputId: any){
    this.tableFilterService.searchFilter(tableId.toString(), inputId.toString());
  }
  setRevenueChart(){
    this.chartOptionTotalRevenue = {
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
          ['month', 'Revenue' ],
          ['Jan', this.generateRandomNumber(100)],
          ['Feb', this.generateRandomNumber(100)],
          ['Mar', this.generateRandomNumber(100)],
          ['Apr', this.generateRandomNumber(100)],
          ['May', this.generateRandomNumber(100)],
          ['Jun', this.generateRandomNumber(100)],
          ['Jul', this.generateRandomNumber(100)],
          ['Aug', this.generateRandomNumber(100)],
          ['Sep', this.generateRandomNumber(100)],
          ['Oct', this.generateRandomNumber(100)],
          ['Nov', this.generateRandomNumber(100)],
          ['Dec', this.generateRandomNumber(100)]
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
        },
      //   data:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'
      // , 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
        axisLine: {
          show: false
        }
      },
      color: ["#3675FE"],
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
      ]
    }
  }
  setIncomeChart(){
    this.chartOptionTotalIncome = {
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
          ['month', 'Income' ],
          ['Jan', this.generateRandomNumber(90)],
          ['Feb', this.generateRandomNumber(80)],
          ['Mar', this.generateRandomNumber(100)],
          ['Apr', this.generateRandomNumber(80)],
          ['May', this.generateRandomNumber(100)],
          ['Jun', this.generateRandomNumber(100)],
          ['Jul', this.generateRandomNumber(100)],
          ['Aug', this.generateRandomNumber(100)],
          ['Sep', this.generateRandomNumber(100)],
          ['Oct', this.generateRandomNumber(100)],
          ['Nov', this.generateRandomNumber(100)],
          ['Dec', this.generateRandomNumber(100)]
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
        },
      //   data:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'
      // , 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
        axisLine: {
          show: false
        }
      },
      // color: ["#3675FE"],
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
      ]
    }
  }
  setOperationCost() {
    this.chartOptionTotalOperationCost = {
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
          data: this.generateRandomNumberObj(100, 500000),
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
  setCurrentNetRental() {
    this.chartOptionCurrentNetRental = {
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
          data: this.generateRandomNumberObj(100, 500000),
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

  generateRandomNumber(maxValue: number){
    return Math.floor(Math.random() * maxValue) + 1;
  }
}
