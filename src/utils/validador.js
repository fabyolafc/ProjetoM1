export function validarUsuario(nome, email) {
  if (typeof nome !== "string" || nome.trim() === "") {
    throw new Error("❌ O nome do usuário é obrigatório!");
  }

  if (!email || email.trim() === "") {
    throw new Error("❌ O email do usuário é obrigatório!");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // validação simples: tem que conter "@" e "."
  if (!emailRegex.test(email)) {
    throw new Error("❌ O email informado é inválido!");
  }

  return true;
}

export function validarTarefa(titulo, descricao) {
  if (typeof titulo !== 'string' || titulo.trim() === "") {
    throw new Error("❌ O título da tarefa é obrigatório!");
  }

  if (typeof descricao !== "string" && descricao.length > 200) {
    throw new Error("❌ A descrição não pode ter mais de 200 caracteres!");
  }

  return true;
}