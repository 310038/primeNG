
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import {BreakingNewsComponent} from './home/breaking-news/breaking-news.component';
export const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    loadComponent:() => import('./home/home-page/home-page.component').then((m) => m.HomePageComponent),
    loadChildren: () => import('src/app/home/home.routes').then(r => r.Homeroutes),
  }
];



