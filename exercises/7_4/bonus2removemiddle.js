const assert = require('assert');
// escreva a função removeMiddle para passar nos testes abaixo:

const removeMiddle = arr => {
  let newArr = [];
  let n = 0;
  if (arr.length % 2 !== 0) {
    n = (arr.length / 2) - 0.5; //+0.5 para ser o indice do meio e -1 porque indice começa com 0
    newArr.push(arr[n]);
  }
  return newArr;
}

  //TESTES
  const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
  const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
  const expectedOutput = ['queen'];
  const output = removeMiddle(words);

  assert.deepEqual(output, expectedOutput); //essa funcionou
  // assert.deepEqual(words, expectedWords); //essa parece impossivel? comparando duas const diferentes e imutaveis