import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/common/Constants';
import { TableFilterService } from 'src/app/services/table-filter/table-filter.service';

@Component({
  selector: 'app-building-tenant',
  templateUrl: './building-tenant.component.html',
  styleUrls: ['./building-tenant.component.scss']
})
export class BuildingTenantComponent implements OnInit {
  protected readonly Constants = Constants;
  tenantList: any = [];
  
  constructor(private tableFilterService: TableFilterService){
    this.tenantList = Constants.TENANTS_LIST;
  }
  ngOnInit(): void {
    $(document).ready(function () {
      $('#buildingTenantList').DataTable({}
      );
    });
  }
  filterTable(tableId: any, inputId: any){
    this.tableFilterService.searchFilter(tableId.toString(), inputId.toString());
  }
}
