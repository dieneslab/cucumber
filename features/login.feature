# language: pt

Funcionalidade: Login no sistema
  Como um usuário autenticado
  Quero acessar o portal
  Para visualizar meu painel

  Cenário: Login com credenciais válidas
    Dado que o usuário acessa a página de login
    Quando ele informa usuário "dienes" e senha "123456"
    Então o sistema deve exibir "Bem-vindo, dienes!"