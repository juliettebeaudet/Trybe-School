// 2. Crie uma função que receba uma frase e retorne qual a maior palavra.
// Exemplo:
// longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'


// function longestWord(sentence) {
//   let wordsArray = sentence.split(" ");
//   let longWord = "";
//   for (i=0; i<wordsArray.length; i+=1){
//     if (wordsArray[i].length>longWord.length){
//       longWord = wordsArray[i];
//     }
//   }
//   return longWord;
// }

// console.log(longestWord("This is a test, aohflfhaoh"));

//now, same with arrow function 
const longestWord = sentence => {
  let wordsArray = sentence.split(" ");
  let longWord = "";
  for (i=0; i<wordsArray.length; i+=1){
    if (wordsArray[i].length>longWord.length){
      longWord = wordsArray[i];
    }
  }
  return longWord;
}

console.log(longestWord("This is a test, blaaaaaaaaaah"));