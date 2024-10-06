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
    this.subscribe();
  }

  /**
   * To practice subscribe we will build two observables, because when error happens complete callback won't be called
   * 1 - Create an observable that throws error, or just use previous tasks to start and implement full signature of subscribe to log the error
   * 2 - Create an observable that emits some values and finally completes, implement full signature of subscribe.
   */
  private subscribe() {
    
  }
}
