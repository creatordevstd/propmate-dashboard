import {AfterViewInit, Component} from '@angular/core';
import * as feather from 'feather-icons';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements AfterViewInit{

  ngAfterViewInit() {
    feather.replace();
  }
}
