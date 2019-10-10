import { UsersTwo } from 'src/app/shared/models/usersTwo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiTwoService {

  public baseUrl: string = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UsersTwo[]> {
    return this.http.get<UsersTwo[]>(`${this.baseUrl}/posts`);
  }
}
