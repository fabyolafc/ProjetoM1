import { Gerenciador } from './controllers/Sistema.js';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const gerenciador = new Gerenciador();

function mostrarMenu() {
  console.log(`
==========================
   GERENCIADOR DE TAREFAS
==========================
1. Cadastrar usuários
2. Cadastrar tarefas
3. Listar usuários cadastrados
4. Listar tarefas cadastradas
5. Buscar itens específicos (por nome ou ID) 
6. Alterar estado da tarefa (ex.: marcar como concluída)  
7. Sair
  `);

  rl.question('Escolha uma opção: ', (opcao) => {
    switch (opcao) {
      case '1':
        rl.question('Nome do usuário: ', (nome) => {
          rl.question('Digite o email: ', (email) => {
            try {
              gerenciador.cadastrarUsuario(nome, email);
              console.log('✅ Usuário cadastrado com sucesso!');
            } catch (error) {
              console.log(`❌ Erro ao cadastrar usuário: ${error.message}`);
            }
            mostrarMenu();
          });
        });
        break;

      case '2':
        gerenciador.listarUsuarios();

        rl.question('Digite seu ID de usuário: ', (usuarioId) => {
          rl.question('Título da tarefa: ', (titulo) => {
            rl.question('Descrição da tarefa: ', (descricao) => {
              try {
                gerenciador.cadastrarTarefa(titulo, descricao, usuarioId);
                console.log('✅ Tarefa cadastrada com sucesso!');
              } catch (error) {
                console.log(`❌ Erro ao cadastrar tarefa: ${error.message}`);
              }
              mostrarMenu();
            });
          });
        });
        break;

      case '3':
        gerenciador.listarUsuarios();
        mostrarMenu();
        break;

      case '4':
        gerenciador.listarTarefas();
        mostrarMenu();
        break;

      case '5':
        console.log('🔍 Função de busca ainda será implementada.');
        mostrarMenu();
        break;

      case '6':
        console.log('⚙️ Função de alterar estado ainda será implementada.');
        mostrarMenu();
        break;

      case '7':
        console.log('👋 Volte Sempre!');
        rl.close();
        break;

      default:
        console.log('❌ Opção inválida!');
        mostrarMenu();
    }
  });
}

mostrarMenu();
