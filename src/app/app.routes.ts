import { Routes } from '@angular/router';
import {FirstComponent} from "../components/first/first.component";
import {SecondComponent} from "../components/second/second.component";
import {HomeComponent} from "../components/home/home.component";

export const routes: Routes = [
  {title: 'Home', path:'', component: HomeComponent},
  {title: 'First', path:'first', component: FirstComponent},
  {title: 'Second', path:'second', component: SecondComponent},
];
