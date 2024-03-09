import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/common/Constants';
import { TableFilterService } from 'src/app/services/table-filter/table-filter.service';

@Component({
  selector: 'app-tenant-all-list',
  templateUrl: './tenant-all-list.component.html',
  styleUrls: ['./tenant-all-list.component.scss']
})
export class TenantAllListComponent implements OnInit {
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
