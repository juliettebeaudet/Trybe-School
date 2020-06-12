// II - (ex5-9) Reescrevendo funções utilizando TDD
// Agora mudamos um pouco: temos uma função pronta (e feita de forma errada, ou seja,
//   sem funcionar direito), os parâmetros que devem ser passados a ela e a resposta esperada.
//   Escreva testes de modo a entender e testar o comportamento da função e, depois,
//   altere-a para que passe nos testes. 

const greetPeople = (people) => {
  let greeting = [];

  for (i=0; i<people.length; i+=1) {
    greeting.push(`Hello ${people[i]}`);
  }
  return greeting;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa']; 
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
/*
  Use a variável parameter como parâmetro da função acima, escreva testes
  para verificar se a mesma está retornando a como se vê na variável result
  e, caso não esteja, altere o código para que ele passe nos testes.
  Lembre-se: testes pequenos e numerosos! Escreva um por vez e vá corrigindo
  a função aos poucos:
*/
const assert = require('assert');
assert.deepEqual(greetPeople(parameter), result);
//esse primeiro mostrou que function inicial retorna erradamente 'Hello IrinaAshleighElsa'