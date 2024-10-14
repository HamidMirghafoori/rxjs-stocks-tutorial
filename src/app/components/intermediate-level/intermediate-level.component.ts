import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
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
    this.delay();
  }

  private delay() {
    const source$ = of(1, 2, 3);
    /**
     * Apply delay to source$ with due time 1000ms. Subscribe to source$ and log the values.
     */
  }
}
