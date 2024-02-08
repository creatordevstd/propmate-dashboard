import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Constants } from 'src/app/common/Constants';
import flatpickr from "flatpickr";
@Component({
  selector: 'app-owner-finance',
  templateUrl: './owner-finance.component.html',
  styleUrls: ['./owner-finance.component.scss']
})
export class OwnerFinanceComponent implements OnInit {

  transactionHistoryList: any= [];
  transactionFilterForm = new FormGroup({
    transactionDateFrom: new FormControl(),
    transactionDateTo: new FormControl(),
    transactionType: new FormControl(),
    transactionStatus: new FormControl()
  });
  constructor(){
    this.transactionHistoryList = Constants.TRANSACTION_HISTORY_LIST;
  }
  ngOnInit(): void {
    $(document).ready(function () {
      $('#transactionHistoryTable').DataTable();
    });
  }

}
