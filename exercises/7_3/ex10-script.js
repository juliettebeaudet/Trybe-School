// 10. Compare dois objetos (JSON) para verificar se são idênticos ou não

const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

assert.deepStrictEqual(obj1, obj2); //deve dar certo
assert.deepStrictEqual(obj1, obj3, 'errado pois obj3 é diferente');