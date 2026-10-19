import { CommonModule, CurrencyPipe, UpperCasePipe } from '@angular/common';
import { ProductsService } from '../../core/services/products.service';
import { Component } from '@angular/core';
import { FormsModule, ɵInternalFormsSharedModule } from "@angular/forms";
import { LimitWordsPipe } from '../../shared/pipes/limit-words.pipe';
import { Toaster } from '../../core/services/toaster.service';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, ɵInternalFormsSharedModule, FormsModule, CurrencyPipe, LimitWordsPipe, UpperCasePipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(private _ProductsService: ProductsService, private _Toaster: Toaster) {}

  cartPros: any[] = [];
  totalCartPrice: number = 0;
  updTimeId: any;

  ngOnInit(): void {
    this.getProsCart();
  }

  getProsCart(): void {
    this._ProductsService.getProCart().subscribe({
      next: (res) => {
        console.log(res);
        this.cartPros = res.data.products;
        this.totalCartPrice = res.data.totalCartPrice;
      }
    })
  }
  delSpecProCart(id: string): void {
    this._ProductsService.delSpecProCart(id).subscribe({
      next: (res) => {
        this.cartPros = res.data.products;
        this._Toaster.showSuccess(`Product removed from cart successfully`);
      }
    })
  }
  delProsCart(): void {
    this._ProductsService.delProsCart().subscribe({
      next: (res) => {
        if (res.message == 'success') {
          this._Toaster.showSuccess(`Cart Deleted Successfully`);
          this.cartPros = [];
          this.totalCartPrice = 0
        }
      }
    })
  }

  updSpecCart(id: string, proCount: number): void {
    clearTimeout(this.updTimeId)
    this.updTimeId = setTimeout(() => {
      if (proCount == 0) {
        this.delSpecProCart(id);
      } else {
        this._ProductsService.updSpecCart(id, proCount).subscribe({
          next: (res) => {
            console.log(res);
            this.totalCartPrice = res.data.totalCartPrice;
          },
        });
      }
    }, 700);
  }
}
