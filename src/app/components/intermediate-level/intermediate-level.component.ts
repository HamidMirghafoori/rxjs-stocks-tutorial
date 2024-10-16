import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { concat, of } from 'rxjs';
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
    this.concat();
  }

  private concat() {
    const first$ = of(1, 2, 3);
    const second$ = of('A', 'B', 'C');
    const third$ = of('£', '$', '€');
    /**
     * Create result$ using concat and pass three provided observables to it
     * Subscribe and log the values, note the order of execution and logs
     */
    const result$ = concat(first$, second$, third$);
    result$.subscribe(console.log);
  }
}
