import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-options',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-options.component.html',
  styleUrl: './page-options.component.css'
})
export class PageOptionsComponent {
@Input() options: string[]=[];
@Input() action!: (option: string) => void;
@Input() direction: string = 'row';
@Input() selected: string | null = null;
}
