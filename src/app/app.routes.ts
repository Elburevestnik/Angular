import {Routes} from '@angular/router';
import {HomeComponent} from "../components/home/home.component";

export const routes: Routes = [
  {title: 'Home', path: '', component: HomeComponent},
  {
    title: 'First',
    path: 'first',
    loadComponent: () => import('../components/first/first.component').then(m => m.FirstComponent)
  },
  {
    title: 'Second',
    path: 'second',
    loadComponent: () => import('../components/second/second.component').then(m => m.SecondComponent)
  },
];
