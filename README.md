# ITPM
IT Project Management - Final Project

# About Project 

```bash  
.
4 directories, 12 files
```
# test-sophia

# About Dataset
- Source: [Data Science Salaries 2023 💸](https://www.kaggle.com/datasets/arnabchaki/data-science-salaries-2023/data)
Data Science Job Salaries Dataset contains 11 columns, each are:
1. `work_year`: The year the salary was paid. (e.g 2023)
2. `experience_level`: The experience level in the job during the year.
    - 'EN': 'Entry-level/Junior',
    - 'MI': 'Mid-level/Intermediate',
    - 'SE': 'Senior-level/Expert',
    - 'EX': 'Executive-level/Director'
3. `employment_type`: The type of employment for the role
4. `job_title`: The role worked in during the year.
5. `salary`: The total gross salary amount paid.
6. `salary_currency`: The currency of the salary paid as an ISO 4217 currency code.
7. `salaryinusd`: The salary in USD
8. `employee_residence`: Employee's primary country of residence in during the work year as an ISO 3166 country code.
9.  `remote_ratio`: The overall amount of work done remotely
10. `company_location`: The country of the employer's main office or contracting branch
11. `company_size`: The median number of people that worked for the company during the year


## value counts

```console
experience_level
SE    2516
MI     805
EN     320
EX     114
Name: count, dtype: int64

employment_type
FT    3718
PT      17
CT      10
FL      10
Name: count, dtype: int64

job_title
Data Engineer                          1040
Data Scientist                          840
Data Analyst                            612
Machine Learning Engineer               289
Analytics Engineer                      103
                                       ... 
Principal Machine Learning Engineer       1
Azure Data Engineer                       1
Manager Data Management                   1
Marketing Data Engineer                   1
Finance Data Analyst                      1
Name: count, Length: 93, dtype: int64

salary_currency
USD    3224
EUR     236
GBP     161
INR      60
CAD      25
AUD       9
SGD       6
BRL       6
PLN       5
CHF       4
HUF       3
DKK       3
JPY       3
TRY       3
THB       2
ILS       1
HKD       1
CZK       1
MXN       1
CLP       1
Name: count, dtype: int64

employee_residence
US    3004
GB     167
CA      85
ES      80
IN      71
      ... 
BA       1
AM       1
CY       1
KW       1
MT       1
Name: count, Length: 78, dtype: int64

company_size
M    3153
L     454
S     148
Name: count, dtype: int64
```