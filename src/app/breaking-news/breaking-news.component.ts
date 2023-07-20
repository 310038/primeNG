import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-breaking-news',
  standalone: true,
  imports: [CommonModule,ButtonModule],
  templateUrl: './breaking-news.component.html',
  styleUrls: ['./breaking-news.component.scss']
})
export class BreakingNewsComponent {
// newsList: any;

@Input() title!: string;
@Input() params!: string;
@Input() componentName!: string;
}
