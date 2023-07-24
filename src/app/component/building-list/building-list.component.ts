import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Constants} from "../../common/Constants";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-building-list',
  templateUrl: './building-list.component.html',
  styleUrls: ['./building-list.component.scss']
})
export class BuildingListComponent implements OnInit{

  buildingList: any = []
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.buildingList = Constants.BUILDING_LISTING;
  }
  ngOnInit() {
  }
  navigateToBuildingDetails(id: number){
    this.router.navigate(['/'.concat(Constants.DASHBOARD_ROUTE.concat('/'.concat(Constants.BUILDING_DETAILS_ROUTE))), id], {
      relativeTo: this.activatedRoute
    })
  }

  protected readonly Constants = Constants;
}
