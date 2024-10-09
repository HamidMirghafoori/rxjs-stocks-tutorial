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
    this.bufferCount();
  }

  private bufferCount() {
    /**
     * To demonstrate bufferCount() functionality we will create 3 observables as following:
     * interval of 200 which will pipe into bufferCount to buffer 3 emits and takes 4 buffers 
     * and finally logs the observable has been completed
     * the 2nd observable will have same structure only buffering 5 and startBufferEvery of 3
     * the 3rd observable will have same structure only buffering 3 and startBufferEvery of 5
     * then we want to executed each observable after the previous one is completed
     * Note how parameters will affect on the output (overlap and gap)
     */

  }
}
