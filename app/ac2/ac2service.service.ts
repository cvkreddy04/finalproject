import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ac2 } from './ac2';
@Injectable({
 providedIn: 'root'
})
export class Ac2serviceService {
  
  
  getcompanyList() {
    throw new Error("Method not implemented.");
  }
 private baseUrl = 'http://localhost:8070/Companydata/company';
 

 constructor(private http:HttpClient) { }
 getAllCompanies(): Observable<any> {

  return this.http.get(`${this.baseUrl}`+'/getAllCompanies');
}
  saveCompanydata(ac2: object): Observable<object> {

  return this.http.post(`${this.baseUrl}`+'/saveCompanydata', ac2);

 }
 deleteCompanydata(companyname: String): Observable<object> {
  return this.http.delete(`${this.baseUrl}/deleteCompanydata/${companyname}`);
 }
 findOneInAll1(companyname: String): Observable<any> {

  return this.http.get(`${this.baseUrl}/findOneInAll1/${companyname}`);

 }

 updateCompanydata(companyname: object, value: String): Observable<Object> {

  return this.http.put(`${this.baseUrl}`+'/updateCompanydata/'+value, companyname);
 }
}





