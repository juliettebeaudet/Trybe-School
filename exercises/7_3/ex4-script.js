// 4. A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array
// sem o elemento item caso ele exista no array

const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}


// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
const expected = myRemove([1, 2, 3, 4], 3);
assert.deepEqual(expected, [1, 2, 4], 'n sumiu o 3');
// // Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// assert.deepEqual(expected, [1, 2, 3, 4], 'dar erro aqui é bom');
// Verifique se o array passado por parâmetro não sofreu alterações

// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
const expectedTwo = myRemove([1, 2, 3, 4], 5);
assert.deepEqual(expectedTwo, [1, 2, 3, 4], 'era para nada acontecer pois 5 n é item do array');