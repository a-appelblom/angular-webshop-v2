import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  constructor(private cart: CartService) {}

  ngOnInit(): void {}

  getQuantity(): number {
    return this.cart.getProductQuantity();
  }
}
