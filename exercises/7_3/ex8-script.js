// 8. Teste se uma função foi definida

const assert = require('assert');

function thereIs() {}

assert.ok(typeof(thereIs) === 'function');