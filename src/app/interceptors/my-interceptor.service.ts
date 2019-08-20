import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const started = Date.now();
    return next.handle(req).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse) {
            const elapsed = Date.now() - started;
            console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
            event.body.firstName = 'LAKSHITHA';
          }
        },
        (error) => {
          console.log('Nice Error', error);
        }
      )
    );
   }
}
