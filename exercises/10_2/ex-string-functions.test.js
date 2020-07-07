const strings = require('./ex-string-functions.js');
jest.mock('./ex-string-functions.js');

// 4. Faça o mock do arquivo.
// Faça uma nova implementação para a primeira função,
// mas agora ela deve retornar a string em caixa baixa.
// Para a segunda função, uma nova implementação deve retornar a última letra de uma string.
// A terceira deve receber três strings e concatená-las.

test('mudando string functions', () => {

strings.uppercase.mockImplementation(str => str.toLowerCase());
strings.uppercase('Bla');

expect(strings.uppercase).toHaveBeenCalled();
expect(strings.uppercase).toHaveBeenCalledTimes(1);
expect(strings.uppercase).toHaveBeenCalledWith('Bla');
expect(strings.uppercase('Bla')).toBe('bla');

// 5. Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função.
// Após repetir a implementação, restaure a implementação original
// e crie os testes necessários para validar.
// strings.uppercase.mockRestore();
// strings.uppercase('testando');
// expect(strings.uppercase).toHaveBeenCalled();
// expect(strings.uppercase).toHaveBeenCalledTimes(1);
// expect(strings.uppercase).toHaveBeenCalledWith('testando');
// expect(strings.uppercase('testando')).toBe('TESTANDO');
// // n funcionou dentro, resolvi fazer um spyOn em outro arquivo


strings.firstLetter.mockImplementation(str => str.split('')[str.length-1]);
strings.firstLetter('blou');

expect(strings.firstLetter).toHaveBeenCalled();
expect(strings.firstLetter).toHaveBeenCalledTimes(1);
expect(strings.firstLetter).toHaveBeenCalledWith('blou');
expect(strings.firstLetter('blou')).toBe('u');

strings.concatenate.mockImplementation((str1, str2, str3) => str1 + str2 + str3);
strings.concatenate('bla', 'blou', 'ble');

expect(strings.concatenate).toHaveBeenCalled();
expect(strings.concatenate).toHaveBeenCalledTimes(1);
expect(strings.concatenate).toHaveBeenCalledWith('bla', 'blou', 'ble');
expect(strings.concatenate('bla', 'blou', 'ble')).toBe('blablouble');

});

