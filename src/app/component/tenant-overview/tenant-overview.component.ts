import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/common/Constants';
import { TableFilterService } from 'src/app/services/table-filter/table-filter.service';

@Component({
  selector: 'app-tenant-overview',
  templateUrl: './tenant-overview.component.html',
  styleUrls: ['./tenant-overview.component.scss']
})
export class TenantOverviewComponent implements OnInit {
  protected readonly Constants = Constants;
  tenantList: any = [];
  constructor(private tableFilterService: TableFilterService){
    this.tenantList = Constants.TENANTS_LIST;
  }
  ngOnInit(): void {
    
  }
  filterTable(tableId: any, inputId: any){
    this.tableFilterService.searchFilter(tableId.toString(), inputId.toString());
  }
}
