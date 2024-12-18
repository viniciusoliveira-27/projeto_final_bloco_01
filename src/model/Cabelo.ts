import { colors } from "../util/Colors";
import { Cliente } from "./Cliente";


export class Cabelo extends Cliente{

    private _estiloCabelo: string;
    private _tamanhoCabelo: number;



	constructor(id: number, nome: string, tipo: number, preco: number,estiloCabelo: string, tamanhoCabelo: number) {
        super(id, nome, tipo, preco)
		this._estiloCabelo = estiloCabelo;
		this._tamanhoCabelo = tamanhoCabelo;
	}

	public get estiloCabelo(): string {
		return this._estiloCabelo;
	}

	public get tamanhoCabelo(): number {
		return this._tamanhoCabelo;
	}

	public set estiloCabelo(value: string) {
		this._estiloCabelo = value;
	}

	public set tamanhoCabelo(value: number) {
		this._tamanhoCabelo = value;
	}

    public visualizar(): void {
        super.visualizar();
        console.log(`Estilo do Corte de Cabelo: ${this._estiloCabelo}`)
        console.log(`Tamanho do Corte de Cabelo: ${this._tamanhoCabelo} ${colors.reset}`)
    }



}