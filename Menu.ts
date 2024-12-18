import readlinesync = require("readline-sync");
import { ClienteController } from "./src/controller/ClienteController";
import { Cabelo } from "./src/model/Cabelo";
import { Barba } from "./src/model/Barba";

export function main() {

    let opcao, id, preco, tipo, tamanhoCabelo: number;
    let nome, estiloCabelo, descricaoBarba : string;
    const tipoCorte = ['Cabelo', 'Barba'];

    //Criando um objeto da classe ClienteController
    const clienteController = new ClienteController();

    
    // Novas instancias da classe Cabelo
    clienteController.cadastrarCliente(new Cabelo(clienteController.gerarId(), "Vinicius", 1, 30,"Corte Americano com degrade", 3));

    // Novas instancias da classe Barba
    clienteController.cadastrarCliente(new Barba(clienteController.gerarId(), "Jose Paulo", 2, 25,"Barba na regua, com direito a toalha quente e barbaterapia"));

    console.log("")
    do {

        console.log("************************************************************")
        console.log("\n                   Barbearia OldSchool Vini             \n")
        console.log("************************************************************")
        console.log("               1 - Cadastro de Cliente                      ")
        console.log("               2 - Listar todos os Clientes                 ")
        console.log("               3 - Consultar Cliente por ID                 ")
        console.log("               4 - Atualizar Cliente                        ")
        console.log("               5 - Deletar Cliente                          ")
        console.log("               0 - Sair                                     ")
        console.log("\n************************************************************\n")
        opcao = readlinesync.questionInt("Digite a opcao desejada: ")

        if (opcao === 0) {
            console.log("\nBarbearia OldSchool Vini - Onde o Tratamento do Cliente vem em primeiro lugar! \n ")
            about();
            process.exit(0)
        }

        switch (opcao) {
            case 1:
                console.log("Digite o ID do CLiente: ")
                id = readlinesync.questionInt('')

                console.log("Digite o Nome do Cliente: ")
                nome = readlinesync.question('')

                console.log("Escolha o Tipo do Corte que irá realizar: ")
                tipo = readlinesync.keyInSelect(tipoCorte, "", { cancel: false }) + 1;

                console.log("Digite o preco do Corte: ")
                preco = readlinesync.questionFloat('');

                switch (tipo) {
                    case 1:
                        console.log("Digite o estilo do Corte que irá realizar: ")
                        estiloCabelo = readlinesync.question('');

                        console.log("Digite o Tamanho da maquininha que irá passar na parte de cima (Se for na tesoura, digitar 10): ")
                        tamanhoCabelo = readlinesync.questionFloat('');
                        clienteController.cadastrarCliente(new Cabelo(clienteController.gerarId(), nome, tipo, preco, estiloCabelo, tamanhoCabelo))
                        break;
                    case 2:
                        console.log("Digite como voce irá querer sua Barba: ")
                        descricaoBarba = readlinesync.question('');
                        clienteController.cadastrarCliente(new Barba(clienteController.gerarId(), nome, tipo, preco, descricaoBarba))
                        break;
                }
                keyPress();
                break;

            case 2:
                console.log("Lista de todos os Clientes: ")
                clienteController.listarTodosClientes();
                keyPress();
                break;

            case 3:
                console.log(`Digite o ID do Cliente:`)
                id = readlinesync.questionInt("")

                clienteController.procuraPorId(id);
                keyPress();
                break;

            case 4:
                id = readlinesync.questionInt("Digite o Id do Cliente: "); 
                let cliente = clienteController.buscarNoArray(id); 
                if (cliente !== null) {
 
                    nome = readlinesync.question("Digite o Nome do Cliente: "); 
                    tipo = cliente.tipo; 
                    preco = readlinesync.questionFloat("Digite o preco do Corte: "); 
                    switch (tipo) {

                        case 1:
                            estiloCabelo = readlinesync.question("Digite o estilo do Corte que irá realizar: ");
                            tamanhoCabelo = readlinesync.questionFloat("Digite o Tamanho da maquininha que irá passar na parte de cima (Se for na tesoura, digitar 10): ");

                            clienteController.atualizarCliente(new Cabelo(id, nome, tipo, preco, estiloCabelo, tamanhoCabelo));
                            break;

                        case 2:
                            descricaoBarba = readlinesync.question("Digite como voce irá querer sua Barba: ");

                            clienteController.atualizarCliente(new Barba(id, nome, tipo, preco, descricaoBarba));
                            break;
                    }
 
                } else
                    console.log("Cliente não Encontrado!")

                keyPress();
                break;

            case 5:
                console.log(`Digite o ID do Cliente:`)
                id = readlinesync.questionInt("")

                clienteController.deletar(id);

                keyPress();
                break;

            default:
                console.log("Opcao invalida!")
        }

    } while (true)

}

function keyPress(): void {
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}


function about() {
    console.log("\nSistema criado pelo desenvolvedor Vinicius Oliveira.\n")
}
main()