const assert = require('assert');
const zoo = require('../src/zoo');

describe('animalMap', () => {
  it('test', () => {
    let actual, expected, options;

    // sem parâmetros, retorna animais categorizados por localização
    actual = zoo.animalMap();
    expected = {
      NE: ['lions', 'giraffes'],
      NW: ['tigers', 'bears', 'elephants'],
      SE: ['penguins', 'otters'],
      SW: ['frogs', 'snakes']
    };

    assert.deepEqual(actual, expected);

    // com opções especificadas, retorna nomes de animais
    options = { includeNames: true }
    actual = zoo.animalMap(options);
    expected = {
      NE: [
        { lions: ['Zena', 'Maxwell', 'Faustino', 'Dee'] },
        { giraffes: ['Gracia', 'Antone', 'Vicky', 'Clay', 'Arron', 'Bernard'] }
      ],
      NW: [
        { tigers: ['Shu', 'Esther'] },
        { bears: ['Hiram', 'Edwardo', 'Milan'] },
        { elephants: ['Ilana', 'Orval', 'Bea', 'Jefferson'] }
      ],
      SE: [
        { penguins: ['Joe', 'Tad', 'Keri', 'Nicholas'] },
        { otters: ['Neville', 'Lloyd', 'Mercedes', 'Margherita'] }
      ],
      SW: [
        { frogs: ['Cathey', 'Annice'] },
        { snakes: ['Paulette', 'Bill'] }
      ]
    };

    assert.deepEqual(actual, expected);

    // com opções especificadas, retorna nomes de animais ordenados
    options = { includeNames: true, sorted: true }
    actual = zoo.animalMap(options);
    expected = {
      NE: [
        { lions: ['Dee', 'Faustino', 'Maxwell', 'Zena'] },
        { giraffes: ['Antone', 'Arron', 'Bernard', 'Clay', 'Gracia', 'Vicky'] }
      ],
      NW: [
        { tigers: ['Esther', 'Shu'] },
        { bears: ['Edwardo', 'Hiram', 'Milan'] },
        { elephants: ['Bea', 'Ilana', 'Jefferson', 'Orval'] }
      ],
      SE: [
        { penguins: ['Joe', 'Keri', 'Nicholas', 'Tad'] },
        { otters: ['Lloyd', 'Margherita', 'Mercedes', 'Neville'] }
      ],
      SW: [
        { frogs: ['Annice', 'Cathey'] }, { snakes: ['Bill', 'Paulette'] }
      ]
    };

    assert.deepEqual(actual, expected);

    // com opções especificadas, retorna somente nomes de animais macho/fêmea
    options = { includeNames: true, sex: 'female' }
    actual = zoo.animalMap(options);
    expected = {
      NE: [
        { lions: ['Zena', 'Dee'] },
        { giraffes: ['Gracia', 'Vicky'] }
      ],
      NW: [
        { tigers: ['Shu', 'Esther'] },
        { bears: [] },
        { elephants: ['Ilana', 'Bea'] }
      ],
      SE: [
        { penguins: ['Keri'] },
        { otters: ['Mercedes', 'Margherita'] }
      ],
      SW: [
        { frogs: ['Cathey', 'Annice'] },
        { snakes: ['Paulette'] }
      ]
    };

    assert.deepEqual(actual, expected);

    // só retorna informações específicas de gênero se includeNames for setado
    options = { sex: 'female' }
    actual = zoo.animalMap(options)['NE'][0];
    expected = 'lions';

    assert.equal(actual, expected);
  });
});
