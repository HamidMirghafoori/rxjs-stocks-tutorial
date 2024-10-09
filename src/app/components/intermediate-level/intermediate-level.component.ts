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
    this.bufferTime();
  }

  private bufferTime() {
    /**
     * To demonstrate bufferTime() functionality we will create 3 observables as following:
     * interval of 200 which will pipe into bufferTime to buffer 800ms emits and takes 4 buffers
     * and finally logs the observable has been completed
     * the 2nd observable will have same structure only buffering 600 and interval of 1200
     * the 3rd observable will have same structure only buffering 600 and interval of 1200 and maxBufferSize 3
     * Note how buffer window causes some emits discarded and how maxBufferSize limits the emission length
     */
  }
}
