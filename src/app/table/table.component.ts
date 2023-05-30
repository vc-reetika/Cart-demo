import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsoleLogService } from 'src/app/service/console-log.service';
import { UserDataService, user } from 'src/app/service/user-data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  user !: user[];
  dataSource!: MatTableDataSource<user>;
  displayedColumns: string[] = ['firstName', 'lastName', 'username', 'email', 'age'];

  constructor(private activatedRoutes: ActivatedRoute, private logService: ConsoleLogService, private userData: UserDataService) { }

  ngOnInit() {
    this.logService.log(this.userData.getLoginData().subscribe(
      {
        next: (res) => { this.dataSource = new MatTableDataSource<user>(res.users) },
        error: (error) => { console.log(error) } 
      }
    ));
    this.logService.log(this.user)
    console.log("se", this.dataSource)
  }

}
