// https://github.com/Rocketseat/bootcamp-launchbase-desafios-01/blob/master/01-2-lidando-com-objetos-e-vetores.md

// criar um objeto que armazene os dados da Rocketseat
// imprima em tela a mensagem: A empresa Rocketseat está localizada em Rua Guilherme Gembala, 260

// CONSTRUÇÃO E IMPRESSÃO DE OBJETOS
const bootcamp = {
  nome: 'Rocketseat',
  cor: 'Roxo',
  foco: 'Programação',
  endereço: {
    rua: 'Rua Guilherme Gembala',
    numero: 260
  }
}

console.log(`A empresa ${bootcamp.nome} está localizada em ${bootcamp.endereço.rua}, ${bootcamp.endereço.numero}`)




// criar um array de um programa com nome, idade e tecnologias (podem ser várias)
