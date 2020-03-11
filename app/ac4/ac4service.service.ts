import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ac4 } from './ac4';
@Injectable({
 providedIn: 'root'
})
export class Ac4serviceService {
  
  
  getiposList() {
    throw new Error("Method not implemented.");
  }
 private baseUrl = 'http://localhost:8070/Ipos/ipos';
 

 constructor(private http:HttpClient) { }
 getAllIpos(): Observable<any> {

  return this.http.get(`${this.baseUrl}`+'/getAllIpos');
}
  saveIpos(ac2: object): Observable<object> {

  return this.http.post(`${this.baseUrl}`+'/saveIpos', ac2);

 }

 deleteIpos(ipoid: Number): Observable<any> {
  return this.http.delete(`${this.baseUrl}/deleteipos/${ipoid}`);
 }

 findOneInAll2(ipoid: Number): Observable<any> {

  return this.http.get(`${this.baseUrl}/findOneInAll2/${ipoid}`);

 }

 updateIpos(ipoid: Number, value: any): Observable<any> {

  return this.http.put(`${this.baseUrl}/updateIpos/${ipoid}`, value);
 }
}





