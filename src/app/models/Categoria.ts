export class Categoria{
    id!:string;
    nome!: string;
    descri!: string;
    categora_pai!: number | null;
    is_sub_categoria!:boolean;
    sub_categorias!: Categoria[];
}
