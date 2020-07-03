/* eslint-disable max-len*/

const assert = require('assert');
const myCounter = require('../src/myCounter');

/*
  A função myCounter possui dois loops aninhados que inserem valores dentro de um array. Como podemos perceber, eles vão adicionando valores ao array até sua condição de parada. Corrija o código abaixo para que a função retorne o array correto.

  Parâmetros:
  - Nenhum.

  Comportamento:
  myCounter() // Retorna: [0, 2, 3, 1, 2, 3, 2, 2, 3, 3, 2, 3];

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('#myCounter', () => {
  it('guarantees the function behaves as expected', () => {
    const expectedOutput = [0, 2, 3, 1, 2, 3, 2, 2, 3, 3, 2, 3];
    assert.deepEqual(myCounter(), expectedOutput);
  });
});
