import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./component/login/login.component";
import {Constants} from "./common/Constants";
import {RegistrationComponent} from "./component/registration/registration.component";
import {OtpComponent} from "./component/otp/otp.component";
import {NavigationComponent} from "./component/navigation/navigation.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: Constants.REGISTRATION_ROUTE, component: RegistrationComponent},
  {path: Constants.OTP_ROUTE, component: OtpComponent},
  {path: Constants.DASHBOARD_ROUTE, component: NavigationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
