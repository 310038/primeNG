import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { LoginComponent } from './login/login.component';
import { SideBarComponent } from "./home/side-bar/side-bar.component";
import { HomePageComponent } from './home/home-page/home-page.component';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule,HomePageComponent,LoginComponent, RouterOutlet,LoginComponent, ButtonModule, LoginComponent, SideBarComponent]
})
export class AppComponent {
  title = 'HIS';
  display: any;
  condition: any=false;
}
