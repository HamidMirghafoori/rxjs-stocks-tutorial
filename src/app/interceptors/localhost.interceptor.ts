import { HttpInterceptorFn } from '@angular/common/http';
import { serverUrl } from '../consts/routes';

export const localhostInterceptor: HttpInterceptorFn = (req, next) => {

  const apiReq = req.clone({
    url: `${serverUrl}${req.url}`,
  });
  return next(apiReq);
};
