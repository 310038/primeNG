import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations} from '@angular/platform-browser/animations';
import { Homeroutes } from './home/home.routes';



export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(),provideRouter(Homeroutes) ]
};

