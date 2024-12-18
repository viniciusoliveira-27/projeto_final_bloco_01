import readlinesync = require("readline-sync");

export function main() {

    let opcao: number;
    let nome : string;


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
                keyPress();
                break;

            case 2:
                keyPress();
                break;

            case 3:
                keyPress();
                break;

            case 4:
                keyPress();
                break;

            case 5:
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