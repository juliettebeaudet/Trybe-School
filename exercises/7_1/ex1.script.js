// 1. Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N, com a notação N!,
// é o produto de todos os inteiros menores ou iguais a N. Exemplo: 4! = 4 * 3 * 2 * 1 = 24.


//primeiro a function do jeito que sei escrever
function factorialize(n) {
  if (n < 0) {
    return -1;
  }
  else if (n == 0) {
    return 1;
  }
  else {
    return (n * factorialize(n - 1));
  }
}
console.log(factorialize(4));
//aqui considerando que sempre n>1;
//da resultado certo ou seja 24.

//refarotando para function de tipo arrow
const factorializeArrow = n => {

  if (n < 0) {
    return -1;
  }
  else if (n == 0) {
    return 1;
  }
  else {
    return (n * factorialize(n - 1));
  }
}
console.log(factorializeArrow(4));
//retorna certo

// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva .
// Spoiler: É possível resolver com uma linha.

//primeiro com antiga sintax
function factorialize(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  for (var i = n - 1; i >= 1; i -= 1) {
    n *= i;
  }
  return n;
}
console.log(factorialize(5));
//retorna certo

//escrevendo com function de tipo arrow
const factorializeRecursive = n => {
  if (n === 0 || n === 1) {
    return 1;
  }
  for (var i = n - 1; i >= 1; i -= 1) {
    n *= i;
  }
  return n;
}
console.log(factorializeRecursive(5));
//retorna certo

//em uma linha apenas, desconsiderando possibilidade de n<1
const factorializeRecursiveLine = n => { for(var i = n - 1; i >= 1; i -= 1){n *= i;} return n;}
console.log(factorializeRecursiveLine(5));
