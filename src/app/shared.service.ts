import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private apiUrl = 'http://localhost:3000/users';
 
  public mydata:any;

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(`${this.apiUrl}?username=${username}&password=${password}`).pipe(
      map((users: any[]) => {
        return users.length > 0;
      })
    );
  }

  toasts: { message: string; type: string }[] = [];

  show(message: string, type: 'success' | 'danger' | 'warning' | 'info') {
    this.toasts.push({ message, type });

    // Auto remove after 3 seconds
    setTimeout(() => this.toasts.shift(), 3000);
  }
}
