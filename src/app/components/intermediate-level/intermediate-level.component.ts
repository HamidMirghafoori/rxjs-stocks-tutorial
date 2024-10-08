import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { combineLatestAll, delay, finalize, from, Observable, of } from 'rxjs';
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
  private movies: string[] = [
    'Inception',
    'The Dark Knight',
    'Interstellar',
    'Dunkirk',
  ];
  private books: string[] = [
    'Beloved',
    'Siddhartha',
    'Dune',
    'Inferno',
    'Frankenstein',
  ];
  private songs: string[] = ['Hello', 'Imagine', 'Roar', 'Hurt', 'Yellow'];

  private movies$: Observable<string> = from(this.movies).pipe(
    delay(3500),
    finalize(() => console.log('Movies completed'))
  );
  private books$: Observable<string> = from(this.books).pipe(
    delay(2000),
    finalize(() => console.log('Books completed'))
  );
  private songs$: Observable<string> = from(this.songs).pipe(
    delay(1000),
    finalize(() => console.log('Songs completed'))
  );

  public ngOnInit(): void {
    this.log.clearLogs();
    this.combineLatestAll();
  }

  public combineLatestAll() {
    /**
     * Using 3 given lists create 3 observables using from() as following:
     * movies$ with delay 3500, and log a message that movies$ has completed
     * books$ with delay 2000, and log a message that books$ has completed
     * songs$ with delay 1000, and log a message that songs$ has completed
     * create observable using these 3 newly created with of() operator
     * To have the final data of this array of observables we want to use combineLatestAll to
     * subscrive to all three observables in a way that when all 3 has completed, we have the final data
     * and finally we want to log each type of lists separately.
     * Note that we have created 3 observables and then another observable that is array of those 3
     * check how combineLatestAll waits for all three and then emits the result
     * we will see the latest value of the first observable which completes then with each emission from others
     * we will have new emit of updates state of all observables
     */

    of(this.songs$, this.books$, this.movies$)
      .pipe(combineLatestAll())
      .subscribe((data) => {
        console.log(data);
      });
  }
}
