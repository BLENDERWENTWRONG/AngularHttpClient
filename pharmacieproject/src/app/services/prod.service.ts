import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Prod} from "../models/prod";

@Injectable({
  providedIn: 'root'
})
export class ProdService {
  private baseURL = "http://127.0.0.1:8080/produits/"
  constructor(private httpClient: HttpClient) {
  }
  getProdList(): Observable<Prod[]>{
    return this.httpClient.get<Prod[]>(`${this.baseURL+'getAllProd'}`);
  }
  // addFour(): Observable<Four>{
  //   return this.httpClient.post<Four>(`${this.baseURL+'ajouterFou'}`);
  // }
  modFour(): Observable<Prod>{
    return this.httpClient.get<Prod>(`${this.baseURL+'modif/'}`);
  }
  // delFour():Observable<Four>{
  //   return this.httpClient.
  // }

}
