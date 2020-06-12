// 11. Faça o teste de uma função que compara dois números e retorna true
// se o primeiro for maior que o segundo e false caso contrário.

const assert = require('assert');

function isAbove(num1, num2) {
  return num1 > num2;
}

assert.equal(isAbove(14, 13), true, 'deve ser true');
assert.equal(isAbove(12, 13), false, 'deve ser false');