import { Given, When, Then } from '@cucumber/cucumber'

let camposPreenchidos = false

Given('que o visitante preencheu todos os campos corretamente', function () {
  camposPreenchidos = true
  console.log('🟢 Campos preenchidos')
})

When('ele envia o formulário de cadastro', function () {
  console.log('🟡 Formulário enviado')
})

Then('o sistema deve criar a conta e exibir {string}', function (mensagem) {
  if (camposPreenchidos) {
    console.log(`🟢 ${mensagem}`)
  } else {
    console.log('🔴 Erro: campos obrigatórios não preenchidos')
  }
})