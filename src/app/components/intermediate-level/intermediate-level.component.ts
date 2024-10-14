import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { endWith, of } from 'rxjs';
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
    this.endWith();
  }

  private endWith() {
    /**
     * Emit values from 1 to 3 and apply endWith with values 6,7,8
     * Subscribe and log the values
     */
    of(1, 2, 3).pipe(endWith(...[6,7,8])).subscribe(console.log);
  }
}
