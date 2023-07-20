import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'breaking-news',
    loadComponent:() =>
      import('./breaking-news/breaking-news.component').then((m) => m.BreakingNewsComponent),
      title: "Breaking News"
  },
  {
    path: 'home-page',
    loadComponent:() =>
      import('./home-page/home-page.component').then((m) => m.HomePageComponent),
      title: "Breaking News"
  },
  {
    path: 'applications',
    loadComponent:() =>
      import('./applications/applications.component').then((m) => m.ApplicationsComponent),
      title: "Applications"
  },
  {
    path:'login',
    loadComponent:() =>
      import('./login/login.component').then((m) => m.LoginComponent),
      title: "Login"
  }
];
