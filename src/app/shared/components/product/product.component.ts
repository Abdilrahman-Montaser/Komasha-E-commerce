import { Toaster } from '../../../core/services/toaster.service';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { ProductsService } from '../../../core/services/products.service';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LimitWordsPipe } from '../../pipes/limit-words.pipe';

@Component({
  selector: 'app-product',
  imports: [RouterLink, UpperCasePipe, CurrencyPipe, LimitWordsPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  constructor(private _ProductsService: ProductsService, private _Toaster: Toaster) {}
  @Input() product: any;

  addPro(): void {
    this._ProductsService.addToCard(this.product._id).subscribe({
      next: (res) => {
        console.log(res);
        if (res.status == "success") {
          this._Toaster.showSuccess(res.message);
        }
      }
    })
  }
  addWishPro(proId: string): void {
    this._ProductsService.addWishPro(proId).subscribe({
      next: (res) => {
        console.log(res);
        if (res.status == 'success') {
          this._Toaster.showSuccess(res.message)
        }
      }
    })
  }
}
