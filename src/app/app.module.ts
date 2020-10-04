import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { FourOhFourComponent } from './components/four-oh-four/four-oh-four.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { CartService } from './services/cart.service';
import { APIService } from './services/api.service';
import { UserService } from './services/user.service';
import { UsernameInputComponent } from './components/username-input/username-input.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SidebarComponent,
    ToolbarComponent,
    FooterComponent,
    ProductDetailComponent,
    FourOhFourComponent,
    ProductListComponent,
    CartComponent,
    AdminPageComponent,
    UsernameInputComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
  ],
  providers: [CartService, APIService, UserService, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
