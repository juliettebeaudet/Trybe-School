// 4. Crie um código JavaScript com a seguinte especificação:
// (Não se esqueça de usar template literals)

// Função 1: Escreva uma função que vai receber uma string como parâmetro.
// Sua função deverá procurar pela letra x em uma string qualquer que você determinar
// e substituir pela string que você passou como parâmetro.
// Sua função deve retornar essa nova string.
// Exemplo:
// String determinada: “Tryber x aqui!”
// Parâmetro: “Bebeto”
// Retorno: “Tryber Bebeto aqui!”
// Um array com escopo global, que é o escopo do arquivo JS, nesse caso, contendo cinco strings com suas principais skills.

const function1 = (string) => {
  const definedString = 'Tryber x aqui!';
  const newString = definedString.replace('x', string); //para substituir
  return newString;
};
console.log(function1('BlaBleBliBloBlu'));

// Função 2: Escreva uma função que vai receber a string retornada da Função 1 como parâmetro.
// Essa função deve concatenar as skills do array global à string que foi passada para
// a Função 2 via parâmetro.
// Você deve ordenar os skills em ordem alfabética.
// Sua função deve retornar essa nova string.
// Exemplo:
// “Tryber x aqui!
// Minhas cinco principais habilidades são:
// JavaScript;
// HTML; …
// #goTrybe”.

let arraySkills = ['HTML', 'CSS', 'Javascript', 'Git', 'Softskill']; //sem const porque vai ser reordenado
const function2 = (string) => {
  arraySkills = arraySkills.sort(); //para ordem alfabética
  const stringTwo = `${function1(string)}`; //para pegar retorno da function1
  return `${stringTwo} 
  Minhas cinco principais habilidades são:
    ${arraySkills[0]}
    ${arraySkills[1]}
    ${arraySkills[2]}
    ${arraySkills[3]}
    ${arraySkills[4]} 
  #goTrybe`; //para retornar concatenado, escrito com template literals
};
console.log(function2('')); //ok mas repete a string com os paramêtros das 2 functions 