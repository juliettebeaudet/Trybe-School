// 9. Utilize assert.ok() para testar uma condição

const assert = require('assert');

function change(param) {
  return !param;
}

//ou seja testar que a function retorna bem o contrario do param inicialmente passado
assert.ok(change(true) === false);