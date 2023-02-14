import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Osoite } from './model/osoite';


@Injectable({
  providedIn: 'root'
})
export class OsoiteService {

 mydatasosoite = 'https://raw.githubusercontent.com/gittjar/products/main/db_burger.json';

  constructor(private http: HttpClient) { }

  getOsoite(): Observable <Osoite[]>
  {
    return this.http.get<Osoite[]>(this.mydatasosoite);
  }
}
