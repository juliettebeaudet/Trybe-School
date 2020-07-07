const testUppercase = require('./ex-string-functions.js');

// 5. Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função.
// Após repetir a implementação, restaure a implementação original
// e crie os testes necessários para validar.

test('spy uppercase, modificar em lowercase, restorar e testar', () => {
  let lowercase = jest
  .spyOn(testUppercase, 'uppercase')
  .mockImplementation(str => str.toLowerCase());

  lowercase('Bla');
  expect(lowercase('Bla')).toBe('bla');

  lowercase.mockRestore();
  
  lowercase = jest.spyOn(testUppercase, 'uppercase');

  lowercase('testando');
  expect(lowercase).toHaveBeenCalled();
  expect(lowercase).toHaveBeenCalledWith('testando');
  expect(lowercase('testando')).toBe('TESTANDO');
  expect(lowercase).toHaveBeenCalledTimes(2);
});