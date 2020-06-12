// 5. A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array
// sem o elemento item caso ele exista no array

const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
const actual = myRemoveWithoutCopy([1, 2, 3, 4], 3);
assert.deepEqual(actual, [1, 2, 4]);
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
assert.notDeepEqual(actual, [1, 2, 3, 4]);
// Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
const arrayPassado = [1, 2, 3, 4];
assert.deepEqual(myRemoveWithoutCopy(arrayPassado, 3), arrayPassado, 'problem ao chamar arrayPassado e aplicar function nele');
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado
const atual = myRemoveWithoutCopy([1, 2, 3, 4], 5);
assert.deepEqual(atual, [1, 2, 3, 4], 'mensagem erro');