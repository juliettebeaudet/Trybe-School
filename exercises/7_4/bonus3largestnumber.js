const getLargestNumber = (array) => {
  let largestNumber;
  for (let i = 0; i <= array.length - 1; i += 1) {
      if (array[i+1] > array[i]) {
          largestNumber = array[i+1];
      }
  }
  return largestNumber;
}

const parameter = [45, 8, 2, 50, 1, 7, 99];
const result = 99;
/*
Use a variável parameter como parâmetro da função acima, escreva testes
para verificar se a mesma está retornando a como se vê na variável result
e, caso não esteja, altere o código para que ele passe nos testes.
Lembre-se: testes pequenos e numerosos! Escreva um por vez e vá corrigindo
a função aos poucos:
*/
const assert = require('assert');
assert.deepEqual(getLargestNumber(parameter), result);
// primeiro teste retorna [ 50 ]
// agora [ 99 ], tirando o problema do 99 n poder ser comparado com nenhum i+1 por ser ultimo
// finalmente transformando em 99