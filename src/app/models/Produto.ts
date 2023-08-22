import Caracteristica from "./Caracteristica";
import { Categoria } from "./Categoria";
import { Marca } from "./Marca";
import ProductImageFile from "./ProductImageFile";

class Produto {
    id?:number | null;
    nome!:string | null;
    preco!:number | null;
    descri!: string | null;
    ativo!: boolean | null;
    qtd?: number | null;
    codigo_de_barras!: string | null;
    marca!: Marca | undefined;
    valor!: number | null;
    caracteristicas?: Caracteristica[] | null;
    categorias?: Categoria[] | null;
    imagens?: ProductImageFile[] | null;
}
export default Produto;
   