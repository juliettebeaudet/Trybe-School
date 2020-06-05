// 1. Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N, com a notação N!,
// é o produto de todos os inteiros menores ou iguais a N. Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva .
// Spoiler: É possível resolver com uma linha.

let factorized = 0;
function factorize(n) {
for (let i = 0; i <= n; i += 1) {
    }
    factorized = n*i;
    return factorized;
  }

  console.log(factorize(5));