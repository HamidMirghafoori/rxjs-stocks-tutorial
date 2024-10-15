import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { map, of } from 'rxjs';
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
    this.map();
  }

  private map() {
    /**
     * Emit values from 1 to 4 and apply map to multiply them by 2.
     * Subscribe and log the result
     */
    of(1, 2, 3, 4)
      .pipe(map((value) => value * 2))
      .subscribe((result) => console.log(result));
  }
}
