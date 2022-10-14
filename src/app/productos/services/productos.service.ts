import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  url: string=environment.url;
  constructor(private http: HttpClient ) {

   }
  getAll():Observable <Producto[]> {
    return this.http.get<Producto[]>(`${ this.url }/producto`);
  }
  get(id: string):Observable<Producto>{
    return this.http.get<Producto>(`${ this.url }/producto/${id}`);
  }
  crear(producto:Producto):Observable<Producto>{
     return this.http.post<Producto>(`${ this.url }/producto`,producto);
  }
  guardar(producto:Producto):Observable<Producto>{
    return this.http.put<Producto>(`${ this.url }/producto/${ producto.id }`,producto);
  }
  eliminar(producto:Producto):Observable<Producto>{
    return this.http.delete<Producto>(`${ this.url }/justificacione/${ producto.id }`);
  }
}
