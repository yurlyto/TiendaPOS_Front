import { Component, OnInit } from '@angular/core';
import { Cliente } from './interfaces/cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes:Cliente[]=[
    {
      "id": 1,
      "documento": "71526310",
      "nombres": "Yurly Andres",
      "apellidos": "Velez Bedoya",
      "celular": "3052477242",
      "telefono": "",
      "email": "yurly@gamil.com",
      "cupo": 0,
      "saldo": 0,
      "observaciones": ""
    },
    {
      "id": 2,
      "documento": "8432976",
      "nombres": "Frank",
      "apellidos": "Ramirez",
      "celular": "3007786565",
      "telefono": "2340809",
      "email": "frank@gmail.com",
      "cupo": 100,
      "saldo": 0,
      "observaciones": "Ninguna"
    },
    {
      "id": 4,
      "documento": "12345",
      "nombres": "Felipe",
      "apellidos": "Ramirez",
      "celular": "3007786565",
      "telefono": "2340809",
      "email": "felipe@gmail.com",
      "cupo": 100,
      "saldo": 0,
      "observaciones": "Ninguna"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
