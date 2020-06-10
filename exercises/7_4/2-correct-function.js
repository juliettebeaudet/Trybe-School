const assert = require('assert');
// escreva a função wordLengths para passar nos testes abaixo:
function wordLengths(palavras){
let arrayNumbers = [];
for (i=0; i<palavras.length; i+=0){
  arrayNumbers.push(palavras[i]);
}
  return arrayNumbers;
}
//
const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);