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
    this.concatWith();
  }

  private concatWith() {
    /**
     * create obs1$ which emits 'First observable'
     * create obs2$ which emits 'Second observable' and then delays 1000
     * create obs3$ which emits 'Third observable' and then delays 1000
     * use obs1$ and apply concatWith to it with obs2$ and obs3$ as its arguments.
     * Subscribe and log the data.
     */

  }
}
