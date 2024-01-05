import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { JobInput } from '../data/input';
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
