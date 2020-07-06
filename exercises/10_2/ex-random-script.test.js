const random = require('./ex-random-script.js');

// 1. Utilizando o mock, defina o retorno padrão como 10.
// Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.

// test('ver se function foi chamada, o retorno e quantas vezes chamada', () => {
//   random.randomNumber = jest
//   .fn()
//   .mockReturnValue(23);

//   random.randomNumber();

//   expect(random.randomNumber()).toBe(23);
//   expect(random.randomNumber).toHaveBeenCalled();
//   expect(random.randomNumber).toHaveBeenCalledTimes(2);
// });

// 2. Crie uma nova implementação, que deve receber dois parâmetros
// e retornar a divisão do primeiro pelo segundo.
// Essa implementação deve ocorrer uma única vez. Faça os testes necessários.

// test('testar mudando o comportamento da function', () => {
//   random.randomNumber = jest
//   .fn()
//   .mockImplementationOnce((a, b) => a / b);

//   // random.randomNumber(12, 4);

//   // expect(random.randomNumber).toHaveBeenCalled();
//   // expect(random.randomNumber).toHaveBeenCalledTimes(1);
//   // expect(random.randomNumber).toHaveBeenCalledWith(12, 4);
//   expect(random.randomNumber(12, 4)).toBe(3); // único teste em caso de Once, sem once colocar os outros
// });


// 3. Crie uma nova implementação que receba três parâmetros e retorne sua multiplicação.
// Após fazer os devidos testes para ela, resete sua implementação e crie uma nova,
// que receba um parâmetro e retorne seu dobro. Faça os testes necessários.

test('testar outras duas implementacoes', () => {
  random.randomNumber = jest
  .fn()
  .mockImplementation((a, b, c) => a * b * c);

  random.randomNumber(1, 2, 3);

  expect(random.randomNumber).toHaveBeenCalled();
  expect(random.randomNumber).toHaveBeenCalledTimes(1);
  expect(random.randomNumber).toHaveBeenCalledWith(1, 2, 3);
  expect(random.randomNumber(1, 2, 3)).toBe(6);

  random.randomNumber.mockReset();
  
  random.randomNumber = jest
  .fn()
  .mockImplementation((a) => a * 2);

  random.randomNumber(6);
  random.randomNumber(6);

  expect(random.randomNumber).toHaveBeenCalled();
  expect(random.randomNumber).toHaveBeenCalledTimes(2);
  expect(random.randomNumber).toHaveBeenCalledWith(6);
  expect(random.randomNumber(6)).toBe(12);
});





