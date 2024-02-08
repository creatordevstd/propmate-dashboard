import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Constants } from 'src/app/common/Constants';
import flatpickr from "flatpickr";
import { NgbDate, NgbCalendar, NgbDateParserFormatter, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { TableFilterService } from 'src/app/services/table-filter/table-filter.service';
import { first } from 'rxjs';
import { Helper } from 'src/app/common/helpers/Helper';
import { HelperService } from 'src/app/services/helper/helper.service';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})
export class MaintenanceComponent implements OnInit{
  
  MaintenanceRequestList: any =[];
  hoveredDate: NgbDate | null = null;

	fromDate: NgbDate | null;
	toDate: NgbDate | null;

  filterForm = new FormGroup({
    maintenanceDateFrom: new FormControl(),
    maintenanceDateTo: new FormControl(),
    maintenanceType: new FormControl(),
    maintenanceStatus: new FormControl()
  });
  constructor(private calendar: NgbCalendar,
		public formatter: NgbDateParserFormatter,
		private tableFilterService: TableFilterService, public helperService: HelperService){
    this.MaintenanceRequestList = Constants.MAINTENANCE_REQUESTS;
    this.fromDate = calendar.getToday();
		this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }
  
  ngOnInit(): void {
    $(document).ready(function () {
      $('#maintenanceTableList').DataTable();
    });
    this.createCalendarInstances();
  }
  createCalendarInstances(){
    flatpickr("#dateFrom", {});
  }
  onDateSelection(date: NgbDate) {
		if (!this.fromDate && !this.toDate) {
			this.fromDate = date;
		} else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
			this.toDate = date;
		} else {
			this.toDate = null;
			this.fromDate = date;
		}
	}

	isHovered(date: NgbDate) {
		return (
			this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate)
		);
	}

	isInside(date: NgbDate) {
		return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
	}

	isRange(date: NgbDate) {
		return (
			date.equals(this.fromDate) ||
			(this.toDate && date.equals(this.toDate)) ||
			this.isInside(date) ||
			this.isHovered(date)
		);
	}

	validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
		const parsed = this.formatter.parse(input);
		return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
	}
	filterTable(tableId: any, inputId: any){
		console.log(tableId)
		this.tableFilterService.searchFilter(tableId.toString(), inputId.toString());
	}

	
}
