import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { ProductsList, ProductsService } from '../service/products.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  productList = localStorage.getItem('productList');
  products !: ProductsList[];
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private routes: Router, private productService: ProductsService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      {
        next: (res) => { this.products = res },
        error: (error) => { console.log(error) }
      }
    )
    // localStorage.setItem('ProductList',JSON.stringify(this.productList));
  }
  addNewProduct() {
    this.routes.navigate(['addNewProduct']);
  }

  addToCart(data: ProductsList) {
    data.totalItem = 1
    if (localStorage.getItem('product') == null) {
      localStorage.setItem('product', JSON.stringify([data]));
      this._snackBar.open("Add To Cart", 'X', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    } else {
      let productItem = localStorage.getItem('product');

      let a: ProductsList[] = productItem ? JSON.parse(productItem) : ''
      let pastItem = a.some(val => val.title === data.title)
      console.log("p", pastItem);
      if (pastItem) {
        this._snackBar.open('Already Add To Cart', 'X', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
        // alert('Already Add To Cart')
      } else {
        a.push(data);
        localStorage.setItem('product', JSON.stringify(a));
        this._snackBar.open("Add To Cart", 'X', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
        // alert("Add To Cart");
      }
    }
  }

  // addToCart(data: ProductsList) {
  //   console.log(data);
  //   data.totalItem = 1
  //   data.totalPrice = data.price
  //   if (localStorage.getItem('product') == null) {
  //     localStorage.setItem('product', JSON.stringify([data]));
  //     alert("Add To Cart");
  //   } else {

  //     let productItem = localStorage.getItem('product');
  //     let a: ProductsList[] = productItem ? JSON.parse(productItem) : ''
  //     let pastItem = a.some(val => val.title === data.title)
  //     console.log("p",pastItem);
  //     if( pastItem ){
  //       alert('Already Add To Cart')
  //     }else{
  //       a.push(data);
  //       localStorage.setItem('product', JSON.stringify(a));
  //       alert("Add To Cart");
  //     }     
  //   }
  // }
}
