import {AfterViewInit, Component} from '@angular/core';
import * as feather from "feather-icons";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements AfterViewInit{

  ngAfterViewInit() {
    feather.replace();
  }
}
