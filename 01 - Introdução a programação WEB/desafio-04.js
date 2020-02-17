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


  if (transaction.type == 'credit') {
    user.balance = user.balance + transaction.value
  } else {
    user.balance = user.balance - transaction.value
  }
}

createTransaction({
  type: 'credit',
  value: 50
})
createTransaction({
  type: 'credit',
  value: 120
})
createTransaction({
  type: 'debit',
  value: 80
})
createTransaction({
  type: 'debit',
  value: 30
})

// Relatórios
function getHigherTransactionByType(type) {

  let higherTransaction
  let higherValue = 0

  for (let transaction of user.transactions) {
    if (type == transaction.type && higherValue < transaction.value) {
      higherValue = transaction.value
      higherTransaction = transaction
    }
  }
  return higherTransaction
}

function getAverageTransactionValue() {

  let sum = 0

  for (let transaction of user.transactions) {
    sum += transaction.value
  }

  return sum / user.transactions.length
}

function getTransactionsCount() {
  let count = {
    Credit: 0,
    Debit: 0
  }
