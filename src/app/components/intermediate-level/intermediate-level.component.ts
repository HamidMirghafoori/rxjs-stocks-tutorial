import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { concat, finalize, interval, takeWhile, tap } from 'rxjs';
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
    this.takeWhile();
  }

  private takeWhile() {
    /**
     * To compare both arguments of takeWhile follow the steps:
     * 1 - create counter1$ which is interval of 300 which takeWhile is used to take values less than 4
     * 2 - To log taken values log them after takeWhile
     * 3 - At the end log a message that counter1$ completed.
     * Do the same for counter2$ and for 2nd argument of takeWhile pass true.
     * Execute two counters synchronously.  and at the end log a message that whole stream completed.
     * Note the difference between two counters
     */
    const counter1$ = interval(300).pipe(
      takeWhile((value) => value < 4),
      tap((value) => console.log('Counter1: ', value)),
      finalize(() => console.log('Counter1 completed!'))
    );
    const counter2$ = interval(300).pipe(
      takeWhile((value) => value < 4, true),
      tap((value) => console.log('Counter2: ', value)),
      finalize(() => console.log('Counter2 completed!'))
    );

    concat(counter1$, counter2$).subscribe({
      complete: () => console.log('Concat completed!'),
    });
  }
}
