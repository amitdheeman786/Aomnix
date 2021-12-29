import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { StorageService } from '../../storage/storage.service';
import { Storage_Keys } from '../../storage/storage.keys';
import { tap } from 'rxjs/operators';

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(
    private storage: StorageService,
    private router: Router
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let headers = {};
    let savedData = this.storage.getSavedData();
    if (savedData && savedData[Storage_Keys.token]) {
      let token = savedData[Storage_Keys.token].token;
      headers['Authorization'] = token;
    }
    const interceptedRequest = request.clone({
      "headers": new HttpHeaders(headers)
    });
    return next.handle(interceptedRequest).pipe(
      tap(
        (event: HttpEvent<any>) => {

        },
        (error) => {
          if (error instanceof HttpErrorResponse) {
            if (error.status == 401) {
              this.storage.clearStorageForLogout();
              this.router.navigate(['/login']);
            }
          }
        }
      )
    )
  }
}
