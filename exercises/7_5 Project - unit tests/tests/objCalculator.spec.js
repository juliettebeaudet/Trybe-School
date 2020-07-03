/* eslint-disable max-len*/

const assert = require('assert');
const calculator = require('../src/objCalculator');

/*
  Desenvolva um objeto calculator que possui quatro chaves:
    - add;
    - mult;
    - div;
    - sub.
  Para cada uma delas atribua uma função que realiza a respectiva operação. A função deve receber dois inteiros e retornar um inteiro. Os resultados das divisões devem sempre ser arredondados para baixo.

  Faça as funções com arrow functions!

  Parâmetros:
  - Um número inteiro;
  - Um número inteiro;

  Comportamento:
  calculator.add(1, 1) // Retorno: 2;
  calculator.div(3, 2) // Retorno: 1;

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('#calculator', () => {
  it('should return the right values', () => {
    assert.strictEqual(calculator.add(1, 3), 4);
    assert.strictEqual(calculator.mult(10, 3), 30);
    assert.strictEqual(calculator.div(5, 2), 2);
    assert.strictEqual(calculator.sub(1, 3), -2);
  });
});
