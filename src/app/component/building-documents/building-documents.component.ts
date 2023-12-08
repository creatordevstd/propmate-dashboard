import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/common/Constants';

@Component({
  selector: 'app-building-documents',
  templateUrl: './building-documents.component.html',
  styleUrls: ['./building-documents.component.scss']
})
export class BuildingDocumentsComponent implements OnInit {

  documentList: any;
  constructor(){
    this.documentList = Constants.DOCUMENTS_LIST;
  }
  ngOnInit(): void {
    
  }
}
