import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { of, skip } from 'rxjs';
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
    this.skip();
  }

  private skip() {
    /**
     * Create source$ which will emit numbers from 1 to 5
     * Apply skip to source$ to skip 2 emissions
     * Subscribe to source$ and log the values
     */
    const source$ = of(1, 2, 3, 4, 5);
    const result$ = source$.pipe(skip(2));

    result$.subscribe((value) => console.log(value));
  }
}
