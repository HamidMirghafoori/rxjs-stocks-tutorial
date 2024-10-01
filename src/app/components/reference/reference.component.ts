import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { MarbleDemoComponent } from '../marble-demo/marble-demo.component';

@Component({
  selector: 'app-reference',
  standalone: true,
  imports: [FormsModule, MarbleDemoComponent],
  templateUrl: './reference.component.html',
  styleUrl: './reference.component.css',
})
export class ReferenceComponent {
  public command: string = 'range';
  public speed: number = 500;
  public range$!: Observable<number>;

  ngOnInit(): void {}
  
  private range() {
    // range() Question: create an observable that generates range of numbers from 0 to 9
  }
}
