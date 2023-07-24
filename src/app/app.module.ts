import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  NgbAccordionBody,
  NgbAccordionButton, NgbAccordionCollapse,
  NgbAccordionDirective,
  NgbAccordionHeader,
  NgbAccordionItem, NgbModule
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
    TenantEditProfileComponent
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
        NgxEchartsModule.forRoot({
            echarts: () => import('echarts')
        }),
        CountdownComponent,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
