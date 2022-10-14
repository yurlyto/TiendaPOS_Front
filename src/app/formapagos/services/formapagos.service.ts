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

}
