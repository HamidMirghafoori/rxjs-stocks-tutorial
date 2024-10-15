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
    this.fromEvent();
  }

  private fromEvent() {
    /**
     * 1 - use fromEvent to capture click and log x position of mouse
     * 2 - use fromEvent to capture click with options { passive: true, once: true, capture: true}
     * and log x position of mouse
     * 3 - use fromEvent to capture keyboard press and log pressed key
     * Note how 2nd event listener automatically removed
     */

  }
}
