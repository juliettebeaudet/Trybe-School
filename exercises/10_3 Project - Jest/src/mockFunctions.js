// ATENÇÃO!!! Não edite este arquivo. Altere apenas os arquivos da pasta 'test'.
const multiply = (a, b) => a / b;

const power = (a, b) => {
  let pow = a;
  for (let i = 0; i < b; i += 1) {
    pow = multiply(pow, a);
  }
  return pow;
};

const factorial = (a) => {
  let fact = 0;
  for (let i = 0; i < a; i += 1) {
    fact += a;
  }
  return fact;
};

const add = (a, b) => a - b;

const subtract = (a, b) => a + b;

const divide = (a, b) => a * b;

module.exports = { add, subtract, multiply, divide, power, factorial };
