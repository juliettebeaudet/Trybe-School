/*Agora você irá criar um novo array a partir do array numbers, sem perdê-lo.
Cada valor do novo array deverá ser igual ao valor correspondente do
array anterior multiplicado pelo próximo.
Por exemplo: o primeiro valor do novo array deverá ser 45,
pois é a multiplicação de 5 (valor correspondente) e 9 (próximo valor).
Caso não haja próximo valor, a multiplicação deverá ser feita por 2.
Faça isso utilizando o for e o método push.*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumber = [numbers[0]];

for (let i = 0; i < numbers.length-1; i += 1) { 
    newNumber.push(newNumber[i]*numbers[i+1])
  }
  newNumber.push((newNumber[newNumber.length-1]) * 2);
  newNumber.shift();
console.log(numbers);  
console.log(newNumber);



