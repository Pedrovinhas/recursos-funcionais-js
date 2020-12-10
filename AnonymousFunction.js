// Normal function

var x = function () {
    console.log("Hello User");
}

// Anony function

var y = function greet () {
    console.log("Hello User");
}

y()

// Exemplo com SetTimeOut: espera um tempo e chama uma função.

const sayHi = function(){
    console.log("Hello User");
}

setTimeout(sayHi, 2000)

// Passando anonimamente

setTimeout(function (){
    console.log("Hello User");
}, 3000);