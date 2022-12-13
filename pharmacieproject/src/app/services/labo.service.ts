import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Labo} from '../models/labo';

@Injectable({
  providedIn: 'root'
})
export class LaboService {

  private baseURL = "http://localhost:8083/laboratoires/"

  constructor(private httpClient: HttpClient) {
  }

  getLabolist(): Observable<Labo[]> {
    return this.httpClient.get<Labo[]>(`${this.baseURL + 'getAllLabo'}`);
  }

  // tslint:disable-next-line:ban-types
  addLabo(labo: Labo): Observable<Labo> {
    return this.httpClient.post(`${this.baseURL + 'ajouterLabo'}`, labo);
  }

  getLabo(id: number): Observable<Labo> {
    return this.httpClient.get<Labo>(`${this.baseURL}/${id}`);
  }

  // tslint:disable-next-line:ban-types
  delLabo(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL + 'sup'}/${id}`);
  }
  modLabo(id: number, labo: Labo): Observable<Labo>{
    return this.httpClient.put<Labo>(`${this.baseURL + 'modif'}/${id}`, labo);
  }
}
