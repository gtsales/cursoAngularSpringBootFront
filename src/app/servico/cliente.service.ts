import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../modelo/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  //Url da API
  private url:string = 'http://localhost:8080';

  constructor(private http:HttpClient) { }//declara o http um objeto da classe HttpClient, para através dele realizar requisições http

  //Método para selecionar todos os clientes
  selecionar():Observable<Cliente[]>{

    return this.http.get<Cliente[]>(this.url);

  }

  //Método para cadastrar clientes
  cadastrar(obj:Cliente):Observable<Cliente>{

    return this.http.post<Cliente>(this.url, obj);

  }

   //Método para editar clientes
   editar(obj:Cliente):Observable<Cliente>{

    return this.http.put<Cliente>(this.url, obj);

  }

}
