export class JobInput {
  work_year: number;
  experience_level: string;
  employment_type: string;
  job_title: string;
  employee_residence: string;
  remote_ratio: number;
  company_location: string;
  company_size: string;
  salary_level: string;

  constructor() {
    this.work_year = 2023;
    this.experience_level = 'Senior-level/Expert';
    this.employment_type = 'Full-Time';
    this.job_title = 'Data Science Manager';
    this.employee_residence = 'US';
    this.remote_ratio = 100;
    this.company_location = 'US';
    this.company_size = 'L';
    this.salary_level = 'Level 1';
  }
}
