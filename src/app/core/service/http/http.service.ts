import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { ApiMethod, AuthEndPoints } from '../../constant/api-constant';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';

@Injectable({
  providedIn: 'root',
})

export class HttpService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private toasterService: ToastService
  ) {}

  requestCall(
    method: ApiMethod,
    api: apiAuthEndPoints ,
    data: any = {},
    queryParams: string = '',
    header: any = {}
  ) {
    let response;
    switch (method) {
      case ApiMethod.GET:
        response = this.http
          .get(`${environment.apiUrl}${api}` + queryParams, header)
          .pipe(catchError((err) => this.handleError(err, this)));
        break;
      case ApiMethod.POST:
        response = this.http
          .post(`${environment.apiUrl}${api}` + queryParams, data)
          .pipe(catchError((err) => this.handleError(err, this)));
        break;
      case ApiMethod.DELETE:
        response = this.http
          .delete(`${environment.apiUrl}${api}` + queryParams)
          .pipe(catchError((err) => this.handleError(err, this)));
        break;
      case ApiMethod.PUT:
        response = this.http
          .put(`${environment.apiUrl}${api}` + queryParams, data)
          .pipe(catchError((err) => this.handleError(err, this)));
        break;
      default:
        break;
    }
    //Create model for response
    return response;
  }

  handleError(error: HttpErrorResponse, self: any) {
    if (error.status == 401) {
      this.router.navigate(['/auth']);
      this.toasterService.show('Please login to continue.', {
        classname: 'toast-warning',
        delay: 5000,
      });
    }
    if (error.error instanceof ErrorEvent) {
      // console.log(error.error.message, self)
    } else if (error instanceof HttpErrorResponse) {
      return throwError(error);
    } else {
      //this._error.whichError(error.status,error.message);
    }
    return throwError({ error: error.message, status: error.status });
  }

  get<T>(url: AuthEndPoints, params?: HttpParams): Observable<T> {
    return this.http.get<T>(`${environment.apiUrl}${url}`, { params });
  }

  post<T>(url: AuthEndPoints, postData: T): Observable<Response> {
    return this.http.post<Response>(`${environment.apiUrl}${url}`, postData);
  }

  putData<T>(url: AuthEndPoints, postData: T): Observable<Response> {
    return this.http.put<Response>(`${environment.apiUrl}${url}`, postData);
  }

  delete<T>(url: AuthEndPoints, params?: HttpParams): Observable<Response> {
    return this.http.delete<Response>(`${environment.apiUrl}${url}`, {
      params,
    });
  }
}

type apiAuthEndPoints = AuthEndPoints;

