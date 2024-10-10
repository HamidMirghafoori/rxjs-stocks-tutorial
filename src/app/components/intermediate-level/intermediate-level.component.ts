import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { concat, finalize, interval, mergeMap, take, tap, toArray, windowCount } from 'rxjs';
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
    this.windowCount();
  }

  private windowCount() {
    /**
     * To demonstrate windowCount() functionality we will use bufferCount() answer as our start point:
     * after replacing bufferCount with windowCount we need to convert the window$ observables into 
     * array of values so we be able to log them.
     * we will implement concat to executed each observable synchronously
     * Note how parameters will affect on the output (overlap and gap)
     */

    const buffer1$ = interval(200).pipe(
      windowCount(3),
      mergeMap(window$ => window$.pipe(toArray())),
      take(4),
      finalize(() => console.log('Buffer1$ completed!'))
    );

    const buffer2$ = interval(200).pipe(
      windowCount(5, 3),
      mergeMap(window$ => window$.pipe(toArray())),
      take(4),
      finalize(() => console.log('Buffer2$ completed!'))
    );
    const buffer3$ = interval(200).pipe(
      windowCount(3, 5),
      mergeMap(window$ => window$.pipe(toArray())),
      take(4),
      finalize(() => console.log('Buffer3$ completed!'))
    );

    concat(
      buffer1$.pipe(tap((values) => console.log('Buffer1-> ', values))),
      buffer2$.pipe(tap((values) => console.log('Buffer2-> ', values))),
      buffer3$.pipe(tap((values) => console.log('Buffer2-> ', values)))
    ).subscribe();
  }
}
