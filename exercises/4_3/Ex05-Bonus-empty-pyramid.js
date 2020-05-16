//Faça uma pirâmide com n asteriscos de base que seja vazia no meio. 
//Assuma que o valor de n será sempre ímpar:
// Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
// n = 7
//    *
//   * *
//  *   *
// *******

let n = 7;
let numberOfLines = (n + 1) / 2;
let controlLeft = numberOfLines;
let controlRight = numberOfLines;
let lineInput = "";

for (let i = 0; i < numberOfLines; i+=1) { //for de fora para num de linhas
  for (let lineColumn = 1; lineColumn <= n; lineColumn+=1) { // for de dentro para o design de cada linha
    if (i === (numberOfLines - 1)) {
      lineInput = lineInput + "*"; //para ter base da piramide
    } else if (lineColumn === controlLeft || lineColumn === controlRight) {
      lineInput = lineInput + "*"; //para ter toda estrutura vazia
    } else {
      lineInput = lineInput + " ";
    }
  }
  console.log(lineInput);
  lineInput = "";
  controlRight -= 1;
  controlLeft += 1; 
}