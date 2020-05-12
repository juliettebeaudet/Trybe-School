/* Escreva um programa que defina três números em variáveis no seu começo
e retorne true se uma das três for par. Caso contrário, ele retorna false.

Bonus: use somente um if.*/

let a = 3;
let b = 1;
let c = 5;

let answer = (a%2 == 0 || b%2 == 0 || c%2 == 0 ) ? (true) : (false);
console.log(answer);
