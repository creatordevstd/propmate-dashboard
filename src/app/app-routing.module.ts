import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./component/login/login.component";
import {Constants} from "./common/Constants";
import {RegistrationComponent} from "./component/registration/registration.component";
import {OtpComponent} from "./component/otp/otp.component";
import {DashboardComponent} from "./component/dashboard/dashboard.component";
import {BuildingListComponent} from "./component/building-list/building-list.component";
import {DashboardOverviewComponent} from "./component/dashboard-overview/dashboard-overview.component";
import {TenantProfileComponent} from "./component/tenant-profile/tenant-profile.component";
import {TenantEditProfileComponent} from "./component/tenant-edit-profile/tenant-edit-profile.component";

const routes: Routes = [
  { path: '', component: LoginComponent},
  {path: Constants.REGISTRATION_ROUTE, component: RegistrationComponent},
  {path: Constants.OTP_ROUTE, component: OtpComponent},
  {path: Constants.DASHBOARD_ROUTE.concat('/:component'), component: DashboardComponent},
  {path: Constants.DASHBOARD_OVERVIEW_ROUTE, component: DashboardOverviewComponent},
  {path: Constants.BUILDING_LIST_ROUTE, component: BuildingListComponent},
  {path: Constants.BUILDING_DETAILS_ROUTE.concat('/:id'), component: BuildingListComponent},
  {path: Constants.TENANT_PROFILE_ROUTE.concat('/:id'), component: TenantProfileComponent},
  {path: Constants.EDIT_TENANT_PROFILE, component: TenantEditProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
