// https://github.com/Rocketseat/bootcamp-launchbase-desafios-01/blob/master/01-4-aplicacao-operacoes-bancarias.md

// Operações bancárias

const user = {
  name: 'Mariana',
  transactions: [],
  balance: 0
}

// Adicionar transações

function createTransaction(transaction) {
  user.transactions.push(transaction)
