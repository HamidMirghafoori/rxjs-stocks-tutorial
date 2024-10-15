import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { iif, of } from 'rxjs';
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
    this.iif();
  }

  private iif() {
    /**
     * Create example$ with applying iif, for condition function use checking a random value to return
     * true or false, provide true and false observables which emitting a message respectively
     * subscribe to example$ and log the value
     */
    const example$ = iif(
      () => Math.random() > 0.5,
      of('Condition is true!'),
      of('Condition is false!')
    );

    example$.subscribe((value) => console.log(value));
  }
}
