import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { of, startWith } from 'rxjs';
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
    this.startWith();
  }

  private startWith() {
    const source$ = of(2, 3, 4);
    /**
     * Apply startWith with values 0 and 1, subscribe and log the values
     */
    const result$ = source$.pipe(startWith(...[0, 1]));

    result$.subscribe((value) => console.log(value));
  }
}
