import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Venta } from '../interfaces/venta';

@Injectable({
  providedIn: 'root'
})
export class VentasService {
  url: string=environment.url;
  constructor(private http: HttpClient ) {

   }
  getAll():Observable <Venta[]> {
    return this.http.get<Venta[]>(`${ this.url }/venta`);
  }
  get(id: string):Observable<Venta>{
    return this.http.get<Venta>(`${ this.url }/venta/${id}`);
  }
  crear(venta:Venta):Observable<Venta>{
     return this.http.post<Venta>(`${ this.url }/venta`,venta);
  }
  guardar(venta:Venta):Observable<Venta>{
    return this.http.put<Venta>(`${ this.url }/venta/${ venta.id }`,venta);
  }
  eliminar(venta:Venta):Observable<Venta>{
    return this.http.delete<Venta>(`${ this.url }/justificacione/${ venta.id }`);
  }
}
