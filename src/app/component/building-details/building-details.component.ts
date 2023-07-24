import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Constants} from "../../common/Constants";
import {EChartsOption} from "echarts";
import * as moment from "moment";
import {TableFilterService} from "../../services/table-filter/table-filter.service";

@Component({
  selector: 'app-building-details',
  templateUrl: './building-details.component.html',
  styleUrls: ['./building-details.component.scss']
})
export class BuildingDetailsComponent implements OnInit {

  chartOptionUnits: EChartsOption = {};
  buildingName: any;
  buildingList: any = [];
  tenantList: any = [];
  filteredBuildingList: any;

  constructor(private activatedRoute: ActivatedRoute,
              private tableFilterService: TableFilterService) {
    this.buildingList = Constants.BUILDING_LISTING;
    this.tenantList = Constants.TENANTS_LIST;
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((param) => {
      const buildingId = param['id'];
      // @ts-ignore
      this.filteredBuildingList = this.buildingList.filter(item => item.id == buildingId)
    });
    this.setUnitVacancyChart();
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
}
