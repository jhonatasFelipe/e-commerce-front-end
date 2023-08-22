export class Marca{
    id?: number;
    nome!: string | undefined;

    constructor(id?:number, nome?:string | undefined){
        this.id = id;
        this.nome = nome;
    }
}