import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';
import { map, Observable, of, shareReplay, switchMap } from 'rxjs';
import { DataService } from '../../services';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css',
})
export class ChartComponent implements OnChanges {
  @Input() public symbol: string = '';

  public chatData$!: Observable<number[]>;
  public stockFullName$!: Observable<string>;

  public constructor(private dataService: DataService) {}

  public ngOnChanges(): void {
    this.stockFullName$ = of(this.symbol).pipe(
      switchMap((symbol: string) => {
        return this.dataService.getStockNameBySymbol(symbol);
      }),
      shareReplay()
    );
    this.chatData$ = of(this.symbol).pipe(
      switchMap((symbol: string) => {
        return this.dataService
          .getSymbolHistoricData(symbol)
          .pipe(map((data) => this.normalizeData(data)));
      }),
      shareReplay()
    );
  }

  private normalizeData(data: number[]): number[] {
    const max = Math.max(...data);
    const min = Math.min(...data);
    return data.map((value) => ((value - min) / (max - min)) * 100);
  }
}
