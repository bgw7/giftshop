import { NgZone } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GithubPagesInterceptor implements HttpInterceptor {
 href: string = '';
  constructor(private ngZone: NgZone) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.ngZone.run(() => {
      this.href = window.location.href;
    });

    if (this.href.includes('https://bgw7.github.io/')) {
      if (request.url.includes('/api/')) {
        let jsonServerUrl = request.url.replace('/api/', '/bgw7/bgw7.github.io/');
      request = request.clone({
        url: `https://my-json-server.typicode.com${jsonServerUrl}`
      });
      }

      if (request.url.includes('/assets/il8n/')) {
        let translateFileUrl = request.url.replace('/assets/il8n/', '/assets/il8n/');
      request = request.clone({
        url: translateFileUrl
      });
      }
    }

    return next.handle(request);
  }
}