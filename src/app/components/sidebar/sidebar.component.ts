import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatMenu, MatMenuItem } from '@angular/material/menu';
import { APIService } from 'src/app/services/api.service';
import { Category } from 'src/app/services/APITypes';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  exportAs: 'sidebar',
})
export class SidebarComponent implements OnInit {
  @ViewChild(MatMenu, { static: true }) mainMenu: MatMenu;
  // @Input() categories: Category[];
  observer = {
    next: (i) => {
      this.categories = i.filter((category: Category) => category.name);
    },
    error: (error) => console.error(error),
    complete: () => {
      this.complete = true;
      console.log(this.categories);
      this.categoryData = {
        cats: this.categories,
      };
    },
  };
  categoryData: any;
  categories: Category[];
  menuItem: MatMenuItem;
  complete = false;

  constructor(private API: APIService) {}
  ngOnInit(): void {
    this.API.getCategories().subscribe(this.observer);
  }
}
