import { Cliente } from "src/app/clientes/interfaces/cliente";
import { Formapago } from "src/app/formapagos/interfaces/formapago";
import { DetalleVenta } from "./detalle-venta";

export interface Venta {
  id:          number;
  fecha:       Date;
  clienteId:   number;
  cliente?:     Cliente;
  formapagoId: number;
  formaPago?:   Formapago;
  detallesVentas: DetalleVenta[]
}

