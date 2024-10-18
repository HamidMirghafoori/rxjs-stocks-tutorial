import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
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
    this.distinctUntilKeyChanged();
  }

  private distinctUntilKeyChanged() {
    const source$ = of(
      { id: 1, name: 'A' },
      { id: 1, name: 'B' },
      { id: 2, name: 'A' },
      { id: 1, name: 'C' },
      { id: 3, name: 'C' },
      { id: 3, name: 'C' }
    );
    /**
     * Apply distinctUntilKeyChanged on source$ and pass 'id' as parameter to filter based on id
     * subscribe and log the values. You can try 'name' to observe the difference
     */

  }
}
