import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(private route : Router){}

  goToDashboard(){
    this.route.navigate(['dashboard']);
  }

  goToProduct(){
    this.route.navigate(['product'])
  }

}
