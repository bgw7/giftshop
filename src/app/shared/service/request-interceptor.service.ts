import { NgZone } from '@angular/core';
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
 href: string = '';
  constructor(private ngZone: NgZone) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.ngZone.run(() => {
      this.href = window.location.href;
    });
      if (this.href.includes('https://bgw7.github.io/ng-redux/')) {
        let jsonServerUrl = this.href.replace('/api/', '/bgw7/ng-redux/');
      request = request.clone({
        url: `http://my-json-server.typicode.com${jsonServerUrl}`
      });
      }

      if (this.href.includes('https://bgw7.github.io/ng-redux/')) {
        let translateUrl = request.url.replace('/assets/il8n/', '/ng-redux/assets/il8n/');
      request = request.clone({
        url: translateUrl
      });
      }
      console.log(request);
    return next.handle(request);
  }
}