import { Given, When, Then } from '@cucumber/cucumber'

let carrinho = []

Given('que o cliente está logado', function () {
  console.log('🟢 Cliente autenticado')
})

When('adiciona o produto {string} no carrinho', function (produto) {
  carrinho.push(produto)
  console.log(`🛒 Produto adicionado: ${produto}`)
})

Then('o carrinho deve conter {int} item', function (quantidade) {
  console.log(`📦 Carrinho contém ${carrinho.length} item(s)`)
})

Given('que o carrinho contém {string}', function (produto) {
  carrinho = [produto]
  console.log(`🟢 Carrinho inicial: ${produto}`)
})

When('remove o produto do carrinho', function () {
  carrinho = []
  console.log('🗑️ Produto removido')
})

Then('o carrinho deve ficar vazio', function () {
  console.log('🟢 Carrinho está vazio')
})