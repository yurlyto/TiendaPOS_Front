import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Formapago } from '../interfaces/formapago';

@Injectable({
  providedIn: 'root'
})
export class FormapagosService {
  url: string=environment.url;

  constructor(private http: HttpClient )
  { }

  getAll():Observable <Formapago[]> {
    return this.http.get<Formapago[]>(`${ this.url }/formapago`);
  }
  get(id: string):Observable<Formapago>{
    return this.http.get<Formapago>(`${ this.url }/formapago${id}`);
  }
  crear(formapago:Formapago):Observable<Formapago>{
     return this.http.post<Formapago>(`${ this.url }/formapago`,formapago);
  }
  guardar(formapago:Formapago):Observable<Formapago>{
    return this.http.put<Formapago>(`${ this.url }/formapago/${ formapago.id }`,formapago);
  }
  eliminar(formapago:Formapago):Observable<Formapago>{
    return this.http.delete<Formapago>(`${ this.url }/formapago/${ formapago.id }`);
  }

}
