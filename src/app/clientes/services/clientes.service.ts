import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  url: string=environment.url;
  constructor(private http: HttpClient ) {

   }
  getAll():Observable <Cliente[]> {
    return this.http.get<Cliente[]>(`${ this.url }/cliente`);
  }
  get(id: string):Observable<Cliente>{
    return this.http.get<Cliente>(`${ this.url }/cliente${id}`);
  }
  crear(cliente:Cliente):Observable<Cliente>{
     return this.http.post<Cliente>(`${ this.url }/cliente`,cliente);
  }
  guardar(cliente:Cliente):Observable<Cliente>{
    return this.http.put<Cliente>(`${ this.url }/cliente/${ cliente.id }`,cliente);
  }
  eliminar(cliente:Cliente):Observable<Cliente>{
    return this.http.delete<Cliente>(`${ this.url }/cliente/${ cliente.id }`);
  }
}
