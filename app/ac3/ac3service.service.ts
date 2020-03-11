import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ac3 } from './ac3';
@Injectable({
 providedIn: 'root'
})
export class Ac3serviceService {
  
  
  getStocks() {
    throw new Error("Method not implemented.");
  }
 private baseUrl = 'http://localhost:8070/Stockexchange/Stocks/';
 

 constructor(private http:HttpClient) { }
 getAllStocks(): Observable<any> {

  return this.http.get(`${this.baseUrl}`+'getAllStocks');
}
  saveStockdata(ac3: object): Observable<object> {

  return this.http.post(`${this.baseUrl}`+'saveStockdata', ac3);

 }
 deleteStockexchange(stockexid: Number): Observable<object> {
  return this.http.delete(`${this.baseUrl}/deleteStockexchange/${stockexid}`);
 }
 findOneInAll4(stockexid: Number): Observable<any> {

  return this.http.get(`${this.baseUrl}/findOneInAll4/${stockexid}`);

 }

 updateStockexchange(stockexid: object, value: Number): Observable<Object> {

  return this.http.put(`${this.baseUrl}`+'/updateStockexchange/'+ value, stockexid);
 }
}





