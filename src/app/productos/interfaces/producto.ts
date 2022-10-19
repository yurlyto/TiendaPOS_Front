import { Categoria } from "src/app/categorias/interfaces/categoria";

export interface Producto {
  id:           number;
  descripcion:  string;
  codigoBarras: string;
  precio:       number;
  cantidad:     number;
  utilidad:     number;
  categoriaId:  number;
  categoria?:    Categoria;
  imagen:       string;
}
