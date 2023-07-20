import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Get the JWT token from your authentication service
        const authToken = "123" // Retrieve the JWT token from your authentication service
    
        // Clone the request and add the Authorization header with the JWT token
        const authRequest = request.clone({
          setHeaders: {
            Authorization: `Bearer ${authToken}`
          }
        });
    
        // Pass the modified request to the next interceptor or the HTTP handler
        return next.handle(authRequest);
      }
}