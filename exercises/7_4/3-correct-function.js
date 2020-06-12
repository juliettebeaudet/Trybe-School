const assert = require('assert');
// escreva a função addAllnumbers para passar nos testes abaixo:
const addAllnumbers = (num) => {
  let finalNum = 0;
  for (i=0; i<num.length; i+=1){
    finalNum += num[i];
  }
  return finalNum;
}
//
const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);