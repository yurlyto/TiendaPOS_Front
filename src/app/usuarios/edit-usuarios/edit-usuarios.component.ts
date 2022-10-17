import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Component({
  selector: 'app-edit-usuarios',
  templateUrl: './edit-usuarios.component.html',
  styleUrls: ['./edit-usuarios.component.css']
})
export class EditUsuariosComponent implements OnInit {
  @Input() usuario?: Usuario;
  constructor() { }

  ngOnInit(): void {
  }

}
