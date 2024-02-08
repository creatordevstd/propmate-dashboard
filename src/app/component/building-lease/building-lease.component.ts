import { Component, OnInit } from '@angular/core';
import { TableFilterService } from 'src/app/services/table-filter/table-filter.service';

@Component({
  selector: 'app-building-lease',
  templateUrl: './building-lease.component.html',
  styleUrls: ['./building-lease.component.scss']
})
export class BuildingLeaseComponent implements OnInit{

  constructor(public tableFilterService: TableFilterService){}

  ngOnInit(): void {
    $(document).ready(function () {
      $('#transactionHistoryTable').DataTable({}
      );
    });
  }
}
