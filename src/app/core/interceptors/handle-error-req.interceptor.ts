import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { Toaster } from '../services/toaster.service';
import { inject } from '@angular/core';

export const handleErrorReqInterceptor: HttpInterceptorFn = (req, next) => {
  let _Toaster = inject(Toaster);
  return next(req).pipe(catchError((err) => {
    _Toaster.showError(err.error?.message);
    return throwError(() => err);
  }));
};
