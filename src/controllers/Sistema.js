import { Usuario } from "../models/Usuario.js";
import { Tarefa } from "../models/Tarefa.js";
import { validarUsuario, validarTarefa } from "../utils/validador.js";

export class Gerenciador {
  constructor() {
    this.usuarios = [];
    this.tarefas = [];
  }

  cadastrarUsuario(nome, email) {
    validarUsuario(nome, email);
    const id = this.usuarios.length + 1;
    const novoUsuario = new Usuario(id, nome, email);
    this.usuarios.push(novoUsuario);
    return novoUsuario;
  }

  cadastrarTarefa(titulo, descricao, usuarioId) {
    validarTarefa(titulo, descricao);
    const usuario = this.usuarios.find(u => u.id === Number(usuarioId));
    if (!usuario) {
      throw new Error("❌ Usuário não encontrado!");
    }
    const id = this.tarefas.length + 1;
    const novaTarefa = new Tarefa(id, titulo, descricao, Number(usuarioId));
    this.tarefas.push(novaTarefa);
    return novaTarefa;
  }

  listarUsuarios() {
    console.log('\n=== Usuários cadastrados ===');
    if (this.usuarios.length === 0) {
      console.log('Nenhum usuário cadastrado.');
    } else {
      this.usuarios.forEach(u => console.log(`ID: ${u.id} | Nome: ${u.nome} | Email: ${u.email}`));
    }
  }

  listarTarefas() {
    console.log('\n=== Tarefas cadastradas ===');
    if (this.tarefas.length === 0) {
      console.log('Nenhuma tarefa cadastrada.');
    } else {
      this.tarefas.forEach(t => console.log(`ID: ${t.id} | Título: ${t.titulo} | Usuário ID: ${t.usuarioId}`));
    }
  }

}
