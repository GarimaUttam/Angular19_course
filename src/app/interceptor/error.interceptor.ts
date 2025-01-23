import { HttpInterceptorFn } from '@angular/common/http';
import { CustomerService } from '../services/customer.service';
import { catchError, throwError } from 'rxjs';
import { inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http'; 

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  const custService = inject(CustomerService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => { 
      if (error.status === 401) {
        const isContinue = confirm("Are you sure to continue this session");
        if (isContinue) {
          custService.tokenExpired$.next(true);
        }
      }
      return throwError(error); // Handle other errors if needed
    })
  );
};