const exjest = require('./exjest')

test('deve ser 9', () => {
  expect(exjest(4, 5)).toBe(9);
});

test('deve ser zero', () => {
  expect(exjest(0, 50)).toBe(50);
});

// test('testar string', () => {
//   expect(exjest(4,'5')).toBe(9);
// });
// isso falhou como previsto, param tem que ser number.