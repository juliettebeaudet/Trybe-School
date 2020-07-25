/* Escreva um programa que defina três números em variáveis no seu começo
e retorne true se uma das três for impar. Caso contrário, ele retorna false.

Bonus: use somente um if.*/

let a = 2;
let b = 7;
let c = 8;

let resposta = (a%2 != 0 || b%2 != 0 || c%2 != 0 ) ? (true) : (false);
console.log(resposta);
