export abstract class Cliente {

    //definição do modelo de dados (esses são os atributos do Corte)
    private _id: number;
    private _nome: string;
    private _tipo: number;
    private _preco: number;

    // Gerar o metodo construtor
	constructor(id: number, nome: string, tipo: number, preco: number) {
		this._id = id;
		this._nome = nome;
		this._tipo = tipo;
		this._preco = preco;
	}
    
  //Gerar os metodos Getter's e Setter's
	public get id(): number {
		return this._id;
	}

	public get nome(): string {
		return this._nome;
	}

	public get tipo(): number {
		return this._tipo;
	}

	public get preco(): number {
		return this._preco;
	}

	public set id(value: number) {
		this._id = value;
	}


	public set nome(value: string) {
		this._nome = value;
	}


	public set tipo(value: number) {
		this._tipo = value;
	}

	public set preco(value: number) {
		this._preco = value;
	}


    //metodo visualizar
    public visualizar() {
        let tipo: string;

        switch(this._tipo) {
            case 1:
                tipo = "Cabelo"
                break;
            case 2:
                tipo = "Barba"
                break;
            default:
                tipo = "Tipo de Corte Invalida"
        }
        console.log("************************************")
        console.log("\n      Informações do Corte		 \n")
        console.log("************************************\n")
        console.log(`ID do Cliente: ${this._id}`)
        console.log(`Nome do Cliente: ${this._nome}`)
        console.log(`Tipo do Corte: ${tipo}`)
        console.log(`Preco do Corte: ${this._preco}`)
    }


    

}