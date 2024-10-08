import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { combineLatestWith, delay, finalize, from, Observable } from 'rxjs';
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

  public constructor(private log: LogService) {}

  public ngOnInit(): void {
    this.log.clearLogs();
    this.combineLatestWith();
  }

  private combineLatestWith() {
    /**
     * we modify the final code of combineLatestAll to implement combineLatestWith
     * use songs$ observable as source and other two (books$ and movies$) as parameters of combineLatestWith
     * you'll see that the output is exactly the same with combineLatestAll
     * Note the only difference is the type of source, in combineLatestAll we have observable of observables of(....)
     */

    this.songs$
      .pipe(combineLatestWith(this.books$, this.movies$))
      .subscribe((w) => {
        console.log(w);
      });
  }
}
