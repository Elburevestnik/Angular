import { Component } from '@angular/core';
import {MenuComponent} from "../shared/menu/menu.component";
import {routes} from "../../app/app.routes";
import {MenuItemType} from "../../types/menu-item.type";
import {Route, Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MenuComponent,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  protected readonly pages: MenuItemType<Route>[] = routes.map(route => ({name: typeof route.title === 'string' ? route.title : '', entry: route}));

  constructor(private router: Router) {
  }
}
