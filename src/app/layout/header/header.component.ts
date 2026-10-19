import { ProductsService } from '../../core/services/products.service';
import { NgIf } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MyTranslateService } from '../../core/services/my-translate.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(public _AuthService:AuthService, private _ProductsService: ProductsService, private _MyTranslateService: MyTranslateService) {}

  totalNumCartPros: number = 0;
  totalPriceCartPros: number = 0;
  cartPros: any[] = [];

  ngOnInit(): void {
    this.getCartCount();
  }

  getCartCount(): void {
    this._ProductsService.getProCart().subscribe({
      next: (res) => {
        this.cartPros = res.data.products;
        this.totalPriceCartPros = res.data.totalCartPrice;
        for (let i = 0; i < this.cartPros.length; i++) {
          this.totalNumCartPros += this.cartPros[i].count;
        }
      }
    })
  }

  switchLang(lang: string) {
    this._MyTranslateService.changeLang(lang);
  }
}
