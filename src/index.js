// importação do modulo readline para interação com o terminal 
const readline = require('readline')

// configuração da interface de leitura do terminal 
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});


function mostrarMenu() {
    console.log(`GERENCIADOR DE TAREFAS
         1. Cadastrar usuários
         2. Cadastrar tarefas
         3. Listar usuários cadastrados
         4. Listar tarefas cadastradas
         5. Buscar itens específicos (por nome ou ID) 
         6. Alterar estado da tarefa (ex.: marcar como concluída)  
         7. Sair`);
}

function iniciarSistema() {
    mostrarMenu();
    rl.question('Escolha uma opção: ', (opcao) => {
        switch(opcao) {
            case '1': cadastrarUsuarios(); break;
            case '2': cadastraanyrTarefas(); break;
            case '3': listarUsuarios(); break;
            case '4': listarTarefas(); break;
            case '5': buscarItensEspecificos(); break;
            case '6': alterarEstadoDaTarefa(); break;
            case '7': console.log('Volte Sempre!'); rl.close(); return;
            default: console.log('Opção inválida!'); 
            iniciarSistema()
        }
    })
}

