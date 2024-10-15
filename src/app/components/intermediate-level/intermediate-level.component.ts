import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LogService } from '../../services';
import { TerminalComponent } from '../terminal/terminal.component';

@Component({
  selector: 'app-intermediate-level',
  standalone: true,
  imports: [FormsModule, TerminalComponent],
  templateUrl: './intermediate-level.component.html',
  styleUrl: './intermediate-level.component.css',
})
export class IntermediateLevelComponent implements OnInit {
  public constructor(private log: LogService) {}

  public ngOnInit(): void {
    this.log.clearLogs();
    this.from();
  }

  private from() {
    const numbers = [10, 20, 30];
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve('Promise resolved!'), 1000);
    });

    /**
     * 1 - Create observable1$ from numbers, subscribe and log the values
     * 2 - Create observable2$ from promise, subscribe with complete function signature and log values.
     * 3 - Create observable3$ from string 'Hello', subscribe and log the values
     * Observe how from converts different data types and how from emits them.
     */

  }
}
