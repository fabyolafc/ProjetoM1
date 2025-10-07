export class Tarefa {
  constructor(id, titulo, descricao, usuarioId, status = "pendente") {
    this.id = id;
    this.titulo = titulo;
    this.descricao = descricao;
    this.usuarioId = usuarioId;
    this.status = status; // pendente, em andamento, concluída
  }

  marcarComoConcluida() {
    this.status = "concluída";
  }
}