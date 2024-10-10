import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { interval, take } from 'rxjs';
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
    this.take();
  }

  private take() {
    /**
     * Use interval of 100 as source and take only 11 values.
     * Subscribe with complete function signature and log the values and complete message
     */
    interval(100)
      .pipe(take(11))
      .subscribe({
        next: (data) => console.log(data),
        complete: () => console.log('Interval completed!'),
      });
  }
}
