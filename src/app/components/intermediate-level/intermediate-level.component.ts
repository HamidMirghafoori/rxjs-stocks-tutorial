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
    this.isObservable();
  }

  private isObservable() {
    const obs$ = of(1, 2, 3);
    const notObs = [1, 2, 3];
    /**
     * Use isObservable to check if obs$ and notObs are observables or not
     */

  }
}
