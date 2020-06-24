// Com exceção do exercício 9, refaça todos os exercícios do dia 7.3 , dessa vez utilizando Jest.

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
  return a + b;
}

module.exports = sum