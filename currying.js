function func1(valor1, valor2){
    return valor1+valor2;
}

console.log('normal', func1(1,2))


function func2(valor1){
    return function (valor2){
        return valor1+ valor2
    }

}
const func2Valor1 = func2(10)

console.log('curried', func2Valor1(20))
console.log('curried', func2(20)(10))

// Curried function simplificado com arrows

const funcArrow = (valor1) => (valor2) => (valor3)=> {
    return valor1 + valor2 + valor3
}

console.log('simple curried', funcArrow(10)(20)(30))

// A partir da primeira testagem, a função já armazena o resultado e otimiza o tempo de processamento.