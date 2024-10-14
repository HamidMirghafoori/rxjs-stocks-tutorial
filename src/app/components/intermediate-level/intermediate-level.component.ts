import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { timer } from 'rxjs';
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
    this.timer();
  }

  private timer() {
    /**
     * 1 - Create source1$ using timer with value 2000. Subscribe and log the values
     * 2 - Create source2$ using timer with value 4000 and interval of 1000. Subscribe and log the values
     */
    const source1$ = timer(2000);
    source1$.subscribe((val) => console.log('Source 1:', val));

    const source2$ = timer(4000, 1000);
    source2$.subscribe((val) => console.log('Source 2:', val));
  }
}
