// 1. A função sum(a, b) retorna a soma do parâmetro a com o b

const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
  return a + b;
}

// Teste se o retorno de sum(4, 5) é 9
assert.equal(9, sum(4,5), 'erradoooo devia ser 9');
// Teste se o retorno de sum(0, 0) é 0
assert.equal(0, sum(0,0), 'nota 0!');
// Teste se a função sum lança um erro quando os parametros são 4 e "5"(string 5)
assert.equal(9, sum(4,'5'), 'tem uma string extra aqui');
// Teste se a mensagem de erro é “parameters must be numbers” quando realizar a chamada sum(4, "5")
// é


