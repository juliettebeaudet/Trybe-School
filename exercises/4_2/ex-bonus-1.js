/* (depois da leitura do artigo sobre bubble sort,
    Ordene o array numbers em ordem crescente e imprima seus valores;*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 1; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
        if (numbers[i] < numbers[j]) {
            let position = numbers[i]; //precisa desse position como var auxiliar intermediaria
            numbers[i] = numbers[j];
            numbers[j] = position;
        }
    }
}

console.log(numbers);

