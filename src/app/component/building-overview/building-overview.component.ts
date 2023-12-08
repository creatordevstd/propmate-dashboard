import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TableFilterService } from 'src/app/services/table-filter/table-filter.service';
import * as $ from 'jquery';
import 'datatables.net';
import { Constants } from 'src/app/common/Constants';

@Component({
  selector: 'app-building-overview',
  templateUrl: './building-overview.component.html',
  styleUrls: ['./building-overview.component.scss']
})
export class BuildingOverviewComponent implements OnInit, AfterViewInit {
  protected readonly Constants = Constants;
  tenantList: any =[];
  

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
  }
  ngAfterViewInit(): void {
   
  }
  filterTable(tableId: any, inputId: any){
    console.log(tableId)
    this.tableFilterService.searchFilter(tableId.toString(), inputId.toString());
  }
}
