// // Author : Relton Lima
const AUTHOR = "Relton Lima";
// Lista de exercícios - 03.09.2025
// // Entregar até 10.09.2025

// Escreva um programa que mostre os números de 10 até 1 em ordem decrescente
// usando for.
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// Crie um programa que calcule e mostre o quadrado dos números de 1 até 10
// usando for.
for (let i = 1; i <= 10; i++) {
  console.log(`O quadrado de ${i} é ${i * i}`);
}

// Faça um programa que mostre os números de 5 em 5, começando em 0 e indo até
// 50, usando while.
let i = 0;
while (i <= 50) {
  console.log(i);
  i += 5;
}

// Escreva um programa que conte quantos números existem de 100 até 200 e mostre
// o resultado usando while.
let contador = 0;
i = 100;
while (i <= 200) {
  contador++;
  i++;
}
console.log(`Existem ${contador} números entre 100 e 200.`);

// Crie um programa que peça para imprimir a frase "Estudando JavaScript"
// exatamente 7 vezes usando do...while.
let j = 0;
do {
  console.log("Estudando JavaScript");
  j++;
} while (j < 7);

// Crie uma função chamada saudacao que apenas mostre no console a mensagem:
// "Olá, seja bem-vindo ao JavaScript!"
// E depois, chame a função.

function saudacao() {
  console.log("Olá, seja bem-vindo ao JavaScript!");
}
saudacao();

// Crie uma função chamada bomDia que receba um nome como parâmetro e mostre
// no console:
// "Bom dia, [nome]!"
// Chame a função passando o seu nome.

function bomDia(nome) {
  console.log(`Bom dia, ${nome}!`);
}
bomDia(AUTHOR);

// Crie uma função chamada dobro que receba um número como parâmetro e retorne
// o dobro desse número.

function dobro(numero) {
  return numero * 2;
}

// Crie uma função chamada soma que receba dois números como parâmetros e
// retorne a soma deles.
// Depois, mostre o resultado no console.

function soma(a, b) {
  return a + b;
}
console.log(`A soma de 5 e 10 é ${soma(5, 10)}.`);

// Crie uma função chamada ehPar que receba um número e retorne:
// ● true, se for par
// ● false, se for ímpar
// Teste a função chamando-a com diferentes números.

function ehPar(numero) {
  return numero % 2 === 0;
}
console.log(`O número 4 é par? ${ehPar(4)}`);
console.log(`O número 7 é par? ${ehPar(7)}`);
