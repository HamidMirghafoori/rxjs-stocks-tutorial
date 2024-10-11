import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { groupBy, interval, mergeMap, of, take, toArray } from 'rxjs';
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
    this.groupBy();
  }

  private groupBy() {
    const students$ = of(
      { name: 'Alice', grade: 'A' },
      { name: 'Bob', grade: 'B' },
      { name: 'Charlie', grade: 'A' },
      { name: 'David', grade: 'B' },
      { name: 'Eve', grade: 'A' }
    );
    const source$ = interval(250).pipe(take(20));
    /**
     * Required data is provided.
     * 1 - Apply groupBy on students$ and group by grade key. For viewing the grouped data
     * apply mergeMap on groups to convert each group to an array
     * Subscribe with complete function signature and log the data as well as completion message
     * 2 - Apply groupBy on students$ and group by grade key and select names values. For viewing the grouped data
     * apply mergeMap on groups to convert each group to an array
     * Note how selecting elements changes the final output.
     * 3 - Apply groupBy on source$ and for keySelector provide a function that generates two keys
     * ("even" and "odd") and in duration provide interval of 1500
     * Apply mergeMap on groups to convert each group to an array
     * Subscribe to it and log the final data.
     * Note how duration observable limits the number of each
     * group and makes groupBy generate extra emissions for each group.
     */
    students$
      .pipe(
        groupBy((student) => student.grade),
        mergeMap((group) => group.pipe(toArray()))
      )
      .subscribe({
        next: (data) => console.log(JSON.stringify(data)),
        complete: () =>
          console.log('1st group with key selector completed!\n\n'),
      });

    students$
      .pipe(
        groupBy((student) => student.grade, {
          element: (student) => student.name,
        }),
        mergeMap((group) => group.pipe(toArray()))
      )
      .subscribe({
        next: (data) => console.log(JSON.stringify(data)),
        complete: () =>
          console.log('2nd group with key and element selector completed!\n\n'),
      });

    source$
      .pipe(
        groupBy((num) => (num % 2 === 0 ? 'even' : 'odd'), {
          duration: () => interval(1500),
        }),
        mergeMap((group) => group.pipe(toArray()))
      )
      .subscribe(console.log);
  }
}
