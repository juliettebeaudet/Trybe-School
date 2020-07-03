const assert = require('assert');
const zoo = require('../src/zoo');
const data = require('../src/data');

describe('addEmployee', () => {
  it('test', () => {
    // adiciona um funcionário no fim da lista
    zoo.addEmployee('39800c14-4b76-454a-858d-2f8d168146a7', 'John', 'Doe');

    assert.equal(data.employees.length, 9);
    let lastEmployee = data.employees[8];
    assert.equal(lastEmployee.id, '39800c14-4b76-454a-858d-2f8d168146a7');
    assert.equal(lastEmployee.firstName, 'John');
    assert.equal(lastEmployee.lastName, 'Doe');
    assert.deepEqual(lastEmployee.managers, []);
    assert.deepEqual(lastEmployee.responsibleFor, []);

    zoo.addEmployee('4141da1c-a6ed-4cf7-90c4-99c657ba4ef3', 'Jane', 'Doe',
      [
        '546fe3d4-2d81-4bb4-83a7-92d5b7048d17',
        'a67a36ee-3765-4c74-8e0f-13f881f6588a',
      ],
      [
        'ee6139bf-b526-4653-9e1e-1ca128d0ad2e',
        '210fcd23-aa7b-4975-91b7-0230ebb27b99',
      ]);

    assert.equal(data.employees.length, 10);
    lastEmployee = data.employees[9];
    assert.equal(lastEmployee.id, '4141da1c-a6ed-4cf7-90c4-99c657ba4ef3');
    assert.equal(lastEmployee.firstName, 'Jane');
    assert.equal(lastEmployee.lastName, 'Doe');
    assert.deepEqual(lastEmployee.managers,
      [
        '546fe3d4-2d81-4bb4-83a7-92d5b7048d17',
        'a67a36ee-3765-4c74-8e0f-13f881f6588a',
      ]);
    assert.deepEqual(lastEmployee.responsibleFor, [
      'ee6139bf-b526-4653-9e1e-1ca128d0ad2e',
      '210fcd23-aa7b-4975-91b7-0230ebb27b99',
    ]);

    assert.equal(data.employees.length, 10);
  });
});
