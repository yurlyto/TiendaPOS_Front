import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/productos/interfaces/producto';

import {NgForm} from '@angular/forms';
import { Venta } from '../interfaces/venta';

@Component({
  selector: 'app-recibo-productos',
  templateUrl: './recibo-productos.component.html',
  styleUrls: ['./recibo-productos.component.css']
})
export class ReciboProductosComponent implements OnInit {
  @Input() venta!: Venta;
  @Input() total: number=0;
  codBar:string="";
  constructor() { }

  ngOnInit(): void {

  }


}
