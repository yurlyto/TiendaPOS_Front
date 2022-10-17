import { Component, OnInit } from '@angular/core';
import { Usuario } from './interfaces/usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[]=[];
  usuario: Usuario | undefined;



  constructor() { }

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

      }
      editar(usuario:Usuario){
        this.usuario=usuario
      }
      eliminar(usuario:Usuario){

      }
}
