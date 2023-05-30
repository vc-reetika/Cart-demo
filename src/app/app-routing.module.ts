import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OnlyLoggedInUsersGuard } from './guards/only-logged-in-users.guard';
import { AfterLogOutOnlyGuard } from './guards/after-log-out-only.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CartpageComponent } from './cartpage/cartpage.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [OnlyLoggedInUsersGuard] },
  { path: 'product', component: ProductsComponent },
  // { path: 'table', component: TableComponent },
  { path: 'login', component: LoginComponent, canActivate: [AfterLogOutOnlyGuard] },
  { path: 'addNewProduct', component: AddProductComponent },
  {path:'cartPage',component: CartpageComponent},
  { path: '**', redirectTo: 'login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
