# language: pt

Funcionalidade: Carrinho de compras
  Como um cliente
  Quero gerenciar meus produtos
  Para controlar o que vou comprar

  Contexto:
    Dado que o cliente está logado

  Cenário: Adicionar produto
    Quando adiciona o produto "Notebook Gamer" no carrinho
    Então o carrinho deve conter 1 item

  Cenário: Remover produto
    Dado que o carrinho contém "Notebook Gamer"
    Quando remove o produto do carrinho
    Então o carrinho deve ficar vazio