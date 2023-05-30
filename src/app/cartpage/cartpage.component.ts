import { Component } from '@angular/core';
import { ProductsList } from '../service/products.service';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.scss']
})
export class CartpageComponent {

  productList: ProductsList[] = [];
  displayedColumns: string[] = ['title', 'totalPrice'];
  transactions!: ProductsList[];
  coupon = [{ totalPrice: 5000, discount: 10 }, { totalPrice: 10000, discount: 100 },{ totalPrice: 20000, discount: 110 }];
  clicked: boolean = false
  discountCoupon!: number;
  grantTotal!:number;
  Total!:number;

  ngOnInit() {
    const productItem = localStorage.getItem('product');
    let a: ProductsList = productItem ? JSON.parse(productItem) : { itemName: '', price: 0, totalItem: 0, totalPrice: 0 };

    this.productList.push(a);

    this.transactions = this.productList.flat();
    this.getTotalCost();
    localStorage.setItem('coupon',JSON.stringify(this.coupon));
    this.Total = this.getTotalCost();
    this.grantTotal = this.getTotalCost();
  }

  getTotalCost() {
    let total = this.transactions.map(t => t.totalPrice).reduce((acc, value) => acc + value, 0);
    return total;
  }

  apply(discountNum: number,grandTotal : number) {  
    this.coupon = this.coupon.filter(val => val.discount === discountNum);
    this.clicked = true;
    this.discountCoupon = discountNum;
    this.grantTotal = grandTotal-discountNum;

  }
  remove(discountNum: number) {
    let couponList =  localStorage.getItem('coupon');
    this.coupon = couponList ? JSON.parse(couponList) : '' 
    this.clicked = false;
    this.grantTotal = this.getTotalCost();
  }

  increase(data: ProductsList) {
    data.totalItem = data.totalItem + 1;
    data.totalPrice = data.price * data.totalItem;

    localStorage.setItem('product', JSON.stringify(this.productList.flat()));
    this.Total = this.getTotalCost();
    this.grantTotal = this.getTotalCost();
  }
  decease(data: ProductsList) {
    data.totalItem = data.totalItem - 1;
    data.totalPrice = data.price * data.totalItem;

    let newList = this.productList.flat().filter(data => data.totalItem !== 0)
    this.productList = newList;
    localStorage.setItem('product', JSON.stringify(newList));
    this.transactions = this.productList.flat()
    this.Total = this.getTotalCost();
    this.grantTotal = this.getTotalCost();
  }

  // constructor(private activatedRoutes: ActivatedRoute, private logService: ConsoleLogService, private userData: UserDataService) { }

  // ngOnInit() {
  //   this.logService.log(this.userData.getLoginData().subscribe(
  //     {
  //       next: (res) => { this.dataSource = new MatTableDataSource<user>(res.users) },
  //       error: (error) => { console.log(error) } 
  //     }
  //   ));
  //   this.logService.log(this.user)
  //   console.log("se", this.dataSource)
  // }

  // productList: ProductsList[] = [];
  // ngOnInit() {
  //   const productItem = localStorage.getItem('product');
  //   let a: ProductsList = productItem ? JSON.parse(productItem) : { itemName: '', price: 0, totalItem: 0, totalPrice: 0 };

  //   this.productList.push(a);
  // }

  // increase(data: ProductsList) {
  //   data.totalItem = data.totalItem + 1;
  //   data.totalPrice = data.price * data.totalItem;

  //   localStorage.setItem('product', JSON.stringify(this.productList.flat()));
  // }
  // decease(data: ProductsList) {
  //   data.totalItem = data.totalItem - 1;
  //   data.totalPrice = data.price * data.totalItem;

  //   localStorage.setItem('product', JSON.stringify(this.productList.flat().filter(data => data.totalItem !== 0)));
  // }
}

