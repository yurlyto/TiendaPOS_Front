import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Usuario } from './interfaces/usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers: [MessageService]
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[]=[];

  usuario: Usuario ={
    "id": 0,
    "email": "",
    "password": "",
    "nombres": "",
    "administrador": false,
    "activo": true
  };

  constructor(
    private messageService:MessageService
  ) { }

  guardar($event: Usuario) {
    throw new Error('Method not implemented.');
  }
  crear($event: Usuario) {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.refrescar();
  }
  refrescar(){
    this.usuarios=[{
      "id": 1,
      "email": "prueba@gmail.com",
      "password": "12345678",
      "nombres": "Usuario de Prueba",
      "administrador": true,
      "activo": true
    },
    {
      "id": 2,
      "email": "sebastian@gmail.com",
      "password": "futbol2837",
      "nombres": "Sebastian",
      "administrador": true,
      "activo": true
    }]
   }
    nuevo(){
      this.usuario= {
        "id": 0,
        "email": "",
        "password": "",
        "nombres": "",
        "administrador": false,
        "activo": true
      }

    }
    editar(usuario:Usuario){
      this.usuario=usuario
    }
    eliminar(usuario:Usuario){

    }
}
