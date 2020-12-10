<h1 align="center">

<img width="210px" alt="Javascript" src= "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"> 
   </h1>

<div align="center">

# Recursos funcionas em Java Script

</div>

<p align="center">

<img alt="Github" src="https://img.shields.io/badge/Javascript-ecma2018-yellow?logo=javascript&style=plastic">

---
## Índice

* [Introdução](##-Introdução)
* [Closure](##-Closure)
* [Currying](##-Currying)
* [High Order Function](##-HighOrderFunction)
* [Anonymous Function](##-AnonymousFunction)


---
## Introdução 🧾
Trabalho desenvolvido durante a matéria de Paradigmas de Linguagens com o intuito de compreender alguns dos recursos funcionais incorporados por linguagens imperativas, e como elas servem para composição de programas.

---
## Closure 🔒 
Quando uma função lembra seu escopo léxico (onde a função foi definida) mesmo quando a função é executada fora desse escopo. As Variáveis definidas fora da função são disponíveis dentro da função, como cada escopo tem acesso ao que está fora dela.
#### Aplicabilidade
* Uso para request, quando termina, envia uma mensagem.
* Cria um código assincrono, enclausurado e independente.
* It’s just a child function having access to its parents function

---

## Currying 🍛
Currying reduz a reprodução da função, quebrando em partes. Dessa forma transformamos a função que recebe múltiplos argumentos ou parâmetros, e os acessamos um de cada vez.

---
## High Order Functions 👑

Uma função é de ordem superior quando passamos uma função como parâmetro, como se fosse um valor qualquer, ou quando retornamos uma função como resultado.
#### Aplicabilidade
* map
* filter

---
## Anonymous Function 🕶
Além de não tem identificação no escopo de execução, as funções anônimas também podem ser atribuídas a variáveis e acessadas através delas. Possuem maior flexibilidade para ser encaixada dentro de outras funções.
#### Aplicabilidade
* Clareza no código
* map
* filter
* sorted
* groupby
---

## Como usar 🔧
```bash
# Clone o repositório
git clone https

# Entre no diretório
$ cd JSparadigma

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
> Feito por Pedro Henrique Vinhas 