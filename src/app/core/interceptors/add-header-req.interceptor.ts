import { HttpInterceptorFn } from '@angular/common/http';

export const addHeaderReqInterceptor: HttpInterceptorFn = (req, next) => {
  let token = localStorage.getItem('userToken');
  if (token) {
    let newReq = req.clone({
      headers: req.headers.set('token', token)
    });
    return next(newReq);
  }
  return next(req);
};
