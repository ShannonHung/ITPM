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
  /**
   * 8 Deployment - Step 11.
   * Check: During the professional provision, the applicability of the analysis must be checked by the target group.
   * We display the model's prediction results on the front end in a way that is easy to understand and operate.
   * @param data
   * @returns
   */
  getSalaryPredict(data: JobInput, model_id: string) {
    console.log('getSalaryPredict api called:', data);
    return this.http.post(`${this.api}/predict/${model_id}`, data);
  }
}
