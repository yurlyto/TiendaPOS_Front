import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Formapago } from '../interfaces/formapago';

@Component({
  selector: 'app-listado-formapagos',
  templateUrl: './listado-formapagos.component.html',
  styleUrls: ['./listado-formapagos.component.css'],
})
export class ListadoFormapagosComponent implements OnInit {
  @Input() formapagos: Formapago[] = [];
  @Output() editItem = new EventEmitter<Formapago>();
  @Output() eliminarItem = new EventEmitter<Formapago>();

  constructor() {}

  ngOnInit(): void {}

  edit(formapago: Formapago) {
    this.editItem.emit(formapago);
  }
  eliminar(formapago: Formapago) {
    this.eliminarItem.emit(formapago);
  }
}
