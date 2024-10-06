import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private eventSubject$ = new Subject<string>();

  constructor() { }

  public emitEvent(message: string): void {
    this.eventSubject$.next(message);
  }

  public get events$() {
    return this.eventSubject$.asObservable();
  }
}
