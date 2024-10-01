import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TerminalComponent } from '../terminal/terminal.component';

@Component({
  selector: 'app-intermediate-level',
  standalone: true,
  imports: [FormsModule, TerminalComponent],
  templateUrl: './intermediate-level.component.html',
  styleUrl: './intermediate-level.component.css',
})
export class IntermediateLevelComponent implements OnInit {
  ngOnInit(): void {
    console.log('testing terminal....')
    console.log('new log ....')
  }
}
