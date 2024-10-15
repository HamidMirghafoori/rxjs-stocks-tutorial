import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { interval, repeat, take } from 'rxjs';
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
    this.repeat();
  }

  private repeat() {
    /**
     * 1 - create source1$ with interval of 100, take 3 values and repeat it 2 times. subscribe and log the values
     * 2 - create source2$ with interval of 1000, take 3 and repeat it with config object count 3 and delay 1000,
     * subscribe and log the values note how config applied to the repeat.
     */
    const source1$ = interval(100);
    const result = source1$.pipe(take(3), repeat(2));

    result.subscribe((x) => console.log(x));

    const source2$ = interval(1000).pipe(take(3));

    source2$
      .pipe(
        repeat({
          count: 3,
          delay: 1000,
        })
      )
      .subscribe((value) =>
        console.log(`Value: ${value}, Time: ${new Date().getSeconds()}`)
      );
  }
}
