import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OrderComponent } from './order/order.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: "" , component: HomePageComponent },
  { path: "dashboard" , component: DashboardComponent },
  { path: "users" , component: CustomersComponent },
  { path: "products" , component: ProductsComponent },
  { path: "orders" , component: OrderComponent },
  { path: "not-found" , component: FourOhFourComponent },
  { path: "**" , redirectTo: "not-found" }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
