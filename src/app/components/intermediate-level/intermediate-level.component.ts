import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { of, zipAll } from 'rxjs';
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
    this.zipAll();
  }

  private zipAll() {
    const obs1$ = of<any>(1, 2, 3, 4, 5);
    const obs2$ = of<any>('A', 'B', 'C', 'D');
    const obs3$ = of<any>(true, false, true);
    /**
     * Starting data is provided, the reason we typed all of them as any is that
     * zipAll expects all observables have same type, which ours is not. Casting any solved the lint error
     * 1 - combine all three observables as one observable named higherOrderObservable$
     * Because zipAll is a pipeable operator, so pipe into higherOrderObservable$ and apply zipAll()
     * then subscribe and log the values.
     * Note similar to zip, the moment one observable completes, zipAll completes too.
     * 2 - copy your higherOrderObservable$ code and provide resultSelector function to zipAll() 
     * to transform data same as zip() transformation with a dash between values
     */
    const higherOrderObservable$ = of(obs1$, obs2$, obs3$);

    higherOrderObservable$
      .pipe(zipAll())
      .subscribe((data) => console.log('Without transformation: ', data));

    higherOrderObservable$
      .pipe(
        zipAll((data1, data2, data3) => {
          return `${data1} - ${data2} - ${data3}`;
        })
      )
      .subscribe((data) => console.log('With transformation: ', data));
  }
}
