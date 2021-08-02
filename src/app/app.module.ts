import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { OrderComponent } from './order/order.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CardComponent } from './card/card.component';
import { TotalSalesComponent } from './total-sales/total-sales.component';
import { TotalOrdersComponent } from './total-orders/total-orders.component';
import { TotalCartsComponent } from './total-carts/total-carts.component';
import { TotalUsersComponent } from './total-users/total-users.component';
import { CustomersComponent } from './customers/customers.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OrderComponent,
    SidebarComponent,
    DashboardComponent,
    FourOhFourComponent,
    HomePageComponent,
    CardComponent,
    TotalSalesComponent,
    TotalOrdersComponent,
    TotalCartsComponent,
    TotalUsersComponent,
    CustomersComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
