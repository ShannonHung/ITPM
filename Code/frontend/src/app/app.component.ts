import { Component } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { JobInput } from './data/input';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  jobData = new JobInput();
  years = [2021, 2022, 2023, 2024, 2025];
  levels = [
    'Entry-level/Junior',
    'Mid-level/Intermediate',
    'Senior-level/Expert',
    'Executive-level/Director',
  ];
  emp_types = ['Full-Time', 'Contract', 'Part-Time', 'Freelance'];
  job_titles = [
    'Data Engineer',
    'Data Scientist',
    'Data Analyst',
    'Machine Learning Engineer',
    'Analytics Engineer',
    'Data Architect',
    'Research Scientist',
    'Data Science Manager',
    'Applied Scientist',
    'Research Engineer',
    'Data Analyst',
  ];
  locations = [
    'ES',
    'US',
    'CA',
    'DE',
    'GB',
    'NG',
    'IN',
    'HK',
    'NL',
    'CH',
    'CF',
    'FR',
    'FI',
    'UA',
    'IE',
    'IL',
    'GH',
    'CO',
    'SG',
    'AU',
    'SE',
    'SI',
    'MX',
    'BR',
    'PT',
    'RU',
    'TH',
    'HR',
    'VN',
    'EE',
    'AM',
    'BA',
    'KE',
    'GR',
    'MK',
    'LV',
    'RO',
    'PK',
    'IT',
    'MA',
    'PL',
    'AL',
    'AR',
    'LT',
    'AS',
    'CR',
    'IR',
    'BS',
    'HU',
    'AT',
    'SK',
    'CZ',
    'TR',
    'PR',
    'DK',
    'BO',
    'PH',
    'BE',
    'ID',
    'EG',
    'AE',
    'LU',
    'MY',
    'HN',
    'JP',
    'DZ',
    'IQ',
    'CN',
    'NZ',
    'CL',
    'MD',
    'MT',
  ];
  regions = [
    'ES',
    'US',
    'CA',
    'DE',
    'GB',
    'NG',
    'IN',
    'HK',
    'PT',
    'NL',
    'CH',
    'CF',
    'FR',
    'AU',
    'FI',
    'UA',
    'IE',
    'IL',
    'GH',
    'AT',
    'CO',
    'SG',
    'SE',
    'SI',
    'MX',
    'UZ',
    'BR',
    'TH',
    'HR',
    'PL',
    'KW',
    'VN',
    'CY',
    'AR',
    'AM',
    'BA',
    'KE',
    'GR',
    'MK',
    'LV',
    'RO',
    'PK',
    'IT',
    'MA',
    'LT',
    'BE',
    'AS',
    'IR',
    'HU',
    'SK',
    'CN',
    'CZ',
    'CR',
    'TR',
    'CL',
    'PR',
    'DK',
    'BO',
    'PH',
    'DO',
    'EG',
    'ID',
    'AE',
    'MY',
    'JP',
    'EE',
    'HN',
    'TN',
    'RU',
    'DZ',
    'IQ',
    'BG',
    'JE',
    'RS',
    'NZ',
    'MD',
    'LU',
    'MT',
  ];
  options = [
    {
      value:
        'Model1 (Acc:73%): Predict whether your salary will exceed 135,000 USD per year?',
      label: '2',
    },
    {
      value:
        'Model2 (Acc:63%): Predict where your salary will fall? (25th, 50th percentile)',
      label: '3',
    },
    {
      value:
        'Model3 (Acc:50%): Predict where your salary will fall? (25th, 50th, 75th percentile)',
      label: '4',
    },
  ];
  option = '4';
  sizes = ['L', 'S', 'M'];
  isAnalysis = false;
  ans = -1;

  constructor(private api: ApiService, private toastrService: NbToastrService) {
    console.log('constructor', this.jobData);
  }

  ngOnInit(): void {
    console.log('ngOninit', this.jobData);
  }

  onClickBtn() {
    this.isAnalysis = true;
    console.log('onClickBtn', this.jobData, this.option);
    this.api.getSalaryPredict(this.jobData, this.option).subscribe((res) => {
      this.toastrService.success(
        'Success',
        'Salary Prediction' + (res.level + 1)
      );
      this.isAnalysis = false;
      this.ans = res.level + 1;
    });
  }
}
