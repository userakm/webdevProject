import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './User';
import { USERS } from './users';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  BASE_URL = 'http://localhost:8000'
  private usersUrl = 'api/users'
  constructor(
    private http: HttpClient,
  ) { }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>( `${this.BASE_URL}/api/users`)
  }

  getUser(username: String): Observable<User> {
    return of(USERS.find(user => user.username === username));
  }

  register(user: User){
    USERS.push(user);
  }
  
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

    console.error(error); 

    return of(result as T);
    };
  }
  
}
