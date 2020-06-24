const exjest = require('./exjest')

test('ex 1 sum 9', () => {
  expect(exjest.sum(4, 5)).toBe(9);
});

test('ex 1 sum 50', () => {
  expect(exjest.sum(0, 50)).toBe(50);
});

// test('ex 1 testar string error', () => {
//   expect(exjest(4,'5')).toBe(9);
// });
// isso falhou como previsto: mensagem param tem que ser number.

test('ex2 testar array', () => {
  expect(exjest.myIndexOf([1, 2, 3, 4], 3)).toBe(2);
});

test('ex2 testar array com elemento exterior', () => {
  expect(exjest.myIndexOf([1, 2, 3, 4], 5)).toBe(-1);
});

test('ex3 testar que soma dà 0', () => {
  expect(exjest.mySum([1, -2, -3, 4])).toBe(0);
});

test('ex4 testar inegalidade dos elementos de arrays', () => {
  expect(exjest.myRemove([1, 2, 3, 4], 3)).not.toBe([1, 2, 3, 4]);
});

test('ex6 testar buzz', () => {
  expect(exjest.myFizzBuzz(10)).toBe('buzz');
});

test('ex7 const é definida', () => {
  expect(exjest.defined('bla')).not.toBe('undefined');
});

test('ex8 function é definida', () => {
  expect(typeof exjest.thereIs).toBe('function');
});
