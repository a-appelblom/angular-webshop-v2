import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  @Output() toggleSidebarEvent = new EventEmitter<boolean>();
  showSidebar = false;
  // productQuantity: number;

  constructor(private cart: CartService) {}

  ngOnInit(): void {}

  getQuantity(): number {
    return this.cart.getProductQuantity();
  }

  toggleSidebar(): void {
    this.showSidebar = !this.showSidebar;
    this.toggleSidebarEvent.emit(this.showSidebar);
  }
}
