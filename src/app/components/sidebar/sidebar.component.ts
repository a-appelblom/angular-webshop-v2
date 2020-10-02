import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatMenu } from '@angular/material/menu';
import { MatSidenav } from '@angular/material/sidenav';
import { APIService } from 'src/app/services/api.service';
import { Category } from 'src/app/services/APITypes';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  @Input() showSidebar: boolean;
  observer = {
    next: (i) => {
      this.categories = i.filter(
        (category: Category) => category.name.length > 0
      );
    },
    error: (error) => console.error(error),
    complete: () => {
      this.complete = true;
      console.log(this.categories);
    },
  };
  categories: Category[];
  complete = false;

  constructor(private API: APIService) {}

  ngOnInit(): void {
    this.API.getCategories().subscribe(this.observer);
  }
}
