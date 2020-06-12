// 2. A função myIndexOf(arr, item) recebe um array arr, um item e
// retorna o índice do item ou -1 caso o item não pertença ao array arr

const assert = require('assert');

function myIndexOf(arr, item) {
  let searchedIndex = -1;
  for (let i = 0; i < arr.length; i += 1) {
    if (item === arr[i]) {
      searchedIndex = i;
    }
  }
  return searchedIndex;
}
// Teste se a chamada myIndexOf([1, 2, 3, 4], 3) retorna o valor esperado
assert.equal(2, myIndexOf([1, 2, 3, 4], 3), 'erro erro');
// Teste se a chamada myIndexOf([1, 2, 3, 4], 5) retorna o valor esperado
assert.equal(-1, myIndexOf([1, 2, 3, 4], 5), 'errado');
