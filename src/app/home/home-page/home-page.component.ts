import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SideBarComponent } from '../side-bar/side-bar.component';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule,SideBarComponent,RouterOutlet,ButtonModule,RouterLinkActive,RouterLink],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  @Input() title!: string;
}
