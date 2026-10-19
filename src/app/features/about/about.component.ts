import { ProductsService } from '../../core/services/products.service';
import { Component, OnInit } from '@angular/core';
import { mergeMap, map, Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  constructor (private _ProductsService: ProductsService) {}

  users = new Observable((observer) => {
    observer.next('abdo'),
    observer.next('ali'),
    observer.next('hossam'),
    observer.error('error'),
    observer.complete(),
    observer.next('mohamed'),
    observer.next('ahmed')
  });

  ngOnInit(): void {
    this._ProductsService
      .getAllPosts()
      .pipe(
        mergeMap((resPosts: any) => {
          return this._ProductsService
            .getAllUsers()
            .pipe(
              map((resUsers: any) => {
                return [...resPosts, ...resUsers];
              }),
            )
          }),
        )
      .subscribe({
        next: (res) => {
          console.log(res);
        },
      });
  }
}
