import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { of, tap } from 'rxjs';
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
    this.tap();
  }
  private tap() {
    /**
     * Emit values 1 to 3, apply tap to log the values
     * apply tap again with complete function signature and log respective message
     * Observer how we can tap into all three emission types.
     */
    of(1, 2, 3)
      .pipe(
        tap((value) => console.log('Value:', value)),
        tap({
          next: (value) => console.log('Next:', value),
          error: (error) => console.log('Error:', error),
          complete: () => console.log('Completed'),
        })
      )
      .subscribe();

    // Another example to have better understanding how tap works, 
    // commented because some operators has not covered yet
    // of(1, 2, 3)
    //   .pipe(
    //     concatMap((n) =>
    //       interval(1000).pipe(
    //         take(Math.round(Math.random() * 10)),
    //         map(() => 'X'),
    //         tap({ complete: () => console.log(`Done with ${n}`) })
    //       )
    //     )
    //   )
    //   .subscribe(console.log);
  }
}
