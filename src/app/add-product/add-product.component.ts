import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsList, ProductsService } from '../service/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {

  constructor(private routes: Router,private productService : ProductsService) { }

  goBackToProductList() {
    this.routes.navigate(['product']);
  }

  onSubmit(formValue: NgForm) {

    if (formValue.form.valid) {
      const products:ProductsList[] = []
      const itemName = formValue.value.itemName
      const price = formValue.value.price
      const newItem: ProductsList = {
        title: itemName, price: price, totalItem: 0, totalPrice: price,
        id: 0,
        description: ''
      }
      products.push(newItem);
      alert('Item is added')
      this.productService.postProducts(newItem).subscribe(
        data => console.log( data )
      )
    }
  }
}

