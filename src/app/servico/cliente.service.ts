import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  //Url da API
  private url:string = 'http://localhost:8080';

  constructor(private http:HttpClient) { }//declara o http um objeto da classe HttpClient, para através dele realizar requisições http

}
