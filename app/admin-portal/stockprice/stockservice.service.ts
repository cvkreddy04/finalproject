import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class StockserviceService {
  
  
  getStocksList() {
    throw new Error("Method not implemented.");
  }
 private baseUrl = 'http://localhost:8070/Stockprice/Stockprice';
 

 constructor(private http:HttpClient) { }
 getAllStockprices(): Observable<any> {

  return this.http.get(`${this.baseUrl}`+'/getAllStockprices');
}
  saveStockprice(stock: object): Observable<any> {

  return this.http.post(`${this.baseUrl}`+'/saveStockprice', stock);

 }

 deleteStockprice(stockexchange: String): Observable<any> {
  return this.http.delete(`${this.baseUrl}/deleteStockprice/${stockexchange}`);
 }

 findOneInAll5(stockexchange: String): Observable<any> {

  return this.http.get(`${this.baseUrl}/findOneInAll5/${stockexchange}`);

 }

 updateStockprice(stockexchange: String,): Observable<any> {

  return this.http.put(this.baseUrl+'/updateStockprice/{stockexchange}',stockexchange);
 }
}





