import { Component, Input, signal, Injectable, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { LoginComponent } from './login/login.component';
import { SideBarComponent } from "./side-bar/side-bar.component";
import { flush } from '@angular/core/testing';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule,LoginComponent, RouterOutlet,LoginComponent, ButtonModule, LoginComponent, SideBarComponent]
})
export class AppComponent {
  title = 'HIS';
  display: any;
  condition: any=false;
}
