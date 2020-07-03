const assert = require('assert');
const zoo = require('../src/zoo');

describe('entryCalculator', () => {
  it('test', () => {
    let actual;

    // returna 0 se nenhum argumento for passado
    actual = zoo.entryCalculator();
    assert.equal(actual, 0);

    // retorna 0 se um objeto vazio for passado
    actual = zoo.entryCalculator({});
    assert.equal(actual, 0);

    // retorna o preço total a ser cobrado dado o número de adultos, crianças e
    // idosos
    const entrants = { 'Adult': 2, 'Child': 3, 'Senior': 1 };
    actual = zoo.entryCalculator(entrants);

    assert.equal(actual, 187.94);
  });
});
