import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Four} from '../models/four';

@Injectable({
  providedIn: 'root'
})
export class FourService {
  private baseURL = 'http://localhost:8083/fournisseurs/';

  constructor(private httpClient: HttpClient) {
  }

  getFourList(): Observable<Four[]> {
    return this.httpClient.get<Four[]>(`${this.baseURL + 'getAllFou'}`);
  }

  addFour(four: Four): Observable<Object> {
    return this.httpClient.post(`${this.baseURL + 'ajouterFou'}`, four);
  }

  getFour(id: number): Observable<Four> {
    return this.httpClient.get<Four>(`${this.baseURL}/${id}`);
  }

  delFour(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL + 'sup/'}/${id}`);
  }

  modFour(id: number, four: Four): Observable<Four> {
    return this.httpClient.put<Four>(`${this.baseURL + 'modif'}/${id}`, four);
  }
}
