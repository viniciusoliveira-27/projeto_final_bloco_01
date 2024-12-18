import { Cliente } from "../model/Cliente";
import { ClienteRepository } from "../repository/ClienteRepository";


export class ClienteController implements ClienteRepository {

    // Coleção Array que vai armazenar os objetos Cliente (simulando o BD)
    private listaClientes = new Array<Cliente>();

    // Controlas os numeros dos produtos
    public id: number = 0;


    cadastrarCliente(cliente: Cliente): void {
        this.listaClientes.push(cliente)
        console.log("O Cliente foi cadastrado com sucesso!")
    }

    listarTodosClientes(): void {
        this.listaClientes.forEach(cliente => cliente.visualizar())
    }

    procuraPorId(id: number): void {
        const buscaCliente = this.buscarNoArray(id);

        if (buscaCliente !== null)
            buscaCliente.visualizar()
        else
            console.log("\nCliente não encontrado!")
    }
    atualizarCliente(cliente: Cliente): void {
        const buscaCliente = this.buscarNoArray(cliente.id);

        if (buscaCliente !== null) {
            this.listaClientes[this.listaClientes.indexOf(buscaCliente)] = cliente;
            console.log("As informacoes do Cliente foi atualizada com sucesso!");
        } else
            console.log("\nCliente não encontrada")
    }
    deletar(id: number): void {
        const buscaCliente = this.buscarNoArray(id);

        if (buscaCliente !== null) {
            this.listaClientes.splice(this.listaClientes.indexOf(buscaCliente), 1);
            console.log("O Cliente foi deletado com sucesso!");
        } else
            console.log("\nCliente não encontrada")
    }



    //metodos auxiliares

    public gerarId(): number {
        return ++this.id;
    }

    public buscarNoArray(id: number): Cliente | null {
        for (let cliente of this.listaClientes) {
            if (cliente.id === id)
                return cliente;
        }

        return null;
    }


}