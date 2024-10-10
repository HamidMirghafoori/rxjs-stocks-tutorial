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
    this.bufferWhen();
  }

  private bufferWhen() {
    /**
     * To explore bufferWhen we create a source$ observable which is interval at 300ms rate
     * then to see the emitted values we log them and we limit it to take 20 values
     * we use bufferWhen and pass a function that returns random intervals between 500 to 3000
     * Subscribe to the source$ and log the buffered data and observe how bufferWhen works
     */
  }
}
