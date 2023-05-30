import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ConsoleLogService } from '../service/console-log.service';

@Injectable({
  providedIn: 'root'
})
export class OnlyLoggedInUsersGuard implements CanActivate {
  constructor(private routes: Router,private logService : ConsoleLogService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const value = localStorage.getItem('loggedIn');

    if (value === 'true') {
      this.logService.log("login")
      return true;
    } else {
      this.logService.log("not login")
      this.routes.navigate(['']);
      return false;
    }

  }

} 
