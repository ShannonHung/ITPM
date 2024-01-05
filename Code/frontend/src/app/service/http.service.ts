import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class HttpService {
  private readonly TIMEOUT = 100000;

  constructor(private http: HttpClient) {}

  public getFile(
    url: string,
    params?: object | string[] | string
  ): Observable<any> {
    return this.http
      .get(url + (params || ''), { responseType: 'blob' })
      .pipe(timeout(this.TIMEOUT));
  }

  public get(
    url: string,
    params?: object | string[] | string
  ): Observable<any> {
    return this.http.get(url + (params || '')).pipe(timeout(this.TIMEOUT));
  }

  public post(
    url: string,
    body?: object | string,
    option?: any
  ): Observable<any> {
    return this.http.post(url, body, option).pipe(timeout(this.TIMEOUT));
  }

  public delete(
    url: string,
    params?: object | string[] | string | number | number[]
  ): Observable<any> {
    return this.http
      .delete(url + '/' + (params || ''))
      .pipe(timeout(this.TIMEOUT));
  }

  public delete2(
    url: string,
    params?: object | string[] | string | number | number[]
  ): Observable<any> {
    return this.http.delete(url).pipe(timeout(this.TIMEOUT));
  }

  public put(url: string, body?: object): Observable<any> {
    return this.http.put(url, body).pipe(timeout(this.TIMEOUT));
  }

  public patch(
    url: string,
    body?: object,
    params?: object | string[] | string
  ): Observable<any> {
    return this.http
      .patch(url + (params || ''), body)
      .pipe(timeout(this.TIMEOUT));
  }
}
