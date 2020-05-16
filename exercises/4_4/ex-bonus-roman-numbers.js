/*(Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!
Dicas:
Uma string é um array de caracteres, então cada elemento do array é uma letra.
O valor de cada numeral romano é:

Copiar
| I   | 1    |
| --- | ---- |
| IV  | 4    |
| V   | 5    |
| IX  | 9    |
| X   | 10   |
| XL  | 40   |
| L   | 50   |
| XC  | 90   |
| C   | 100  |
| CD  | 400  |
| D   | 500  |
| CM  | 900  |
| M   | 1000 |
Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?
Atenção! Quando você tem um número pequeno à direita de um número grande, 
eles devem ser somados. Exemplo: XI = 10 + 1 = 11.
No entanto, se o número pequeno está à esquerda de um número maior que ele,
ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.*/

/*Baby steps
Declarar objeto para associar romanos e arabes.
Criar uma variavel que vai receber o resultado final em arabe (e que serà o return da function).
Percorrer o input cifra romana. Vai precisar de um array de apoio que vai receber cada
cifra arabe (valor do objeto) da chave cifra romana (por exemplo VI dara [5,1]).
Depois, percorrer esse array, cada valor comparado com o proximo.
Quando cada valor associado do n > n+1, puxar para a variavel
a acumulaçao de todos esses valores.
Ao contrario, quando tiver um n < n+1 ele terà que ser substraido. 
*/

let equivalence = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}
function turnRomanintoNumber(roman) {
    let arrayNumbers = []; //testado: funcionou, resulta em [5,1] para "VI")
    let finalNumber = 0;
    for (let i = 0; i < roman.length; i += 1) {
        arrayNumbers.push(equivalence[roman[i]]);
    } //agora temos o array que traduziu de romano para inteiro.
    //agora tem que percorrer e condicionar o output:
    for (let j = 0; j < arrayNumbers.length; j += 1) {
        if (j < arrayNumbers.length - 1) { //pois nao pode passar do penultimo senao j+1 erra)
            if (arrayNumbers[j] >= arrayNumbers[j + 1]) {// tem que ser igual ou superior para nao zerar duplas duplas
                finalNumber += arrayNumbers[j];
            }
            else {
                finalNumber -= arrayNumbers[j];
            }
        }
        else {
            finalNumber += arrayNumbers[j];
        }
    }
    return finalNumber;
}
console.log(turnRomanintoNumber('VI'));
console.log(turnRomanintoNumber('CIX'));
console.log(turnRomanintoNumber('DXIX'));
console.log(turnRomanintoNumber('MMXX'));
