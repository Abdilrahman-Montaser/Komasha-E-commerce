import { Toaster } from '../../../core/services/toaster.service';
import { ProductsService } from '../../../core/services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { CurrencyPipe, UpperCasePipe, NgIf } from '@angular/common';
import { LimitWordsPipe } from '../../../shared/pipes/limit-words.pipe';

@Component({
  selector: 'app-product-details',
  imports: [CurrencyPipe, LimitWordsPipe, UpperCasePipe, NgIf],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  constructor(private _ProductsService: ProductsService, private _ActivatedRoute: ActivatedRoute, private _Toaster: Toaster) {}
  product:any;

  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe({
      next: (res) => {
        console.log(res['id']);
        this._ProductsService.getSpecPro(res['id']).subscribe({
          next: (res) => {
            console.log(res.data);
            this.product = res.data;
          }
        })
      }
    })
  }

  addPro(): void {
    this._ProductsService.addToCard(this.product._id).subscribe({
      next: (res) => {
        console.log(res);
        if (res.status == 'success') {
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
          this._Toaster.showSuccess(res.message);
        }
      }
    })
  }
}
