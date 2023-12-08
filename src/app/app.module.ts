import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  NgbAccordionBody,
  NgbAccordionButton, NgbAccordionCollapse,
  NgbAccordionDirective,
  NgbAccordionHeader,
  NgbAccordionItem, NgbModule,
} from "@ng-bootstrap/ng-bootstrap";
import { LoginComponent } from './component/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RegistrationComponent } from './component/registration/registration.component';
import { OtpComponent } from './component/otp/otp.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import {NgxEchartsModule} from "ngx-echarts";
import {TruncatePipe} from "./common/pipes/truncate.pipe";
import { BuildingListComponent } from './component/building-list/building-list.component';
import { DashboardOverviewComponent } from './component/dashboard-overview/dashboard-overview.component';
import {CountdownComponent} from "ngx-countdown";
import { BuildingDetailsComponent } from './component/building-details/building-details.component';
import { TenantProfileComponent } from './component/tenant-profile/tenant-profile.component';
import { TenantEditProfileComponent } from './component/tenant-edit-profile/tenant-edit-profile.component';
import { EmailDirective } from './common/directives/email.directive';
import { AddTenantComponent } from './component/add-tenant/add-tenant.component';
import { FinancialHistoryComponent } from './component/financial-history/financial-history.component';
import { MaintenanceComponent } from './component/maintenance/maintenance.component';
import { OwnerFinanceComponent } from './component/owner-finance/owner-finance.component';
import { GenerateInvoiceComponent } from './component/generate-invoice/generate-invoice.component';
import { BuildingAccountingComponent } from './component/building-accounting/building-accounting.component';
import { BuildingOverviewComponent } from './component/building-overview/building-overview.component';
import { BuildingDocumentsComponent } from './component/building-documents/building-documents.component';
import { BuildingDirectoryComponent } from './component/building-directory/building-directory.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { BuildingMaintenanceComponent } from './component/building-maintenance/building-maintenance.component';
import { BuildingEditComponent } from './component/building-edit/building-edit.component';
import { BuildingLeaseComponent } from './component/building-lease/building-lease.component';
import { BuildingTenantComponent } from './component/building-tenant/building-tenant.component';
import { TenantLeaseComponent } from './component/tenant-lease/tenant-lease.component';
import { TenantComponent } from './component/tenant/tenant.component';
import { TenantOverviewComponent } from './component/tenant-overview/tenant-overview.component';
import { TenantListComponent } from './component/tenant-list/tenant-list.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    OtpComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    TruncatePipe,
    BuildingListComponent,
    DashboardOverviewComponent,
    BuildingDetailsComponent,
    TenantProfileComponent,
    TenantEditProfileComponent,
    EmailDirective,
    AddTenantComponent,
    FinancialHistoryComponent,
    MaintenanceComponent,
    OwnerFinanceComponent,
    GenerateInvoiceComponent,
    BuildingAccountingComponent,
    BuildingOverviewComponent,
    BuildingDocumentsComponent,
    BuildingDirectoryComponent,
    BuildingMaintenanceComponent,
    BuildingEditComponent,
    BuildingLeaseComponent,
    BuildingTenantComponent,
    TenantLeaseComponent,
    TenantComponent,
    TenantOverviewComponent,
    TenantListComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbAccordionItem,
        NgbAccordionHeader,
        NgbAccordionButton,
        NgbAccordionDirective,
        NgbAccordionCollapse,
        NgbAccordionBody,
        NgbModule,
        ReactiveFormsModule,
        FormsModule,
        NgMultiSelectDropDownModule.forRoot(),
        NgxEchartsModule.forRoot({
            echarts: () => import('echarts')
        }),
        CountdownComponent,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
