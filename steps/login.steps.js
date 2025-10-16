import { Given, When, Then } from '@cucumber/cucumber'

let usuario, senha

Given('que o usuário acessa a página de login', function () {
  console.log('🟢 Usuário acessou a página de login')
})

When('ele informa usuário {string} e senha {string}', function (user, pass) {
  usuario = user
  senha = pass
  console.log(`🟡 Tentando login com ${usuario}/${senha}`)
})

Then('o sistema deve exibir {string}', function (mensagem) {
  if (senha === '123456') {
    console.log(`🟢 ${mensagem}`)
  } else {
    console.log('🔴 Usuário ou senha inválidos')
  }
})