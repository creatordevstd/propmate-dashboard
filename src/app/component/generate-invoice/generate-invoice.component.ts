import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Constants } from 'src/app/common/Constants';
import * as moment from 'moment'
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';

@Component({
  selector: 'app-generate-invoice',
  templateUrl: './generate-invoice.component.html',
  styleUrls: ['./generate-invoice.component.scss']
})
export class GenerateInvoiceComponent implements OnInit {

  recipientEmail = 'Tenant email';
  recipientName = 'Tenant name';
  propertyName = 'Property name';
  propertyAddress = 'Property address'
  tenantList: any = [];
  filteredTenantObj: any;
  filteredPropertyObj: any;
  propertyList: any = [];
  InvoiceList: any = [];
  todayDate: any;
  invoiceDueDate = 'Due date'
  totalAmount = 0;
  settings: any = [];
  selectedRecipients: any = [];
  // dueDate: NgbDateStruct;
  
  constructor(private formBuilder: FormBuilder){
    this.InvoiceList = Constants.INVOICE_HISTORY_LIST;
    this.tenantList = Constants.TENANTS_LIST;
    this.propertyList = Constants.BUILDING_LISTING;
  }
  invoiceForm = this.formBuilder.group({
    recipientName: new FormControl('', [Validators.required]),
    recipientLists: new FormControl(this.tenantList.fullName, [Validators.required]),
    recipientEmail: new FormControl('', [Validators.required]),
    invoiceDate: new FormControl('', [Validators.required]),
    invoiceDueDate: new FormControl('', [Validators.required]),
    invoicePropertyName: new FormControl('', [Validators.required]),
    invoiceNote: new FormControl(''),
    invoiceItemArray: this.formBuilder.array([])
  });

  ngOnInit(): void {
    this.disableRecipientEmailInput();
    this.todayDate = moment().format('MMM Do, YY')
    this.addInvoiceItem();
    this.calculateTotalAmount();
    this.configureMultiSelect();
  }

  configureMultiSelect(){
    this.settings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      enableCheckAll: true,
      selectAllText: 'Select All',
      unSelectAllText: 'Unselect All',
      allowSearchFilter: true,
      limitSelection: -1,
      clearSearchFilter: true,
      maxHeight: 197,
      itemsShowLimit: 6,
      searchPlaceholderText: 'Add Recipients',
      noDataAvailablePlaceholderText: 'No recipient available',
      closeDropDownOnSelection: false,
      showSelectedItemsAtTop: false,
      defaultOpen: false,
    }
   
    
  }

  get InvoiceItemsArray(){
    return this.invoiceForm.controls.invoiceItemArray as FormArray;
  }

  addInvoiceItem(){
    const invoiceItemsForm = this.formBuilder.group({
      itemName: ['', Validators.required],
      itemDescription: [''],
      itemAmount: ['']
    })
    this.InvoiceItemsArray.push(invoiceItemsForm);
  }

  deleteInvoiceItem(invoiceItemIndex: number){
    this.InvoiceItemsArray.removeAt(invoiceItemIndex);
  }
  disableRecipientEmailInput(){
    this.invoiceForm.controls.recipientEmail.disable()
  }
  setRecipientDetails(event: any){
    this.recipientName = event.target.value;
     // @ts-ignore
    this.filteredTenantObj =  this.tenantList.filter(x => x.name == event.target.value);
    for(let item of this.filteredTenantObj){
      this.recipientEmail = item.email;
    }
  }
  setPropertyDetails(event: any){
    this.propertyName = event.target.value;
    // @ts-ignore
    this.filteredPropertyObj = this.propertyList.filter(x => x.name == event.target.value)
    console.log(this.filteredPropertyObj);
    
    for(let item of this.filteredPropertyObj){
      this.propertyAddress = item.address;
    }
  }
  onDateSelection(event: any){
    this.invoiceDueDate = moment(event).format('MMM Do, YY');
  }

  calculateTotalAmount(){
    console.log(this.InvoiceItemsArray);
  }

  onMultiSelect(event: any){
    this.selectedRecipients.push(event);
  }
  onDeSelect(event: any){
    const deselectedItem = event;
    const indexItem = this.selectedRecipients.findIndex((item: any) => item.id === deselectedItem.id);
    if(indexItem > -1){
      this.selectedRecipients.splice(indexItem, 1);
    }
  }
  onSelectAll(event: any){
    this.selectedRecipients = event;
  }
  onDeSelectAll(event: any){
    this.selectedRecipients = event;
  }
}
