import { colors } from "../util/Colors";
import { Cliente } from "./Cliente";

export class Barba extends Cliente{

    private _descricaoBarba: string;



    constructor(id: number, nome: string, tipo: number, preco: number,descricaoBarba: string) {
        super(id, nome, tipo, preco)
        this._descricaoBarba = descricaoBarba;

    }

    public get estiloCabelo(): string {
        return this._descricaoBarba;
    }


    public set estiloCabelo(value: string) {
        this._descricaoBarba = value;
    }

    public visualizar(): void {
        super.visualizar();
        console.log(`Descricao da Barba: ${this._descricaoBarba} ${colors.reset}`)

    }



}