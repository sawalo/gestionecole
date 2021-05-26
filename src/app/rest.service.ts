/* import { Injectable } from '@angular/core';
import {  HttpClient}from '@angular/common/http'
import { Utilisateurs } from './utilisateurs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }
  url: string= "Http://localhost: 3000/utilisateurs";
  getUtilisateurs(){
    return this.http.get<Utilisateurs[]>(this.url)
  }
}
 */