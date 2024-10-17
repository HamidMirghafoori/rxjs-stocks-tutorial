import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { delay, of } from 'rxjs';
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

  private getUserId = () => {
    console.log('Fetching user ID...');
    return of({ userId: 42 }).pipe(delay(1000));
  };

  private getUserProfile = (userId: number) => {
    console.log(`Fetching profile for user ID: ${userId}`);
    return of({ userId, name: 'John Doe', age: 30 }).pipe(delay(1500));
  };

  public ngOnInit(): void {
    this.log.clearLogs();
    this.concatMap();
  }

  private concatMap() {
    /**
     * Emit 'start' to start our pipeline, apply concatMap and pass getUserId to fetch user Id
     * then apply concat map again to consume getUserId response to pass to getUserProfile
     * Subscribe and log the value, note the sequence of the logs.
     */

  }
}
