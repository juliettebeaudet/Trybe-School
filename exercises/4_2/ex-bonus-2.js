/* (depois da leitura do artigo sobre bubble sort,
    Ordene o array numbers em ordem DECRESCENTE e imprima seus valores;*/

    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

    for (let i = 0; i < numbers.length; i++) {//funciona com i=0 e i=1)
        for (let j = 0; j < i; j++) {
            if (numbers[i] > numbers[j]) {
                let position = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = position;
            }
        }
    }
    
    console.log(numbers);
    