import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { isEmpty, Subject } from 'rxjs';
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
    this.isEmpty();
  }

  private isEmpty() {
    /**
     * Create source$ as new Subject
     * Create result from source$ which isEmpty() applied to it
     * subscribe to both of them and log the values
     * and push few times new value to source$, observe the logs
     * complete source$
     * Create new subscription to result$ and note the log
     */
    const source$ = new Subject<string>();
    const result$ = source$.pipe(isEmpty());

    source$.subscribe((x) => console.log(x));
    result$.subscribe((x) => console.log(x));

    source$.next('a');
    source$.next('b');
    source$.next('c');
    source$.complete();
    result$.subscribe((x) => console.log(x));
  }
}
