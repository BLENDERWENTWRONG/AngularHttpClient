import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Four} from "../models/four";

@Injectable({
  providedIn: 'root'
})
export class FourService {
  private baseURL = "http://127.0.0.1:8080/fournisseurs/"
  constructor(private httpClient: HttpClient) {
  }
  getFourList(): Observable<Four[]>{
    return this.httpClient.get<Four[]>(`${this.baseURL+'getAllFou'}`);
  }
  // addFour(): Observable<Four>{
  //   return this.httpClient.post<Four>(`${this.baseURL+'ajouterFou'}`);
  // }
  modFour(): Observable<Four>{
    return this.httpClient.get<Four>(`${this.baseURL+'modif/'}`);
  }
  // delFour():Observable<Four>{
  //   return this.httpClient.
  // }

}
