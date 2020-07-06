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

test('testar mudando o comportamento da function', () => {
  random.randomNumber = jest
  .fn()
  .mockImplementationOnce((a, b) => a / b);

  // random.randomNumber(12, 4);

  // expect(random.randomNumber).toHaveBeenCalled();
  // expect(random.randomNumber).toHaveBeenCalledTimes(1);
  // expect(random.randomNumber).toHaveBeenCalledWith(12, 4);
  expect(random.randomNumber(12, 4)).toBe(3); // único teste em caso de Once, sem once colocar os outros
});


