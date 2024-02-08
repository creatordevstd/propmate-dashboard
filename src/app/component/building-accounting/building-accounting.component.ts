import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/common/Constants';
import { HelperService } from 'src/app/services/helper/helper.service';
import { TableFilterService } from 'src/app/services/table-filter/table-filter.service';

@Component({
  selector: 'app-building-accounting',
  templateUrl: './building-accounting.component.html',
  styleUrls: ['./building-accounting.component.scss']
})
export class BuildingAccountingComponent implements OnInit {
  transactionHistoryList: any = [];
  protected readonly Constants = Constants;

  constructor(public helperService: HelperService, public tableFilterService: TableFilterService){
    this.transactionHistoryList = Constants.TRANSACTION_HISTORY_LIST
  }
  ngOnInit(): void {
    $(document).ready(function () {
      $('#transactionHistoryTable').DataTable({}
      );
    });
  }

  filterTable(tableId: any, inputId: any){
    this.tableFilterService.searchFilter(tableId.toString(), inputId.toString());
  }
}
