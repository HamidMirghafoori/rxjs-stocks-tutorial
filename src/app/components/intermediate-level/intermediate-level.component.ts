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
    this.replaySubject();
  }

  private replaySubject() {
    /**
     * We want to create a replaySubject named multiCaster$ and three subscribers with full signature which
     * each has identifiable log to relate log to the subscription.
     * Every time we emit new value we like to see subscribers logged received value
     * Steps to take: 
     * create 1st subscriber then emit value 5
     * create 2nd subscriber and emit value 22
     * create 3rd subscriber and emit value 7
     * complete the subject and emit value 100, and observe what happens
     * Note that: After the subject is completed, calling next() (or error()) will not have any effect. 
     * Also see how the moment new subscription happens, it receives all the previous emissions
     */

  }

}
