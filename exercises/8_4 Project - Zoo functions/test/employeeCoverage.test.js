const assert = require('assert');
const zoo = require('../src/zoo');

describe('employeeCoverage', () => {
  it('test', () => {
    let actual, expected;

    // sem parâmetros, retorna uma lista de funcionários e os animais pelos quais
    // eles são responsáveis
    actual = zoo.employeeCoverage();
    expected = {
      'Nigel Nelson': ['lions', 'tigers'],
      'Burl Bethea': ['lions', 'tigers', 'bears', 'penguins'],
      'Ola Orloff': ['otters', 'frogs', 'snakes', 'elephants'],
      'Wilburn Wishart': ['snakes', 'elephants'],
      'Stephanie Strauss': ['giraffes', 'otters'],
      'Sharonda Spry': ['otters', 'frogs'],
      'Ardith Azevado': ['tigers', 'bears'],
      'Emery Elser': ['elephants', 'bears', 'lions']
    };

    assert.deepEqual(actual, expected);

    // com o id de um funcionário, retorna os animais pelos quais o funcionário é
    // responsável
    actual = zoo.employeeCoverage('4b40a139-d4dc-4f09-822d-ec25e819a5ad');
    expected = { 'Sharonda Spry': ['otters', 'frogs'] };
    assert.deepEqual(actual, expected);

    // com o primeiro nome de um funcionário, retorna os animais pelos quais o
    // funcionário é responsável
    actual = zoo.employeeCoverage('Stephanie');
    expected = { 'Stephanie Strauss': ['giraffes', 'otters'] };

    assert.deepEqual(actual, expected);

    // com o último nome de um um funcionário, retorna os animais pelos quais o
    // funcionário é responsável
    actual = zoo.employeeCoverage('Azevado');
    expected = { 'Ardith Azevado': ['tigers', 'bears'] };

    assert.deepEqual(actual, expected);
  });
});
