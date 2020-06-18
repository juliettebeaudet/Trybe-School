// 2. Crie uma função sum que dado um número variável de elementos
// retorna a soma desses elementos.


const assert = require('assert')

// escreva sum abaixo
const sum = (...num) => num.reduce((a,b) => a+b, 0);
// lembrando que rest é um array e reduce acumula

assert.equal(sum(), 0)
assert.equal(sum(1), 1)
assert.equal(sum(1, 2), 3)
assert.equal(sum(1, 2, 3), 6)
assert.equal(sum(1, 2, 3, 4), 10)
