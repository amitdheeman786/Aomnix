import { Injectable } from '@angular/core';
import { CommonService } from '../common/common.service';
import { Endpoints } from '../http/http-wrapper/endpoint';
import { HttpWrapperService } from '../http/http-wrapper/http-wrapper.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpWrapperService,
    private commonService: CommonService
  ) { }

  login(payload: { email: string, password: string }): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(Endpoints.login, payload).subscribe(
        (res) => {
          resolve(res);
        },
        (error) => {
          if (error && error.error && error.error.message) {
            this.commonService.showErrorToastMsg('', error.error.message);
          } else {
            this.commonService.showErrorToastMsg('', 'Something went wrong. Please try again later.');
          }
          reject(error);
        }
      );
    });
  }

  logout() {
    return new Promise((resolve, reject) => {
      this.http.get(Endpoints.logout).subscribe(
        (res) => {
          resolve(res);
        },
        (error) => {
          if (error && error.error && error.error.message) {
            this.commonService.showErrorToastMsg('', error.error.message);
          } else {
            this.commonService.showErrorToastMsg('', 'Something went wrong. Please try again later.');
          }
          reject(error);
        }
      )
    })
  }

  changePassword(payload: { newPassword: string, confirmPassword: string }) {
    return new Promise((resolve, reject) => {
      this.http.put(Endpoints.changePassword, payload).subscribe(
        (res) => {
          resolve(res);
        },
        (error) => {
          if (error && error.error && error.error.message) {
            this.commonService.showErrorToastMsg('', error.error.message);
          } else {
            this.commonService.showErrorToastMsg('', 'Something went wrong. Please try again later.');
          }
          reject(error);
        }
      )
    })
  }
}
