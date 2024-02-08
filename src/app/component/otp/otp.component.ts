import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CountdownConfig, CountdownEvent} from "ngx-countdown";
import {Router} from "@angular/router";
import {Constants} from "../../common/Constants";

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OtpComponent implements OnInit{

  isInvalidOtp = false;
  isNotifyEnabled = false;
  config: CountdownConfig = {
    leftTime: 120 ,
    format: 'm:s',
    notify: [15]
  };
  notify = '';
  otpForm = new FormGroup({
    otpCode1: new FormControl('', [Validators.required]),
    otpCode2: new FormControl('', [Validators.required]),
    otpCode3: new FormControl('', [Validators.required]),
    otpCode4: new FormControl('', [Validators.required]),

  })

  constructor(private router: Router) {
  }
  ngOnInit() {
  }
  onSubmit(){
    const defaultOtpCode = '0000'
    let authenticationCode = '';
    if (this.otpForm.valid){
      if (this.otpForm.controls.otpCode1.value != null &&
        this.otpForm.controls.otpCode2.value != null && this.otpForm.controls.otpCode3.value != null
      && this.otpForm.controls.otpCode4.value != null){
        authenticationCode = this.otpForm.controls.otpCode1.value.toString().concat(
          this.otpForm.controls.otpCode2.value.toString().concat(this.otpForm.controls.otpCode3.value.toString()
            .concat(this.otpForm.controls.otpCode4.value.toString()))
        )
      }
      if (authenticationCode !== defaultOtpCode){
        this.isInvalidOtp = true;
      } else {
        this.isInvalidOtp = false;
        this.router.navigate([Constants.DASHBOARD_ROUTE.concat('/'.concat(Constants.DASHBOARD_OVERVIEW_ROUTE))])
      }
    }
  }
  notifyRemainingTime(event: CountdownEvent){
    this.isNotifyEnabled = false;
    if (event.action === 'notify') {
      this.isNotifyEnabled = true;
      this.notify += ` - ${event.left/1000}s ` ;
    }
  }

}
