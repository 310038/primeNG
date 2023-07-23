import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { SplitterModule } from 'primeng/splitter';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PanelModule } from 'primeng/panel';
import { ScrollPanelModule } from 'primeng/scrollpanel';
@Component({
  selector: 'app-breaking-news',
  standalone: true,
  imports: [CommonModule,ScrollPanelModule,PanelModule,RadioButtonModule,CheckboxModule,InputTextModule,ButtonModule,ToolbarModule,SplitterModule,CardModule,DividerModule],
  templateUrl: './breaking-news.component.html',
  styleUrls: ['./breaking-news.component.scss']
})
export class BreakingNewsComponent {
// newsList: any;
  @Input() title!: string;
  date: any='2023-07-05 11:11';
}
