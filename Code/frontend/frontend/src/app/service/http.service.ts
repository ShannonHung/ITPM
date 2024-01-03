import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { Observable } from 'rxjs';
import { map, timeout } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class HttpService {
  private readonly TIMEOUT = 100000;

  constructor(
    private http: HttpClient,
    private toastrService: NbToastrService
  ) {}

  public get(
    url: string,
    params?: object | string[] | string
  ): Observable<any> {
    return this.http.get(url + (params || ''), { observe: 'response' }).pipe(
      map((response) => {
        return response.body; // Return the body to the subscribers
      }),
      timeout(this.TIMEOUT)
    );
  }

  public post(
    url: string,
    body?: object | string,
    option?: any
  ): Observable<any> {
    console.log('post action', option && option.observe === 'events');
    if (option && option.observe === 'events') {
      return this.http.post(url, body, option).pipe(timeout(this.TIMEOUT));
    } else {
      return this.http.post(url, body, { observe: 'response' }).pipe(
        map((response) => {
          return response.body; // Return the body to the subscribers
        }),
        timeout(this.TIMEOUT)
      );
    }
  }

  public delete(
    url: string,
    params?: object | string[] | string | number | number[],
    option?: any
  ): Observable<any> {
    return this.http.delete(url + (params || ''), { observe: 'response' }).pipe(
      map((response) => {
        return response.body; // Return the body to the subscribers
      }),
      timeout(this.TIMEOUT)
    );
  }

  public put(url: string, body?: object, option?: any): Observable<any> {
    return this.http.put(url, body, { observe: 'response' }).pipe(
      map((response) => {
        return response.body; // Return the body to the subscribers
      }),
      timeout(this.TIMEOUT)
    );
  }

  public patch(
    url: string,
    body?: object,
    params?: object | string[] | string,
    option?: any
  ): Observable<any> {
    return this.http
      .patch(url + (params || ''), body, { observe: 'response' })
      .pipe(
        map((response) => {
          return response.body; // Return the body to the subscribers
        }),
        timeout(this.TIMEOUT)
      );
  }
}
