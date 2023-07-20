import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateFn, UrlTree, Router } from "@angular/router";
import { Observable } from "rxjs";


@Injectable({
    providedIn : "root"
})
export class AuthGuard  {
    constructor(private router: Router) {}
  
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // Your dynamic authorization logic goes here
      // Check if the user is authenticated and has the necessary role or permission
      // Return true if authorized, or an UrlTree or boolean false to deny access
  
      const isAuthorized = true // Your authorization logic
  
      if (isAuthorized) {
        return true; // Access granted
      } else {
        return this.router.parseUrl('/unauthorized'); // Redirect to unauthorized page
      }
    }
  }
  
  
  
  
  
  