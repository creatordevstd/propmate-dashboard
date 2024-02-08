import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TableFilterService } from 'src/app/services/table-filter/table-filter.service';
import * as $ from 'jquery';
import 'datatables.net';
import { Constants } from 'src/app/common/Constants';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-building-overview',
  templateUrl: './building-overview.component.html',
  styleUrls: ['./building-overview.component.scss']
})
export class BuildingOverviewComponent implements OnInit, AfterViewInit {
  protected readonly Constants = Constants;
  tenantList: any =[];
  chartOptionRevenue: EChartsOption = {}

  constructor( private tableFilterService: TableFilterService){
    this.tenantList = Constants.TENANTS_LIST;
  }
  ngOnInit(): void {
    setTimeout(()=>{
      $(document).ready(function () {
        $('#tenantTableId').DataTable({
          // order: [[6, 'desc']]
        });
      });
    }, 1000)
    this.setRevenueChart();
  }
  ngAfterViewInit(): void {
   
  }
  filterTable(tableId: any, inputId: any){
    console.log(tableId)
    this.tableFilterService.searchFilter(tableId.toString(), inputId.toString());
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
}
