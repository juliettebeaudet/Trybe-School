function getChange(payable, paid) {
  const coins = [200, 100, 50, 20, 10, 5, 2, 1];
  const change = [];
  const { length } = coins;
  let remaining = paid - payable;

  // escreva seu código aqui...
  if (remaining < 0) {
    throw new Error('paid value is not enough'); //jeito de chamar error mais preciso que alert
  }
  else if (remaining >= 0) {
    for (i = 0; i < coins.length; i += 1) {
      if (coins[i] <= remaining) { //enquanto o coin for menor ou igual que o resto a ser dado
        remaining -= coins[i]; //...coin pode ser adicionado para diminuir o resto a ser reembolsado
        change.push(coins[i]); 
      }
    }
    return change; //retornando array dos coins usados para reembolso
  }
}
  // os testes unitários já estão prontos, e sua implementação deve passar por todos eles.
  const assert = require('assert');

  let result = getChange(1, 1); // no change/coins just an empty array
  let expected = [];
  assert.deepEqual(result, expected);

  result = getChange(215, 300); // expect an array containing [50, 20, 10, 5]
  expected = [50, 20, 10, 5];
  assert.deepEqual(result, expected);

  result = getChange(486, 600); // expect an array containing [100, 10, 2, 2]
  expected = [100, 10, 2, 2];
  assert.deepEqual(result, expected);

  result = getChange(12, 400); // expect an array containing [200, 100, 50, 20, 10, 5, 2, 1]
  expected = [200, 100, 50, 20, 10, 5, 2, 1];
  assert.deepEqual(result, expected);

  assert.throws(() => { getChange(100, 10); }, /^Error: paid value is not enough$/);
