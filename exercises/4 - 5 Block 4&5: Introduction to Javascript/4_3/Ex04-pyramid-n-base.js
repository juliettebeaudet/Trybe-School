/*
Depois, faça uma pirâmide com n asteriscos de base:
--*--
-***-
*****
Babysteps: for de fora deve executar o numero de linhas.
Fors de dentro devem executar, cada vez, n° de linhas da piramide, e como
cada linha se apresenta em termos de sequência de * e espaços.
*/

let n = 5; //a base
let numberOfLines = (n + 1) / 2; //as linhas
let controlLeft = numberOfLines;
let controlRight = numberOfLines;
let lineInput = "";

for (let i = 0; i < numberOfLines; i+=1) { //esse for executa num de linhas
  for (let lineColumn = 1; lineColumn <= n; lineColumn+=1) {//esse for dentro de for executa o design de cada linha
    if (lineColumn <= controlLeft && lineColumn >= controlRight) {
      lineInput = lineInput + "*";
    } else {
      lineInput = lineInput + " ";
    }
  }
  console.log(lineInput);
  lineInput = "";
//   isso permite nao ter esse resultado:
//   *  
//   *   *** 
//   *   *** *****
  controlRight -= 1; //isso garante os espaços diferentemente distribuidos a cada linha
  controlLeft += 1;
}

