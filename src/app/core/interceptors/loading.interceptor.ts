import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs';

let busyReqCount = 0; // Case => If many requests calls the spinner still load until the final request then hide.

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  let spinner = inject(NgxSpinnerService);
  busyReqCount++; // Increase by new req.
  spinner.show();
  return next(req).pipe(
    finalize(() => {
      busyReqCount--; // Decrease by req Done.

      if (busyReqCount <= 0) {
        busyReqCount = 0;
        spinner.hide();
      }
    })
  );
};
