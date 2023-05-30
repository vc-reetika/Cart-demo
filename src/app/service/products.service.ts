import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ProductsList{
  id : number,
  title : string,
  description : string,
  price : number,
  totalItem: number,
  totalPrice: number 
}

interface Products{
  limit : number,
  products : ProductsList[],
  skip : number,
  total : number
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // private url = 'https://dummyjson.com/products';
  private url = 'http://localhost:3000/products';

  constructor(private https : HttpClient) { }

  getProducts():Observable<ProductsList[]>{
    return this.https.get<ProductsList[]>(this.url);
  }

  // postProducts(person:ProductsList):Observable<ProductsList>{
    postProducts(person:ProductsList){
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(person);
    console.log(body)
    return this.https.post<ProductsList[]>(this.url, body,{'headers':headers})
    // return this.https.get<Products>(this.url);
  }

}
