
export function validarUsuario(nome, email) {
  if (!nome || nome.trim() === "") {
    throw new Error("❌ O nome do usuário é obrigatório!");
  }

  if (!email || email.trim() === "") {
    throw new Error("❌ O email do usuário é obrigatório!");
  }

  // validação simples: tem que conter "@" e "."
  if (!email.includes("@") || !email.includes(".")) {
    throw new Error("❌ O email informado é inválido!");
  }

  return true;
}

export function validarTarefa(titulo, descricao) {
  if (!titulo || titulo.trim() === "") {
    throw new Error("❌ O título da tarefa é obrigatório!");
  }

  if (descricao && descricao.length > 200) {
    throw new Error("❌ A descrição não pode ter mais de 200 caracteres!");
  }

  return true;
}