export async function buscarTodosCadastros() {
  const res = await fetch('https://QueimaBacon.anaflviaflvia3.repl.co')
  return res.json()
}

export async function buscarPorId(id) {
  const res = await fetch('https://QueimaBacon.anaflviaflvia3.repl.co' + id);
  return res.json()
}
export async function cadastrarusuario() {
    const res = await fetch('https://QueimaBacon.anaflviaflvia3.repl.co')
    return res.json()
}

export async function salvarUsuario(usuario) {
  const res = await fetch('https://QueimaBacon.anaflviaflvia3.repl.co', {
    method: 'POST',
    data: JSON.stringify({
      nome: 'Joao',
      idade: 789,
    }),
  });


  return res.json();
}

  async function cadastraa(){
    fetch('https://QueimaBacon.anaflviaflvia3.repl.co/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    })
  }