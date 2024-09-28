import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, mergeMap, Observable, of } from 'rxjs';
import {
  realtimePriceUrl,
  realtimePriceWithDelayUrl,
  stockDetailsBySymbolUrl,
  stockDetailsUrl,
  stockHistoricBySymbols,
  stockListDelayedUrl,
  stockListPart2Url,
  stockListUrl,
  stockNameBySymbols,
  stockSymbolsUrl
} from '../consts/routes';
import { StockDetails, StockFullDetail, StocksType } from '../models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public constructor(private http: HttpClient) {}

  public getStocksList(): Observable<StocksType[]> {
    return this.http.get<StocksType[]>(stockListUrl);
  }

  public getStocksListPart2(): Observable<StocksType[]> {
    return this.http.get<StocksType[]>(stockListPart2Url);
  }

  public getStocksListDelayed(): Observable<StocksType[]> {
    return this.http.get<StocksType[]>(stockListDelayedUrl);
  }

  public getStockDetailsBySymbol(symbol: string): Observable<StockDetails> {
    return this.http.get<StockDetails>(`${stockDetailsBySymbolUrl}/${symbol}`);
  }

  public getStockDetails(): Observable<StockDetails> {
    return this.http.get<StockDetails>(stockDetailsUrl);
  }

  public getSymbolHistoricData(symbol: string): Observable<number[]> {
    return this.http.get<number[]>(`${stockHistoricBySymbols}/${symbol}`);
  }

  public getStockNameBySymbol(symbol: string): Observable<string> {
    return this.http.get<string>(`${stockNameBySymbols}/${symbol}`);
  }

  public getRealtimePrice(symbol: string, withDelay: boolean): Observable<number> {
    if (symbol === '') return of(0);
    const apiUrl = (withDelay ? realtimePriceWithDelayUrl : realtimePriceUrl);
    return this.http.get<number>(`${apiUrl}/${symbol}`);
  }

  public getStockSymbols(): Observable<string[]> {
    return this.http.get<string[]>(stockSymbolsUrl);
  }

  public getStockDetailInformation(): Observable<StockFullDetail[]> {
    return this.getStockSymbols().pipe(
      // We need the outer mergeMap() to flatten the array of symbols into individual strings
      // which means it subscribes to getStockDetails calls and merges their results into the main stream.
      // This way, instead of emitting observables themselves, we get the results of the API calls as emissions from the outer observable.
      mergeMap((symbols) =>
        forkJoin(
          symbols.map((symbol) =>
            this.getStockDetailsBySymbol(symbol).pipe(
              map((details) => ({ symbol, ...details } as StockFullDetail))
            )
          )
        )
      )
    );
  }
}
