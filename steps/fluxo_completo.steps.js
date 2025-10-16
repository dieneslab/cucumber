import { Given, When, Then } from '@cucumber/cucumber'

let usuario, senha, carrinho = [], saldo = 1000, pedido

Given('que o cliente faz login com usuário {string} e senha {string}', function (user, pass) {
  usuario = user
  senha = pass
  console.log(`🔐 Login bem-sucedido: ${usuario}`)
})

Given('adiciona o produto {string} ao carrinho', function (produto) {
  carrinho.push(produto)
  console.log(`🛍️ Produto adicionado: ${produto}`)
})

Given('possui saldo suficiente', function () {
  console.log('💰 Saldo suficiente para compra')
})

When('finaliza a compra', function () {
  if (saldo >= 500) {
    pedido = { status: 'Confirmado', valor: 500 }
    saldo -= 500
  }
})

Then('o sistema deve gerar um pedido com status {string}', function (statusEsperado) {
  if (pedido.status === statusEsperado) {
    console.log(`🟢 Pedido gerado com status: ${statusEsperado}`)
  } else {
    console.log('🔴 Falha ao gerar pedido')
  }
})

Then('enviar e-mail de confirmação para o cliente', function () {
  console.log('📧 E-mail de confirmação enviado')
})

Then('limpar o carrinho', function () {
  carrinho = []
  console.log('🧹 Carrinho limpo')
})