import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // @ViewChild(MatMenuTrigger) menuTrigger: MatMenuTrigger;
  // @ViewChild(MatMenu) menu: MatMenu;
  // menuTrigger: MatMenuTrigger;
  // show: boolean;
  // ngAfterViewInit(): void {
  //   this.menuTrigger.menu = this.menu;
  //   console.log(this.menu);
  //   console.log(this.menuTrigger);
  // }
  // toggle(toggle: boolean): void {
  //   this.show = toggle;
  //   console.log(this.show);
  // }
  // getMenu(newMenuTrigger: MatMenuTrigger): void {
  //   this.menuTrigger = newMenuTrigger;
  //   console.log(this.menuTrigger);
  // }
}
