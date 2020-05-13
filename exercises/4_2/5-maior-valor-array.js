/* Utilizando for, descubra qual o maior valor contido no array e imprima-o; */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNum = numbers[0];

for (i=0; i<numbers.length; i++) {
    if(numbers[i] > maiorNum){
            maiorNum = numbers[i];
         }
}

console.log(maiorNum);