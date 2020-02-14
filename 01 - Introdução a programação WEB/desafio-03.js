// https://github.com/Rocketseat/bootcamp-launchbase-desafios-01/blob/master/01-3-funcoes-e-estruturas-de-repeticao.md

// criar um array que armazena nome e suas tecnologias
// percorrer a lista de usuários com estrutura de repetição

const usuarios = [{
  nome: 'Wellington',
  tecnologias: ['HTML', 'CSS']
},
{
  nome: 'Rebeca',
  tecnologias: ['JavaScript', 'CSS']
},
{
  nome: 'Ester',
  tecnologias: ['HTML', 'Node.js']
}
]


for (let i = 0; i < usuarios.length; i++) {
  console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias.join(" e ")}`);
}

// Busca por tecnologia

function checaSeUsuarioUsaCSS(usuario) {
  for (let tecnologia of usuario.tecnologias) {
    if (tecnologia == 'CSS') {
      return true
    }
  }
  return false
}

for (let i = 0; i < usuarios.length; i++) {
  const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i])

  if (usuarioTrabalhaComCSS) {
    console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
  }
}