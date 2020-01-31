import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // 1. connect with AuthService using dep inj
    // 2. check whether the user is logged in or not by connecting with authService.
    // 3. if the user is not loggedin,
          // redirect the user to login page and return false;
    // 4. if the user is logged in,
        // return true;

    this.router.navigate(['login']);
    return false;
  }

}
