<h1 align="center">

<img width="210px" alt="Javascript" src= "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"> 
   </h1>

<div align="center">

# Recursos funcionas em Javascript

</div>

<p align="center">

<img alt="Github" src="https://img.shields.io/badge/Javascript-ecma2018-yellow?logo=javascript&style=plastic">

---
## Índice

- [Introdução](#-Introdução-)
- [Closure](#-Closure-)
- [Currying](#-Currying-)
- [High Order Function](#-High-Order-Function-)
- [Anonymous Function](#-Anonymous-Function-)
- [Como usar](#-Como-usar-)


---
## Introdução 🧾
Trabalho desenvolvido durante a matéria de Paradigmas de Linguagens com o intuito de compreender alguns dos recursos funcionais incorporados por linguagens imperativas, e como elas servem para composição de programas.

---
## Closure 🔒 
Quando uma função lembra seu escopo léxico (onde a função foi definida) mesmo quando a função é executada fora desse escopo. As variáveis definidas fora da função são disponíveis dentro da função, como cada escopo tem acesso ao que está fora dela. Portanto temos um código assincrono, enclausurado e independente.
#### Aplicabilidade
* Uso para request, quando termina, envia uma mensagem..
* Variáveis privadas, só acessada por determinado parâmetro.
* Gerador de eventos (função é ativada a partir de uma condição).

---

## Currying 🍛
Currying reduz a reprodução da função, quebrando em partes. Dessa forma transformamos a função que recebe múltiplos argumentos ou parâmetros, e os acessamos um de cada vez.

#### Aplicabilidade
* Criação de funções específicas.
* Partial application (função é aplicada a somente uma parte dos parâmetros, e retorna outra função que espera os parametros restantes).
---
## High Order Function 👑

Uma função é de ordem superior quando passamos uma função como parâmetro, como se fosse um valor qualquer, ou quando retornamos uma função como resultado.
#### Aplicabilidade
* map.
* filter.
* reduce.
* find.
* forEach.
* sort.

---
## Anonymous Function 🕶
Além de não tem identificação no escopo de execução, as funções anônimas também podem ser atribuídas a variáveis e acessadas através delas. Possuem maior flexibilidade para ser encaixada dentro de outras funções e dão clareza ao código.
#### Aplicabilidade
* map.
* filter.
* sorted.
* groupby.
---

## Como usar 🔧
```bash
# Clone o repositório
git clone https

# Entre no diretório
$ cd paradigmas js

# Instale as dependências
$ npm install

# Execute as funções
$ Closure.js
 #or
$ AnonymousFunction.js
 #or
$ Currying.js
 #or
$ HighOrderFunction.js
```

---
> Feito por Pedro Henrique Vinhas 🪐