import { Producto } from "src/app/productos/interfaces/producto";
import { Venta } from "./venta";

export interface DetalleVenta {
  id:         number;
  fecha:      Date;
  ventaId:    number;
  productoId: number;
  producto?:   Producto;
  cantidad:   number;
  valor:      number;
  saldo:      number;
  cierreId:   number;
}
