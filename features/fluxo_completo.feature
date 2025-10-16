# language: pt

Funcionalidade: Fluxo completo de compra
  Como um cliente registrado
  Quero realizar uma compra do início ao fim
  Para receber meu pedido com sucesso

  Cenário: Compra bem-sucedida do produto "Smartphone X"
    Dado que o cliente faz login com usuário "dienes" e senha "123456"
    E adiciona o produto "Smartphone X" ao carrinho
    E possui saldo suficiente
    Quando finaliza a compra
    Então o sistema deve gerar um pedido com status "Confirmado"
    E enviar e-mail de confirmação para o cliente
    E limpar o carrinho