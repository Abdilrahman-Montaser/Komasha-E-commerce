import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

interface UserRegister {
  name: string;
  email: string;
  password: string;
  rePassword: string;
  phone: string;
}
interface UserLogin {
  email: string;
  password: string;
}
interface User {
  _id: string;
  name: string;
  email: string;
  createdAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    if (localStorage.getItem('userToken') !== null) {
      this.userIsLogin.next(true);
    }

    try {
      let decode: any = jwtDecode(localStorage.getItem('userToken')!);
      console.log(decode.id);
      this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/auth/verifyToken`).subscribe({
        next: (res: any) => {
          console.log(res);
          this.allUsers = res.users;
        }
      })

    } catch (error:any) {
      console.log(error.message);
      this.logOut();
    }
    this.verifyToken().subscribe({
        next: (res) => {
          console.log(res);
          console.log('in',localStorage.getItem('userToken'));
          if (res.message === "verified") {
            console.log(`The Token Is Verified`);
            this.userIsLogin.next(true);
          } else {
            console.error(`The Token Is Not Verified And Not Exist`);
            this.userIsLogin.next(false);
          }
        }
      })
  }

  userIsLogin = new BehaviorSubject(false);
  allUsers: User[] = [];

  register(payload: UserRegister): Observable<any> {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, payload);
  }
  login(payload: UserLogin): Observable<any> {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, payload!);
  }
  logOut(): void {
    localStorage.removeItem('userToken');
    this.userIsLogin.next(false);
    this._Router.navigate(['login']);
  }
  verifyToken(): Observable<any> {
    const token = localStorage.getItem('userToken');
    const headers = new HttpHeaders().set('token', token!);
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/auth/verifyToken`, {headers})
  }
}
