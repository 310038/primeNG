import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'breaking-news',
    loadComponent:() =>
      import('./breaking-news/breaking-news.component').then((m) => m.BreakingNewsComponent)
  }
];
