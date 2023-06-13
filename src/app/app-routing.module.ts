import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./component/login/login.component";
import {Constants} from "./common/Constants";
import {RegistrationComponent} from "./component/registration/registration.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: Constants.REGISTRATION_ROUTE, component: RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
