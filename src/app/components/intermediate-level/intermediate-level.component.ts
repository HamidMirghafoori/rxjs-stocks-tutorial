import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { buffer, concatMap, delay, interval, map, of, take } from 'rxjs';
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
  private getRandomDelay = () => Math.floor(Math.random() * 1500) + 500;
  // Will emit randomly in range of 500ms to 2000ms
  private randomInterval$ = interval(0).pipe(
    concatMap((value) => {
      const delayTime = this.getRandomDelay();
      return of(value).pipe(
        delay(delayTime),
        map(() => [value, delayTime])
      );
    })
  );

  public ngOnInit(): void {
    this.log.clearLogs();
    this.buffer();
  }

  private buffer() {
    /**
     * The starting code is provided
     * We will create a source$ observable to emit values every 200ms
     * To buffer values in a random manner, we will define a bufferNotifier$ observable using randomInterval$,
     * which will randomly emit a signal to release the buffered values up to that point in time.
     * The bufferNotifier$ will emit 10 signals
     * Finally, we will subscribe to the source$ observable, apply the buffer() operator,
     * and log the values returned by the buffer.
     * Note how buffer collects the values and continues after each closingNotifier
     */

    const source$ = interval(200);
    const bufferNotifier$ = this.randomInterval$.pipe(take(10));
    source$
      .pipe(buffer(bufferNotifier$))
      .subscribe((data) => console.log(data));
  }
}
