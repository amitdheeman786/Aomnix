import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Endpoints } from '../http/http-wrapper/endpoint';
import { HttpInputData, HttpWrapperService } from '../http/http-wrapper/http-wrapper.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToastrService,
    private http: HttpWrapperService
  ) { }

  presentSpinner() {
    this.spinner.show();
  }

  dismissSpinner() {
    this.spinner.hide();
  }

  showSuccessToastMsg(title?: string, message?: string) {
    this.toast.success(message, title, {
      timeOut: 2000
    });
  }

  showErrorToastMsg(title?: string, message?: string) {
    this.toast.error(message, title, {
      timeOut: 3000
    });
  }

  matchConfirmPassword(formGroup: FormGroup) {
    const password = formGroup.get('newPassword').value;
    const confirmPassword = formGroup.get('confirmPassword').value;

    let returnAble = password === confirmPassword ? null : { notSame: true };

    return returnAble
  }

  getDashboardData(period: string) {
    let httpInputData = new HttpInputData();
    let httpParams = new HttpParams();
    if (period) {
      httpParams = httpParams.set('period', period);
    }
    httpInputData.params = httpParams;
    return new Promise((resolve, reject) => {
      this.http.get(Endpoints.dashboard, httpInputData).subscribe(
        (res) => {
          resolve(res);
        },
        (error) => {
          if (error && error.error && error.error.message) {
            this.showErrorToastMsg('', error.error.message);
          } else {
            this.showErrorToastMsg('', 'Something went wrong. Please try again later.');
          }
          reject(error);
        }
      )
    });
  }
}
