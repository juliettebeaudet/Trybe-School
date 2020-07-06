// 1. Utilizando o mock, defina o retorno padrão como 10.
// Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.

const random = require('./ex-random-script.js');

test('ver se function foi chamada, o retorno e quantas vezes chamada', () => {
  random.randomNumber = jest
  .fn()
  .mockReturnValue(23);

  random.randomNumber();

  expect(random.randomNumber()).toBe(23);
  expect(random.randomNumber).toHaveBeenCalled();
  expect(random.randomNumber).toHaveBeenCalledTimes(2);
});
