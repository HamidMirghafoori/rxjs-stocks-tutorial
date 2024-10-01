import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LogService } from '../../services';

@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './terminal.component.html',
  styleUrl: './terminal.component.css',
})
export class TerminalComponent implements OnInit {
  public logs: string[] = [];

  public constructor(private logService: LogService) {}

  public ngOnInit(): void {
    this.logService.logs$.subscribe((logs) => {
      this.logs = logs;
    });
  }
}
