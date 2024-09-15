import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, map, mergeMap, Observable } from 'rxjs';
import {
  serverUrl,
  stockDetailsUrl,
  stockListDelayedUrl,
  stockListUrl,
  stockSymbolsUrl,
} from '../consts/routes';
import { StocksType } from '../models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public constructor(private http: HttpClient) {}

  public getStocksList(): Observable<StocksType[]> {
    const apiUrl = serverUrl + stockListUrl;
    return this.http.get<StocksType[]>(apiUrl);
  }

  public getStocksListDelayed(): Observable<StocksType[]> {
    const apiUrl = serverUrl + stockListDelayedUrl;
    return this.http.get<StocksType[]>(apiUrl);
  }

  public getStockDetails(symbol: string): Observable<any> {
    const apiUrl = serverUrl + stockDetailsUrl;
    return this.http.get<any>(`${apiUrl}/${symbol}`);
  }

  public getStockSymbols(): Observable<string[]> {
    const apiUrl = serverUrl + stockSymbolsUrl;
    return this.http.get<string[]>(apiUrl);
  }

  public getStockDetailInformation(): Observable<any[]> {
    return this.getStockSymbols().pipe(
      // We need the outer mergeMap() to flatten the array of symbols into individual strings
      // which means it subscribes to getStockDetails calls and merges their results into the main stream. 
      // This way, instead of emitting observables themselves, we get the results of the API calls as emissions from the outer observable.
      mergeMap((symbols) =>
        from(symbols).pipe(
          mergeMap((symbol) =>
            this.getStockDetails(symbol).pipe(
              map((details) => ({ symbol, ...details }))
            )
          )
        )
      )
    );
  }
}
