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
    this.behaviorSubject();
  }

  public behaviorSubject() {
    /**
     * We want to create a behaviorSubject named multiCaster$ with default value 3
     * then three subscribers with full signature which
     * each has identifiable log to relate log to the subscription.
     * Every time we emit new value we like to see subscribers logged the value
     * Steps to take: 
     * before each subscription have a console.log such as 'Before subscription 1' and so on.
     * create 1st subscriber then emit value 4
     * create 2nd subscriber and emit value 17
     * create 3rd subscriber and emit value 9
     * complete the multiCaster$ and emit value 100, and observe what happens
     * We can see each subscription receives the latest emitted value before its subscription
     */
  }
}
