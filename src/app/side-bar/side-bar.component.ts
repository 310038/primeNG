import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { BreakingNewsComponent } from "../breaking-news/breaking-news.component";
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
@Component({
    selector: 'app-side-bar',
    standalone: true,
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.scss'],
    imports: [CommonModule,RouterOutlet,ButtonModule,RouterLinkActive,RouterLink,SidebarModule, BreakingNewsComponent,FormsModule]
})
export class SideBarComponent {
  sidebarVisible: boolean = false;
  


}
