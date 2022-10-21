export interface Cliente {
  id:            number;
  documento:     string;
  nombres:       string;
  apellidos:     string;
  celular:       string;
  telefono:      string;
  email:         string;
  cupo:          number;
  saldo:         number;
  observaciones: string;
  nombrecompleto?:string;
}
