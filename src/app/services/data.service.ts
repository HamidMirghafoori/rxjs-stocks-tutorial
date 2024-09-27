import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, mergeMap, Observable, of } from 'rxjs';
import {
  realtimePriceUrl,
  realtimePriceWithDelayUrl,
  serverUrl,
  stockDetailsUrl,
  stockHistoricBySymbols,
  stockListDelayedUrl,
  stockListPart2Url,
  stockListUrl,
  stockNameBySymbols,
  stockSymbolsUrl,
} from '../consts/routes';
import { StockDetails, StockFullDetail, StocksType } from '../models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public constructor(private http: HttpClient) {}

  public getStocksList(): Observable<StocksType[]> {
    const apiUrl = serverUrl + stockListUrl;
    return this.http.get<StocksType[]>(apiUrl);
  }

  public getStocksListPart2(): Observable<StocksType[]> {
    const apiUrl = serverUrl + stockListPart2Url;
    return this.http.get<StocksType[]>(apiUrl);
  }

  public getStocksListDelayed(): Observable<StocksType[]> {
    const apiUrl = serverUrl + stockListDelayedUrl;
    return this.http.get<StocksType[]>(apiUrl);
  }

  public getStockDetails(symbol: string): Observable<StockDetails> {
    const apiUrl = serverUrl + stockDetailsUrl;
    return this.http.get<StockDetails>(`${apiUrl}/${symbol}`);
  }

  public getSymbolHistoricData(symbol: string): Observable<number[]> {
    const apiUrl = serverUrl + stockHistoricBySymbols;
    return this.http.get<number[]>(`${apiUrl}/${symbol}`);
  }

  public getStockNameBySymbol(symbol: string): Observable<string> {
    const apiUrl = serverUrl + stockNameBySymbols;
    return this.http.get<string>(`${apiUrl}/${symbol}`);
  }

  public getRealtimePrice(symbol: string, withDelay: boolean): Observable<number> {
    if (symbol === '') return of(0);

    const apiUrl = serverUrl + (withDelay ? realtimePriceWithDelayUrl : realtimePriceUrl);
    return this.http.get<number>(`${apiUrl}/${symbol}`);
  }

  public getStockSymbols(): Observable<string[]> {
    const apiUrl = serverUrl + stockSymbolsUrl;
    return this.http.get<string[]>(apiUrl);
  }

  public getStockDetailInformation(): Observable<StockFullDetail[]> {
    return this.getStockSymbols().pipe(
      // We need the outer mergeMap() to flatten the array of symbols into individual strings
      // which means it subscribes to getStockDetails calls and merges their results into the main stream.
      // This way, instead of emitting observables themselves, we get the results of the API calls as emissions from the outer observable.
      mergeMap((symbols) =>
        forkJoin(
          symbols.map((symbol) =>
            this.getStockDetails(symbol).pipe(
              map((details) => ({ symbol, ...details } as StockFullDetail))
            )
          )
        )
      )
    );
  }
}
