import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { of, toArray } from 'rxjs';
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
    this.toArray();
  }

  private toArray() {
    const source$ = of(1, 2, 3, 4, 5);
    /**
     * Apply toArray to source$ and subscribe to log the value
     */
    source$.pipe(toArray()).subscribe((result) => console.log(result));
  }
}
