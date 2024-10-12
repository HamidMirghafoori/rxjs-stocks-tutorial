import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { filter, from, map } from 'rxjs';
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
    this.filter();
  }

  private filter() {
    const students = [
      { name: 'Alice', passed: true },
      { name: 'Bob', passed: false },
      { name: 'Charlie', passed: true },
      { name: 'David', passed: false },
      { name: 'Joe', passed: true },
    ];
    /**
     * list of students provided,
     * Emit students and apply filter to only display students that passed
     * return only name of the student
     * Subscrive and log the values
     */
    from(students)
      .pipe(
        filter((student) => student.passed),
        map((student) => student.name)
      )
      .subscribe(console.log);
  }
}
