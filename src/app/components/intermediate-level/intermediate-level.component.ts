import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    this.throttleTime();
  }

  private throttleTime() {
    /**
     * 1 - Define source$ as interval of 500
     * Create obs1$ with applying throttleTime to source$ with passing a function that returns interval of 2000
     * 2 - Copy obs1$ and rename it to obs2$ and apply config in throttleTime with leading=true and trailing=true
     * To have separate execution use concat to execute observables synchronously.
     * subscribe to it and log the values
     * Note the differences.
     * Note that for obs2$ we have only one leading value and the rest does not have leading values 
     * and instead it just emits trailing values. That's because our observable does not emit another value
     * immediately after training value, so throttleTime treats the next late coming value as trailing values.
     */

  }
}
