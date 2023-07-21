
import { Routes } from '@angular/router';
import { ApplicationsComponent } from './applications/applications.component';
import { BreakingNewsComponent } from './breaking-news/breaking-news.component';
export const Homeroutes: Routes = [
  {
    path: '',
    component: BreakingNewsComponent,
  },
  {
    path : 'applications',
    component: ApplicationsComponent,
  },
];
