// https://github.com/Rocketseat/bootcamp-launchbase-desafios-01/blob/master/01-1-primeiros-passos-com-js.md

// CALCULO DE IMC

const nome = 'Tom'
const peso = 100
const altura = 1.75

const imc = peso / (altura * altura )

if ( imc >= 30 ) {
  console.log(nome + ' você esta acima do peso')
} else if ( imc < 29.9 )  {
  console.log(nome + ' você não está acima do peso')
}


// CÁLCULO DE APOSENTADORIA

const nome = 'Wellington'
const sexo = 'M'
const idade = 60
const contribuicao = 35

const contribuicaoMin = idade + contribuicao

if (sexo === 'M' && contribuicaoMin >= 95 || sexo === 'M' && contribuicao >= 35) {
  if (!(sexo === 'F') && contribuicaoMin >= 85 || contribuicao >= 30) {
    console.log(nome + ', pode se aposentar!')
  }
} else {
  console.log(nome + ', ainda não pode se aposentar')
}