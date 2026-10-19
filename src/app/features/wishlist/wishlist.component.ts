import { Toaster } from '../../core/services/toaster.service';
import { CurrencyPipe, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { ProductsService } from '../../core/services/products.service';
import { Component } from '@angular/core';
import { LimitWordsPipe } from '../../shared/pipes/limit-words.pipe';

@Component({
  selector: 'app-wishlist',
  imports: [NgFor, NgIf, CurrencyPipe, UpperCasePipe, LimitWordsPipe],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {
  constructor(private _ProductsService: ProductsService, private _Toaster: Toaster) {}

  wishPros: any[] = [];

  getWishPros(): void {
    this._ProductsService.getWishPros().subscribe({
      next: (res) => {
        console.log(res.data);
        this.wishPros = res.data;
      }
    })
  }
  delWishPro(proId: string): void {
    this._ProductsService.delWishPro(proId).subscribe({
      next: (res) => {
        console.log(res);
        if (res.status == 'success') {
          this._Toaster.showSuccess(res.message);
          this.getWishPros();
        }
      }
    })
  }
  addToCard(proId: string): void {
    this._ProductsService.addToCard(proId).subscribe({
      next: (res) => {
        console.log(res);
        if (res.status == "success") {
          this._Toaster.showSuccess(res.message);
        }
      }
    })
  }

  ngOnInit(): void {
    this.getWishPros();
  }
}
