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
    this.windowWhen();
  }

  private windowWhen() {
    /**
     * To explore windowWhen functionality we will modify bufferWhen code as following:
     * we replace bufferWhen with windowWhen and then same as before we extract values from window$ observables
     * Subscribe to the source$ and log the buffered data and observe how bufferWhen works
     */

  }
}
