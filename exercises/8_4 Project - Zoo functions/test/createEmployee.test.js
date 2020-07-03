const assert = require('assert');
const zoo = require('../src/zoo');

describe('createEmployee', () => {
  it('test', () => {
    let expected;
    const personalInfo = {
      id: '7ed1c9bb-8570-44f6-b718-0666b869573a',
      firstName: 'John',
      lastName: 'Doe',
    };

    const associatedWith = {
      managers: [
        'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
        '9e7d4524-363c-416a-8759-8aa7e50c0992'
      ],
      responsibleFor: [
        '0938aa23-f153-4937-9f88-4858b24d6bce',
        '89be95b3-47e4-4c5b-b687-1fabf2afa274',
        'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5'
      ]
    };

    expected = {
      id: '7ed1c9bb-8570-44f6-b718-0666b869573a',
      firstName: 'John',
      lastName: 'Doe',
      managers: [
        'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
        '9e7d4524-363c-416a-8759-8aa7e50c0992'
      ],
      responsibleFor: [
        '0938aa23-f153-4937-9f88-4858b24d6bce',
        '89be95b3-47e4-4c5b-b687-1fabf2afa274',
        'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5'
      ]
    };

    // cria um novo colaborador a partir de objetos contendo informações pessoais,
    // gerentes e animais gerenciados
    assert.deepEqual(zoo.createEmployee(personalInfo, associatedWith), expected);
  });
});
