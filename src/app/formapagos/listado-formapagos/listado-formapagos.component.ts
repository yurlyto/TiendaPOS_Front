import { Component, Input, OnInit } from '@angular/core';
import { Formapago } from '../interfaces/formapago';

@Component({
  selector: 'app-listado-formapagos',
  templateUrl: './listado-formapagos.component.html',
  styleUrls: ['./listado-formapagos.component.css']
})
export class ListadoFormapagosComponent implements OnInit {
  
  @Input() formapagos: Formapago[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
