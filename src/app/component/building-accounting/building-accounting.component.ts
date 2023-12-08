import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/common/Constants';
import { HelperService } from 'src/app/services/helper/helper.service';

@Component({
  selector: 'app-building-accounting',
  templateUrl: './building-accounting.component.html',
  styleUrls: ['./building-accounting.component.scss']
})
export class BuildingAccountingComponent implements OnInit {
  transactionHistoryList: any = [];

  constructor(public helperService: HelperService){
    this.transactionHistoryList = Constants.TRANSACTION_HISTORY_LIST
  }
  ngOnInit(): void {
    
  }
}
