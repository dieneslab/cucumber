
# 🧪 Cucumber Project

Bem-vindo ao repositório do meu projeto utilizando [Cucumber](https://cucumber.io/) em JavaScript (ES Modules)! 🚀

## 📌 Sobre o Projeto

Este projeto foi criado para explorar e demonstrar boas práticas de automação de testes BDD (Behavior Driven Development) com Cucumber. Os testes abrangem cenários escritos em Gherkin, implementados em JavaScript, garantindo a clareza e documentação dos fluxos de testes.

## 🛠️ Tecnologias Utilizadas

* [Cucumber](https://cucumber.io/) - Framework principal de testes BDD
* [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) - Linguagem utilizada
* [Node.js](https://nodejs.org/) - Ambiente de execução
* [ES Modules](https://nodejs.org/api/esm.html) - Módulos modernos do Node.js
* [GitHub Actions](https://github.com/features/actions) - CI/CD para execução automática dos testes

## 📂 Estrutura do Projeto

```sh
📦 cucumber
├── 📂 features       # Arquivos .feature com cenários em Gherkin
│   └── login.feature
├── 📂 steps          # Implementações dos steps (Given, When, Then)
│   └── login.steps.js
├── 📜 package.json   # Dependências e scripts
├── 📜 package-lock.json
```

## 🚀 Como Executar os Testes

### 🔧 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

* [Node.js >= 18](https://nodejs.org/)
* [Git](https://git-scm.com/)

### 📥 Clonar o Repositório

```sh
git clone https://github.com/dieneslab/cucumber.git
cd cucumber
```

### 📦 Instalar dependências

```sh
npm install
```

### ▶️ Executar Testes

No terminal, dentro da pasta do projeto:

```sh
npm test
```

> Certifique-se de que o `package.json` possui o script abaixo:

```json
"scripts": {
  "test": "cucumber-js --import ./steps/**/*.js"
}
```

---

## 📄 Exemplo de Feature

`features/login.feature`:

```gherkin
# language: pt

Funcionalidade: Login no sistema
  Como um usuário autenticado
  Quero acessar o portal
  Para visualizar meu painel

  Cenário: Login com credenciais válidas
    Dado que o usuário acessa a página de login
    Quando ele informa usuário "dienes" e senha "123456"
    Então o sistema deve exibir "Bem-vindo, dienes!"
```

---

## 📄 Exemplo de Steps

`steps/login.steps.js`:

```js
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
```

---

## 🛠 Execução Automática via GitHub Actions

Você pode configurar um workflow no GitHub Actions para rodar os testes automaticamente a cada **push** ou **pull request**. Para visualizar os resultados:

1. Acesse o repositório no GitHub.
2. Clique na aba **"Actions"**.
3. Selecione o workflow mais recente para ver os detalhes da execução.

---

## 🤝 Contribuindo

Fique à vontade para abrir issues, sugerir melhorias ou enviar PRs. Qualquer contribuição é bem-vinda! 😊

## 📄 Licença

Este projeto está sob a licença MIT. Para mais detalhes, consulte o arquivo [LICENSE](LICENSE).

---

Desenvolvido por [Dienes Stein](https://github.com/dieneslab) 💻✨
