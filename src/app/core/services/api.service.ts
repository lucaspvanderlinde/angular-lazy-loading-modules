import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  public baseUrl: string = 'https://reqres.in/api';

  // public baseUrl: string = 'https://reqres.in/api/users?page=1';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/users?page=1`);
  }
}
