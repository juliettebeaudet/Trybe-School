// 5. Escreva a função swap, que dado um array de 3 elementos,
// retorna um novo array com o primeiro e terceiro elementos trocados.
// Detalhe: você precisa fazer essa função gastando 1 linha só:

const assert = require("assert");

const myList = [1, 2, 3];

// escreva swap abaixo
// const swap = (array) => {
//   const [a, b, c] = array;
//   return [c, b, a];
// };
// reduzindo em uma linha:
const swap = ([a, b, c]) => [c, b, a]; //isso nos params da function swap é um array destructuring
const swappedList = swap(myList);

assert.equal(swappedList[0], 3);
assert.equal(swappedList[1], 2);
assert.equal(swappedList[2], 1);
