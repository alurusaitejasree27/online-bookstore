import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { GenresComponent } from './genres/genres.component';
import { BillComponent } from './bill/bill.component';

const routes: Routes = [
  {path: "Home", component:HomeComponent},
  {path: "cart", component:CartComponent},
  {path: "Genre", component:GenresComponent},
  {path: "Logout", component:LoginComponent},
  {path: "", component:HomeComponent},
  {path: "products", component:ProductsComponent},
  {path: "bill", component:BillComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
