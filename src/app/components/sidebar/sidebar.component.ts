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
  @Input() categories: Category[];
  menuItem: MatMenuItem;

  constructor() {}
  ngOnInit(): void {}
}
