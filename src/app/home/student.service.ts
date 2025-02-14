import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http.service';



@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiUrl = 'http://localhost:3000/students';

  constructor(private http: HttpClient,private commonHttp: HttpService ) { }

  // using common http service
  getUsers(): Observable<any> {
    return this.commonHttp.get<any>('students');
  }

  //  getUsers(): Observable<any[]> {
  //   return this.http.get<any[]>(this.apiUrl);
  // }
  

  // getUser(id: number): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}/${id}`);
  // }

  addUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, {name: user});
  }

  updateUser(id: number, user: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, {name: user});
  }
 
  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
