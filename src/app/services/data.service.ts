import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { serverUrl, stockList, stockListDelayed } from '../consts/routes';
import { StocksType } from '../models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public constructor(private http: HttpClient) {}

  public getStocksList(): Observable<StocksType[]> {
    const apiUrl = serverUrl + stockList;
    return this.http.get<StocksType[]>(apiUrl)
  }

  public getStocksListDelayed(): Observable<StocksType[]> {
    const apiUrl = serverUrl + stockListDelayed;
    return this.http.get<StocksType[]>(apiUrl)
  }
}
