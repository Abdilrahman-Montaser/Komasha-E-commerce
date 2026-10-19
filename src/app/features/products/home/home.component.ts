import { NgFor, NgIf } from '@angular/common';
import { ProductsService } from '../../../core/services/products.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from '../../../shared/components/product/product.component';
import { SearchPipe } from '../../../shared/pipes/search.pipe';
import { SliderComponent } from '../../../shared/components/slider/slider.component';

@Component({
  selector: 'app-home',
  imports: [NgFor, NgIf, ProductComponent, SearchPipe, FormsModule, SliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private _ProductsService: ProductsService) {}

  searchTerm: string = '';
  pros: any[] = [];
  getAllPros(): void {
    this._ProductsService.getAllpros().subscribe({
      next: (res) => {
        console.log('res', res.data);
        this.pros = res.data;
      }
    })
  }

  ngOnInit(): void {
    this.getAllPros();
  }
}
