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
    this.windowCount();
  }

  private windowCount() {
    /**
     * To demonstrate windowCount() functionality we will use bufferCount() answer as our start point:
     * after replacing bufferCount with windowCount we need to convert the window$ observables into 
     * array of values so we be able to log them.
     * we will implement concat to executed each observable synchronously
     * Note how parameters will affect on the output (overlap and gap)
     */

  }
}
