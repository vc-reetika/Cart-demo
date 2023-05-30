import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AfterLogOutOnlyGuard implements CanActivate {

  constructor(private routes: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const value = localStorage.getItem('loggedIn');
    if (!value || value === 'false') {
      return true
    }
    else {
      this.routes.navigate(['dashboard']);
      return false
    }
  }

}
