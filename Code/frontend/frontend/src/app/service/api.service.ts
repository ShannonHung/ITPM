import { Injectable } from '@angular/core';
import { JobInput } from '../data/input';
import { environment } from '../environments/environment';
import { HttpService } from './http.service';

@Injectable()
export class ApiService {
  api: string;

  constructor(private http: HttpService) {
    this.api = environment.api;
  }

  getSalaryPredict(data: JobInput) {
    console.log('getSalaryPredict api called:', data);
    return this.http.post(`${this.api}/predict`, data);
  }
}
