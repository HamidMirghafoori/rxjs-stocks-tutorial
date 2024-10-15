import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  fromEvent,
  interval,
  map,
  merge,
  NEVER,
  startWith,
  switchMap,
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
    this.NEVER();
  }

  private NEVER() {
    const startButton = document.getElementById('start') as HTMLElement;
    const pauseButton = document.getElementById('pause') as HTMLElement;
    /**
     * Create startClick$ from click event and return 'start'
     * Create pauseClick$ from click event and return 'pause'
     * Create timer$ with interval of 1000
     * Create timerControl$ with merging startClick$ and pauseClick$ and start the pipeline with 'pause'
     * switch to timer$ or NEVER with any action received
     * Subscribe and click on start and pause buttons to log the values
     */
    const startClick$ = fromEvent(startButton, 'click').pipe(
      map(() => 'start')
    );
    const pauseClick$ = fromEvent(pauseButton, 'click').pipe(
      map(() => 'pause')
    );

    const timer$ = interval(1000);

    const timerControl$ = merge(startClick$, pauseClick$).pipe(
      startWith('pause'),
      switchMap((action) => (action === 'start' ? timer$ : NEVER))
    );

    timerControl$.subscribe((value) => console.log(`Timer: ${value}`));
  }
}
