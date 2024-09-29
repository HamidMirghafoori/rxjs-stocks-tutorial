import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { MarbleDemoComponent } from '../marble-demo/marble-demo.component';

@Component({
  selector: 'app-intermediate-level',
  standalone: true,
  imports: [FormsModule, MarbleDemoComponent],
  templateUrl: './intermediate-level.component.html',
  styleUrl: './intermediate-level.component.css',
})
export class IntermediateLevelComponent implements OnInit{
  public command: string = 'range';
  public speed: number = 500;
  public range$!: Observable<number>;

  ngOnInit(): void {
  }
}
