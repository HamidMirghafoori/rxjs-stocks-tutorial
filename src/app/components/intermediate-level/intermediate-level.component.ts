import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { interval } from 'rxjs';
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
    this.interval();
  }

  private interval() {
    /**
     * Use interval to produce values from 0 every 1000ms.
     */
    interval(1000).subscribe(console.log);
  }
}
