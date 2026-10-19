import { NgFor, NgIf } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ProductComponent } from '../product/product.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-slider',
  imports: [CarouselModule, NgFor, ProductComponent, NgIf],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent {
  @Input() pros: any[] = [];

  private _TranslateService = inject(TranslateService);

  showCarousel: boolean = true;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    responsive: {
      0: { items: 1 },
      400: { items: 2 },
      740: { items: 3 },
      940: { items: 4 }
    },
    nav: true,
    rtl: false,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
  };

  ngOnInit(): void {
    const currentLang = localStorage.getItem('userLang') || 'en';
    this.updateCarousel(currentLang);

    this._TranslateService.onLangChange.subscribe((event: any) => {
      this.updateCarousel(event.lang);
    });
  }

  updateCarousel(lang: string) {
    this.showCarousel = false;

    if (lang === 'ar') {
      this.customOptions.rtl = true;
      this.customOptions.navText = ['<i class="fa fa-chevron-right"></i>', '<i class="fa fa-chevron-left"></i>'];
    } else {
      this.customOptions.rtl = false;
      this.customOptions.navText = ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'];
    }

    setTimeout(() => {
      this.showCarousel = true;
    }, 50);
  }
}
