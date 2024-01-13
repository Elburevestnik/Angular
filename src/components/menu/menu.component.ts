import {Component, EventEmitter, Input, Output, TemplateRef} from '@angular/core';
import {MatMenuModule} from "@angular/material/menu";
import {Route, Routes} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule, NgForOf} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {MenuItemType} from "../../types/menu-item.type";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatMenuModule, MatButtonModule, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent<T = unknown> {
  @Input()
  name: string = 'Menu';

  @Input()
  menuItems: MenuItemType<T>[] = [];

  @Input()
  customTemplate?: TemplateRef<MenuItemType<T>>;

  @Output()
  onClickMenuItem: EventEmitter<T> = new EventEmitter<T>();
}
