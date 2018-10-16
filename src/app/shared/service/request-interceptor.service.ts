import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RequestInterceptorService implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.headers.get('server')) {
      console.log(request);
      if (request.url.includes('/api/') && request.headers.get('server').includes('GitHub.com')) {
        let jsonServerUrl = request.url.replace('/api/', '/bgw7/ng-redux/');
      request = request.clone({
        url: `http://my-json-server.typicode.com${jsonServerUrl}`
      });
      console.log(request);
      }
    }
    return next.handle(request);
  }
}