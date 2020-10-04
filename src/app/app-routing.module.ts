import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { CartComponent } from './components/cart/cart.component';
import { FourOhFourComponent } from './components/four-oh-four/four-oh-four.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'products/category/:categoryId', component: ProductListComponent },
  { path: 'products/:searchString', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: '', component: LandingPageComponent },
  { path: '**', component: FourOhFourComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
