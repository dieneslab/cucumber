# language: pt

Funcionalidade: Cadastro de novo usuário
  Como um visitante
  Quero criar uma conta
  Para acessar o sistema

  Cenário: Cadastro bem-sucedido
    Dado que o visitante preencheu todos os campos corretamente
    Quando ele envia o formulário de cadastro
    Então o sistema deve criar a conta e exibir "Conta criada com sucesso"