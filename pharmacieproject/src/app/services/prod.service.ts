import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Prod} from "../models/prod";

@Injectable({
  providedIn: 'root'
})
export class ProdService {
  private baseURL = "http://localhost:8083/produits/"

  constructor(private httpClient: HttpClient) {
  }

  getProdList(): Observable<Prod[]> {
    return this.httpClient.get<Prod[]>(`${this.baseURL + 'getAllProd'}`);
  }

  addProd(prod: Prod): Observable<Object> {
    return this.httpClient.post(`${this.baseURL + 'ajouterProduit'}`, prod);
  }

  getProd(id: number): Observable<Prod> {
    return this.httpClient.get<Prod>(`${this.baseURL}/${id}`)
  }

  delProd(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL + 'sup'}/${id}`)
  }
  modProd(id: number, prod: Prod): Observable<Prod>{
    return this.httpClient.put<Prod>(`${this.baseURL + 'modif'}/${id}`, prod)
  }
}
