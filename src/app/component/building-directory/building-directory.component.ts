import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/common/Constants';
import * as $ from 'jquery';

@Component({
  selector: 'app-building-directory',
  templateUrl: './building-directory.component.html',
  styleUrls: ['./building-directory.component.scss']
})
export class BuildingDirectoryComponent implements OnInit, AfterViewInit {

  buildingDirectoryList: any = [];
  constructor(){
    this.buildingDirectoryList = Constants.DIRECTORY_LIST;
  }
  ngOnInit(): void {
    console.log(this.buildingDirectoryList);
   
    
  }
  ngAfterViewInit(): void {
    // $('[data-toggle="tooltip"]').tooltip();
  }

  // initTooltips(){
  //   const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  // const tooltipList = [tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
  // }
}
