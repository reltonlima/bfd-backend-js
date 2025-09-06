
// some todos os numeros usando while
vInput = 100;
let soma = 0, vContador = 1;

while (vContador <= vInput) {
    soma += vContador;
    vContador += 1;
    console.log(`A soma dos números de 1 até ${vInput} é ${soma}`)
}

let myCondictionVar = 10;
do {
    console.log('isso executa antes de testar a condição ' + myCondictionVar)
} while (myCondictionVar > 10);

// For usado quando sabemos o número exato de repetições
// While é melhor quando não sabemos quantas vezes iterar o loop
// doWhile é usado quando precisamos entrar no loop ao menos uma vez mesmo que a condição não seja verdadeira

// usando o for mostre os numeros de 1 a 20
for (let index = 0; index < 20; index++) {
    console.log(`${index+1}`)
}
    

// usando while mostre apenas números pares de 2 a 20
let vCondition = 20, vSoma = 2;
while (vSoma <= vCondition) {
  console.log(`números pares de 2 a 20: ${vSoma}`)
  vSoma += 2;
}
// usando while imprima "Seja bem-vindo" 5 vezes
let condition = 0;
while (condition < 5) {
  console.log("Seja bem-vindo")
  condition++
}
// desafio extra: Crie a tabuada do 9
let vTabuada = 9, vConditionTabuada = 0;
while (vConditionTabuada <= 10) {
  console.log(`${vTabuada} x ${vConditionTabuada} = ${vTabuada * vConditionTabuada}`)
  vConditionTabuada++;
}

function x(){
    let i = 2;
    return ++i // A forma correta de usar o comando return é dentro de uma função.
}

let y = x(); //
let vSt = "x";
// return vSt; // Removido, pois não pode usar return fora de função