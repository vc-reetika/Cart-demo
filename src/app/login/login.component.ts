import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDataService } from 'src/app/service/user-data.service';
import { ConsoleLogService } from '../service/console-log.service';
import { interval, map, take } from 'rxjs';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

export interface user {
  address: object,
  age: number,
  username: string,
  firstName: string,
  lastName: string,
  password: string
  email: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  submitted = false;
  getData!: user[];
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private routes: Router, private data: UserDataService, private rou: ActivatedRoute, private logService: ConsoleLogService,private _snackBar: MatSnackBar) { }

  login = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  ngOnInit() {
    this.data.getLoginData().subscribe(
      {
        next: (res) => { this.getData = res.users },
        error: (error) => { console.log(error) }
      }
    )
  }


  onSubmit() {
    const email = this.getData.some(x => x.email == this.login.controls.email.value?.trim());
    const password = this.getData.some(x => x.password == this.login.controls.password.value?.trim());
    const user1 = this.getData.filter(x => x.email === this.login.controls.email.value);
    const user = this.getData.find(x => x.email === this.login.controls.email.value);

    if (email && password) {
      if (this.login.valid) {
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('userData', `${user?.firstName}`)
        console.log(user);
        console.log(user1)
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.getItem('userData');
        // localStorage.setItem('productList',
        //   JSON.stringify([
        //     { itemName: 'watch', price: 200, totalItem: 0, totalPrice: 200 },
        //     { itemName: 'phone', price: 4000, totalItem: 0, totalPrice: 4000 },
        //     { itemName: 'pen', price: 50, totalItem: 0, totalPrice: 50 }
        //   ])
        // )
        this.routes.navigate(['dashboard']);
      }
    } else {
      this._snackBar.open('invalid user', 'X', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
      // alert('invalid user');
    }

  }

}
