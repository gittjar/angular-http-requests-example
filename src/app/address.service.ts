import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { AddressInformation } from './model/addressinformation';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) {}

  public getAddresses(): Observable<AddressInformation> {

   const base_url = 'https://reqres.in/api/users?page=2';

    return this.http.get<AddressInformation>(base_url);
  }
}

