import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class Toaster {
  constructor(private _ToastrService: ToastrService) {}

  showSuccess(mess: string) {
    this._ToastrService.success(mess);
  }
  showError(mess: string) {
    this._ToastrService.error(mess);
  }
  showWarning(mess: string) {
    this._ToastrService.warning(mess);
  }
  showInfo(mess: string) {
    this._ToastrService.info(mess);
  }
}
