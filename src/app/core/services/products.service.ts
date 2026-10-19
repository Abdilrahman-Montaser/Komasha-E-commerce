import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _HttpClient: HttpClient) {}

  getAllpros(): Observable<any> {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products`);
  }

  getSpecPro(proId: string): Observable<any> {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${proId}`);
  }

  addToCard(proId: string): Observable<any> {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/cart`,
      {
        productId: proId
      },
    );
  }
  getProCart(): Observable<any> {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/cart`,
    )
  }
  delSpecProCart(id: string): Observable<any> {
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
    )
  }
  delProsCart(): Observable<any> {
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart`,
    )
  }
  updSpecCart(id: string, proCount: number): Observable<any> {
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      {
        count: proCount
      },
    );
  }

  getWishPros(): Observable<any> {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,
    )
  }
  addWishPro(proId: string): Observable<any> {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,
      {
        productId: proId,
      },
    )
  }
  delWishPro(proId: string): Observable<any> {
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${proId}`,
    )
  }

  getAllPosts(): Observable<any> {
    return this._HttpClient.get(`https://jsonplaceholder.typicode.com/posts`);
  }
  getAllUsers(): Observable<any> {
    return this._HttpClient.get(`https://jsonplaceholder.typicode.com/users`);
  }
}
