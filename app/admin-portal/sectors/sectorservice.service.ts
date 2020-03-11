import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class SectorserviceService {
  
  
  getSectorsList() {
    throw new Error("Method not implemented.");
  }
 private baseUrl = 'http://localhost:8070/Sectors/Sectors';
 

 constructor(private http:HttpClient) { }
 getAllSectors(): Observable<any> {

  return this.http.get(`${this.baseUrl}`+'/getAllSectors');
}
  saveSectors(sector: object): Observable<object> {

  return this.http.post(`${this.baseUrl}`+'/saveSectors', sector);

 }

 deleteSectors(sectorid: Number): Observable<object> {
  return this.http.delete(`${this.baseUrl}/deleteSectors/${sectorid}`);
 }

 findOneInAll3(sectorid: Number): Observable<any> {

  return this.http.get(`${this.baseUrl}/findOneInAll3/${sectorid}`);

 }

 updateSectors(sectorid: Number, value: any): Observable<any> {

  return this.http.put(`${this.baseUrl}/updateSectors/${sectorid}`, value);
 }
}





