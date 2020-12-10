// Non High Order Function
function double(x){
    return x * 2
}

console.log(double(20))

// High Order Function

function createMultiplier(multiplier){
    return function(x){
        return x * multiplier
    }
}

let double2 = createMultiplier(2)
console.log(double2(20))

// createMultiplier é nossa função de ordem superior, pois retorna uma função.

// Example

let colors = ['vermelho','verde','amarelo']

colors.forEach(atributos)

function atributos (colors){
    console.log(" A cor " + colors + " é uma cor bonita." )
}

