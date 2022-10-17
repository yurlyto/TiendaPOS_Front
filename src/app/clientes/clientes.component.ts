import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Cliente } from './interfaces/cliente';
import { ClientesService } from './services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  providers:[MessageService]
})
export class ClientesComponent implements OnInit {
  cliente:Cliente|undefined;
  clientes:Cliente[]=[]
  constructor(private clientesService:ClientesService,
    private messageService:MessageService) { }

  ngOnInit(): void {
    this.refrescar();
  }
  refrescar() {
    this.clientesService.getAll().subscribe((resp) => {
      this.clientes = resp;
    });
  }
  nuevo(){
    this.cliente={
      "id": 0,
      "documento": "",
      "nombres": "",
      "apellidos": "",
      "celular": "",
      "telefono": "",
      "email": "",
      "cupo": 0,
      "saldo": 0,
      "observaciones": ""
    }
  }
  editar(cliente:Cliente){
    console.log(cliente)
    this.cliente=cliente;
  }
  crear(cliente:Cliente){
    this.clientesService.crear(cliente).subscribe((resp) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Creacion Cliente',
          detail:
            `Se ha creado el cliente ${cliente.nombres} ${cliente.apellidos} exitosamente!!!`,
        });
        this.refrescar();
        this.nuevo();
    });
  }
  guardar(cliente:Cliente){
    this.clientesService.guardar(cliente).subscribe((resp) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Edición Cliente',
          detail:
            `Se ha guardado el cliente ${cliente.nombres} ${cliente.apellidos} exitosamente!!!`,
        });
        this.refrescar();
    });
  }
  eliminar(cliente:Cliente){
    this.clientesService.eliminar(cliente).subscribe((resp) => {
      this.messageService.add({
        severity: 'error',
        summary: 'Eliminación Cliente',
        detail:
          `Se ha eliminado el cliente ${cliente.nombres} ${cliente.apellidos} exitosamente!!!`,
      });
      this.refrescar();
      this.nuevo();
  });
  }

}
