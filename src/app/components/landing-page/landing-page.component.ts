import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from, interval, Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { APIService } from '../../services/api.service';
import { Product } from '../../services/APITypes';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit, OnDestroy {
  observer = {
    next: (products) => {
      this.products = products;
    },
    error: (error) => {
      console.error(error);
    },
    complete: () => {
      this.complete = true;
      this.createCarousel();
    },
  };

  subscription: Subscription;

  cellCount: number;
  theta: number;
  cellWidth = 500;
  radius: number;
  selectedIndex = 0;

  transform: string;

  complete: boolean;
  products: Product[];
  sortedProducts: Product[];

  searchString: string;

  constructor(private api: APIService, private router: Router) {}

  ngOnInit(): void {
    this.complete = false;
    this.api.getProducts().subscribe(this.observer);

    const source = interval(1000);
    this.subscription = source.subscribe((val) => this.rotateCarousel());
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // Carousel

  createCarousel(): void {
    this.sortedProducts = this.products.filter(
      (product) => product.name.length > 0
    );
    this.cellCount = this.sortedProducts.length;
    this.theta = 360 / this.cellCount;
    this.radius = Math.round(
      this.cellWidth / 2 / Math.tan(Math.PI / this.cellCount)
    );
  }
  rotateCarousel(): void {
    const angle = this.theta * this.selectedIndex * -1;
    this.transform = `transform: translateZ(${-this
      .radius}px) rotateY(${angle}deg)`;
    this.selectedIndex++;
  }
  search(): void {
    console.log(this.searchString);
    this.router.navigate([`products/${this.searchString}`]);
  }
}
