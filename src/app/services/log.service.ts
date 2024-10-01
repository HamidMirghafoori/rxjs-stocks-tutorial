import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  private logSubject = new BehaviorSubject<string[]>([]);
  public logs$ = this.logSubject.asObservable();
  private logs: string[] = [];

  public constructor() {
    this.overrideConsoleLog();
  }
  private overrideConsoleLog() {
    const originalConsoleLog = console.log;

    console.log = (...args: any[]) => {
      const message = args.join(' ');
      this.addLog(message);
      originalConsoleLog.apply(console, args); // Keep the original functionality
    };
  }

  private addLog(message: string) {
    this.logs.push(message);
    this.logSubject.next([...this.logs]); // Emit updated logs
  }

  public clearLogs() {
    this.logs = [];
    this.logSubject.next([...this.logs]);
  }
}
