import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  concat,
  finalize,
  interval,
  mergeMap,
  take,
  tap,
  toArray,
  windowTime,
} from 'rxjs';
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
    this.windowTime();
  }

  private windowTime() {
    /**
     * To demonstrate windowTime() we will modify bufferTime() code as following:
     * after replacing bufferTime with windowTime we need to convert the window$ observables into
     * array of values so we be able to log them.
     * we will implement concat to executed each observable synchronously
     * Note how buffer window causes some emits discarded and how maxWindowSize limits the emission length
     */

    const buffer1$ = interval(200).pipe(
      windowTime(800),
      mergeMap((window$) => window$.pipe(toArray())),
      take(4),
      finalize(() => console.log('Buffer1$ completed!'))
    );
    const buffer2$ = interval(200).pipe(
      windowTime(600, 1200),
      mergeMap((window$) => window$.pipe(toArray())),
      take(4),
      finalize(() => console.log('Buffer2$ completed!'))
    );
    const buffer3$ = interval(200).pipe(
      windowTime(600, 1200, 3),
      mergeMap((window$) => window$.pipe(toArray())),
      take(4),
      finalize(() => console.log('Buffer3$ completed!'))
    );
    concat(
      buffer1$.pipe(tap((values) => console.log('Buffer1-> ', values))),
      buffer2$.pipe(tap((values) => console.log('Buffer2-> ', values))),
      buffer3$.pipe(tap((values) => console.log('Buffer3-> ', values)))
    ).subscribe();
  }
}
