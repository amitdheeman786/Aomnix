import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpWrapperService {
  constructor(
    private HttpClient: HttpClient
  ) {
  }

  private generateRequestUrl(endpoint: string) {
    return environment.baseUrl + endpoint;
  }

  private generateHttpHeaders(options: HttpInputData) {
    let headers = {};
    if (options) {
      headers = { headers: options.headers, params: options.params }
    }
    return headers;
  }

  //  Post Api function **//
  post(endpoint: string, payload: any, options?: HttpInputData): Observable<any> {
    return this.HttpClient.post(this.generateRequestUrl(endpoint), payload, this.generateHttpHeaders(options));
  }

  //  Get Api function **//
  get(endpoint: string, options?: HttpInputData): Observable<any> {
    return this.HttpClient.get(this.generateRequestUrl(endpoint), this.generateHttpHeaders(options));

  }

  //  Put Api function **//
  put(endpoint: string, payload: any, options?: HttpInputData): Observable<any> {
    return this.HttpClient.put(this.generateRequestUrl(endpoint), payload, this.generateHttpHeaders(options));
  }

  // delete API function
  delete(endpoint: string, options?: HttpInputData): Observable<any> {
    return this.HttpClient.delete(this.generateRequestUrl(endpoint), this.generateHttpHeaders(options));
  }
}

export class HttpInputData {
  headers: HttpHeaders = null;
  params: HttpParams = null;
  authentication: boolean = null;
}
