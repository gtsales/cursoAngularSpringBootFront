import { Component } from '@angular/core';
import { Cliente } from '../modelo/Cliente';
import { ClienteService } from '../servico/cliente.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  //Objeto do tipo Cliente
  cliente = new Cliente();

  //Variável para definir a visibilidade dos botões
  btnCadastro:boolean = true;

  //Json de clientes
  clientes:Cliente[] = [];

  //Construtor
  constructor(private servico:ClienteService){}

  //Método de seleção
  selecionar():void{

    this.servico.selecionar()
    .subscribe(retorno => this.clientes = retorno);

  }

  //Método de cadastro
  cadastrar():void{

    this.servico.cadastrar(this.cliente)
    .subscribe(retorno => {this.clientes.push(retorno)});

  }

  //Método de inicialização
  ngOnInit(){

    this.selecionar();

  }

}
