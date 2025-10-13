import { Gerenciador } from './controllers/Sistema.js';
import { Tarefa } from './models/Tarefa.js';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const gerenciador = new Gerenciador();
const tarefas = new Tarefa();

function buscarUsuarioTarefa() {
  console.log(`
=== BUSCAR POR ID ===
1. Buscar Usuário por ID
2. Buscar Tarefa por ID
  `);
  rl.question("Escolha uma opção: ", (tipo) => {
    if (tipo === '1') {
      rl.question("Digite o ID do usuário: ", (id) => {
        const usuario = gerenciador.buscarUsuarioId(id);
        if (usuario) {
          console.log(`ID: ${usuario.id} | Nome: ${usuario.nome} | Email: ${usuario.email}`);
        } else {
          console.log("❌ Usuário não encontrado!");
        }
        mostrarMenu();
      })
    } else if (tipo === '2') {
      rl.question("Digite o ID da tarefa: ", (id) => {
        const tarefa = gerenciador.buscarTarefaId(id);
        if(tarefa) {
          console.log(`ID: ${tarefa.id} | Título: ${tarefa.titulo} | Descrição: ${tarefa.descricao} | Usuário ID: ${tarefa.usuarioId}`);
        } else {
          console.log("❌ Tarefa não encontrada!");
        }
        mostrarMenu();
      })
    } else {
      console.log("❌ Opção inválida!");
      mostrarMenu();
    }
  })
}

function mostrarMenu() {
  console.log(`
==========================
   GERENCIADOR DE TAREFAS
==========================
1. Cadastrar usuários
2. Cadastrar tarefas
3. Listar usuários cadastrados
4. Listar tarefas cadastradas
5. Buscar itens usuário e tarefa
6. Marcar tarefa como concluída 
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
          buscarUsuarioTarefa();
        break;

      case '6':
        
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
