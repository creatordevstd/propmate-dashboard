import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as feather from 'feather-icons';
import {Route, Router} from "@angular/router";
import {Constants} from "../../common/Constants";
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements AfterViewInit, OnInit{
  title: any;
  subTitle: any;
  isComponentActive = false;
  constructor(public router: Router) {
  }
  ngOnInit() {
    this.setDashboardHeading();
  }

  ngAfterViewInit() {
    feather.replace();
  }

  protected readonly Constants = Constants;

  loadComponentAction(load: true){
    if (load){
      this.isComponentActive = true;
    }
  }
  setDashboardHeading(){
    if (this.router.url === '/'.concat(Constants.DASHBOARD_ROUTE)){
      this.title = 'Hello, Matthew';
      this.subTitle = 'Here\'s your dashboard for today';
    }
  }
}
