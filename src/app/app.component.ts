import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Constants} from "./common/Constants";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'propmate-dashboard';
  constructor(public router: Router) {
  }

  protected readonly Constants = Constants;
}
