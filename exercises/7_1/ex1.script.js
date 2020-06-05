// 1. Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N, com a notação N!,
// é o produto de todos os inteiros menores ou iguais a N. Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

function factorialize(n) {
    return (n * (n - 1));
}
console.log(factorialize(4));
//aqui considerando que sempre n>1;
//da resultado certo ou seja 24.

const factorializeArrow = n => n*(n-1);
console.log(factorializeArrow(4));
//da resultado errado e diferente ou seja 12!!

// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva .
// Spoiler: É possível resolver com uma linha.

function factorialize(n) {
  if (n === 0 || n === 1){
    return 1;}
  for (var i = n - 1; i >= 1; i-=1) {
    n *= i;
  }
  return n;
}
console.log(factorialize(5));

const factorializeRecursive = n => {for (let i = n - 1; i >= 1; i--) {
  n *= i;
}
}
console.log(factorializeRecursive(4));
