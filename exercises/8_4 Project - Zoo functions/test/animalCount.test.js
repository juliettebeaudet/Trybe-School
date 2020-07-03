const assert = require('assert');
const zoo = require('../src/zoo');

describe('animalCount', () => {
  it('test', () => {
    let actual, expected;

    // sem parâmetros, retorna animais e suas quantidades
    actual = zoo.animalCount();
    expected = {
      'lions': 4,
      'tigers': 2,
      'bears': 3,
      'penguins': 4,
      'otters': 4,
      'frogs': 2,
      'snakes': 2,
      'elephants': 4,
      'giraffes': 6
    };

    assert.deepEqual(actual, expected);

    // com o nome de uma espécie de animal, retorna somente a quantidade
    actual = zoo.animalCount('lions');
    expected = 4;

    assert.deepEqual(actual, expected);

    actual = zoo.animalCount('snakes');
    expected = 2;

    assert.deepEqual(actual, expected);
  });
});
