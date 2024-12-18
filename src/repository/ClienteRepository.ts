import { Cliente } from "../model/Cliente";

export interface ClienteRepository{

    //Metodos CRUD
    cadastrarCliente(cliente: Cliente): void;
    listarTodosClientes(): void;
    procuraPorId(id: number): void;
    atualizarCliente(cliente: Cliente): void;
    deletar(id: number): void;
    procurarPorNomeCliente(nome: string): void;

}