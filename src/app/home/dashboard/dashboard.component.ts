import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConsoleLogService } from 'src/app/service/console-log.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  userName = localStorage.getItem('userData');
 
  constructor(private routes : Router, private logService : ConsoleLogService){}
  date = new Date();

  ngOnInit(){
    const userData = localStorage.getItem('user')
    this.logService.log( userData ? JSON.parse(userData) : ''  );
  }

  goBack(){
    localStorage.setItem('loggedIn','false')
    this.routes.navigate(['/']);
  }

}
 