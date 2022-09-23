import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categoria } from '../interfaces/categoria';


@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  url: string=environment.url;
  constructor(private http: HttpClient ) {

  }
  getAll():Observable <Categoria[]> {
    return this.http.get<Categoria[]>(`${ this.url }/categoria`);
  }
  get(id: string):Observable<Categoria>{
    return this.http.get<Categoria>(`${ this.url }/categoria${id}`);
  }
  crear(categoria:Categoria):Observable<Categoria>{
     return this.http.post<Categoria>(`${ this.url }/categoria`,categoria);
  }
  guardar(categoria:Categoria):Observable<Categoria>{
    return this.http.put<Categoria>(`${ this.url }/categoria/${ categoria.id }`,categoria);
  }
  eliminar(categoria:Categoria):Observable<Categoria>{
    return this.http.delete<Categoria>(`${ this.url }/categoria/${ categoria.id }`);
  }
}
