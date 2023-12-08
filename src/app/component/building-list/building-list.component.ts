import {AfterViewInit, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Constants} from "../../common/Constants";
import {ActivatedRoute, Router} from "@angular/router";
import * as $ from 'jquery';
import 'datatables.net';
import { TableFilterService } from 'src/app/services/table-filter/table-filter.service';
@Component({
  selector: 'app-building-list',
  templateUrl: './building-list.component.html',
  styleUrls: ['./building-list.component.scss']
})
export class BuildingListComponent implements OnInit, AfterViewInit{

  buildingList: any = []
  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private tableFilterService: TableFilterService) {
    this.buildingList = Constants.BUILDING_LISTING
  }
  ngOnInit() {
    $(document).ready(function () {
      $('#buildingListTable').DataTable({}
      );
    });
  }
  ngAfterViewInit(): void {
    
  }
  navigateToBuildingDetails(id: number){
    this.router.navigate(['/'.concat(Constants.DASHBOARD_ROUTE.concat('/'.concat(Constants.BUILDING_DETAILS_ROUTE))), id], {
      relativeTo: this.activatedRoute
    })
  }

  protected readonly Constants = Constants;

  filterTable(tableId: any, inputId: any){
    console.log(tableId)
    this.tableFilterService.searchFilter(tableId.toString(), inputId.toString());
  }
}
