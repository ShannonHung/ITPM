import { Component } from '@angular/core';
import { JobInput } from './data/input';

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

  sizes = ['L', 'S', 'M'];
  constructor() {
    console.log('constructor', this.jobData);
  }

  ngOnInit(): void {
    console.log('ngOninit', this.jobData);
  }
}
