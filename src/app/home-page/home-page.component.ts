import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule,RouterOutlet,ButtonModule,RouterLinkActive,RouterLink],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  @Input() title!: string;
}
