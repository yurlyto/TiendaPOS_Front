import { Component, OnInit } from '@angular/core';
import { Formapago } from './interfaces/formapago';
import { FormapagosService } from './services/formapagos.service';

@Component({
  selector: 'app-formapagos',
  templateUrl: './formapagos.component.html',
  styleUrls: ['./formapagos.component.css']
})
export class FormapagosComponent implements OnInit {
  formapagos: Formapago[]=[];
  formapago:Formapago={
    id:0,
    descripcion:"",
    credito: false
  }

  constructor(private formapagosService:FormapagosService) { }

  ngOnInit(): void {
    this.refrescar();
  }
  new(){
    console.log("crear forma de pago")
  }
  refrescar(){
    this.formapagosService.getAll().subscribe((resp) => {
      this.formapagos = resp;
    });
  }

}
