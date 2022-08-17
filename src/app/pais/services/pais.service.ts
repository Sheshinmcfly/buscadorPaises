import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _apiUrl: string = 'https://restcountries.com/v2';

  get httpParams() {
    return new HttpParams()
      .set('fields', 'name,capital,alpha2Code,flag,population');
  }

  constructor(private http: HttpClient) { }


  buscarPais(pais: string): Observable<Pais[]> {

    const url = `${this._apiUrl}/name/${pais}`;

    return this.http.get<Pais[]>(url, { params: this.httpParams });
  }


  buscarCapital(capital: string): Observable<Pais[]> {

    const url = `${this._apiUrl}/capital/${capital}`;

    return this.http.get<Pais[]>(url, { params: this.httpParams });
  }


  obtenerPaisPorId(id: string): Observable<Pais> {

    const url = `${this._apiUrl}/alpha/${id}`;

    return this.http.get<Pais>(url);
  }


  buscarRegion(region: string): Observable<Pais[]> {

    const url = `${this._apiUrl}/region/${region}`;

    return this.http.get<Pais[]>(url, { params: this.httpParams });
  }
}
