import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { UserInformation } from './model/userinformation';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<UserInformation> {
  const url = 'https://reqres.in/api/users';
 // const url = 'https://fakestoreapi.com/products/';
  const Xurl = 'https://fakestoreapi.com/users?limit=4';
    return this.http.get<UserInformation>(url);
  }
}
