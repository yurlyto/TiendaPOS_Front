import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Justificacion } from '../interfaces/justificacion';

@Injectable({
  providedIn: 'root'
})
export class JustificacionesService {
  url: string=environment.url;
  constructor(private http: HttpClient ) {

   }
  getAll():Observable <Justificacion[]> {
    return this.http.get<Justificacion[]>(`${ this.url }/justificacione`);
  }
  get(id: string):Observable<Justificacion>{
    return this.http.get<Justificacion>(`${ this.url }/justificacione${id}`);
  }
  crear(justificacion:Justificacion):Observable<Justificacion>{
     return this.http.post<Justificacion>(`${ this.url }/justificacione`,justificacion);
  }
  guardar(justificacion:Justificacion):Observable<Justificacion>{
    return this.http.put<Justificacion>(`${ this.url }/justificacione/${ justificacion.id }`,justificacion);
  }
  eliminar(justificacion:Justificacion):Observable<Justificacion>{
    return this.http.delete<Justificacion>(`${ this.url }/justificacione/${ justificacion.id }`);
  }

}
