import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
@Injectable({
 providedIn: 'root'
})
export class UserserviceService {
  
  getuserList() {
    throw new Error("Method not implemented.");
  }
 private baseUrl = 'http://localhost:8070/User/UserPortal';
 

 constructor(private http:HttpClient) { }
 getAllUsers(): Observable<any> {

  return this.http.get(`${this.baseUrl}`+'/getAllUsers');
}
  saveUser(user: object): Observable<object> {

  return this.http.post(`${this.baseUrl}`+'/saveUser', user);

 }
 deleteUser(username: String): Observable<any> {
  return this.http.delete<User>(`${this.baseUrl}/deleteUser/${username}`);
 }
 findOneInAll6(username: String): Observable<any> {

  return this.http.get(`${this.baseUrl}/findOneInAll6/${username}`);

 }

 updateUser(username: String, value: any): Observable<any> {

  return this.http.put(`${this.baseUrl}/updateUser/${username}`, value);
 }
 findByUsernameAndPassword(username: String,password:String): Observable<User>{

  return this.http.get<User>(`${this.baseUrl}`+'/findByUsernameAndPassword/'+username+'/'+password);
 }
 uploadFile( file: File , id : number ) : Observable<any>  
 {  
   let url = this.baseUrl + "uploadImage/" + id ;  
 
   const formdata: FormData = new FormData();  
   
   formdata.append('file', file);  
  
   return this.http.post(url , formdata);  
 }  
}





