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
  public constructor(
    private log: LogService
  ) {}

  public ngOnInit(): void {
    this.log.clearLogs();
    this.subject();
  }

  private subject() {
    /**
     * Question 2: subject as eventEmitter
     * Minimal subject.service file with required html are provided.
     * in the service file create a private eventSubject$
     * Add two public methods:
     * 1- emitEvent() which will accepts a string to be emitted
     * 2- a getter function get events$() which will return the observable part of our subject
     * Inject the service in this file and create two subscriptions to it and log the message with 
     * unique log prefix so we can identify which message comes from which subscription
     * Create two public methods named message1 and message2 and assign them to two buttons
     * on our template respectively. Click on buttons, you should see both subscriptions are logging the message.
     */
  }
}
