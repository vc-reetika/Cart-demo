import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConsoleLogService } from '../service/console-log.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  userName = localStorage.getItem('userData');

  constructor(private routes : Router, private logService : ConsoleLogService){}

  goBack(){
    localStorage.clear();
    localStorage.setItem('loggedIn','false')
    this.routes.navigate(['/']);
  }

  addToCart(){
    console.log('go to cart');
    this.routes.navigate(['cartPage']);
  }
}
