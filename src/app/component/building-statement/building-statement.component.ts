import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Constants } from 'src/app/common/Constants';

@Component({
  selector: 'app-building-statement',
  templateUrl: './building-statement.component.html',
  styleUrls: ['./building-statement.component.scss']
})
export class BuildingStatementComponent implements OnInit {

  statementForm = new FormGroup({
    dateFrom: new FormControl(),
    dateTo: new FormControl()
  });
  ownerStatement: any = [];
  constructor(){
    this.ownerStatement = Constants.OWNER_STATEMENT;
  }
  ngOnInit(): void {
    
  }

  getObjKeyValue(obj: any){
    let objItem = {}
    objItem = obj;
    console.log(objItem);
    return Object.keys(objItem);
  }
  onDateSelection(event:any){
    console.log(event);
  }
}
