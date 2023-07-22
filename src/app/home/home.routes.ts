
import { Routes } from '@angular/router';
import { ApplicationsComponent } from './applications/applications.component';
import { BreakingNewsComponent } from './breaking-news/breaking-news.component';
export const Homeroutes: Routes = [
  {
    path : 'applications',
    component: ApplicationsComponent,
  },
  {
    path : 'breaking-news',
    component: BreakingNewsComponent,
  }
];
