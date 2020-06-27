const promiseTenRandomNumbers = new Promise((resolve, reject) => {
  const randomArray = [];
  for (i=0; i<10; i+=1){
    randomArray.push(Math.floor(Math.random() * 50) ** 2);
  };
  const sumOfRandom = randomArray.reduce((a, b) => a + b);
  // para quando a promise for resolvida, ver function divisionArray abaixo
  if (sumOfRandom < 8000) resolve(divisionArray(sumOfRandom));
  // para quando a promise for rejeitada
  else reject ('É mais de oito mil! Essa promise deve estar quebrada!');
  // quando promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.
}).then(function success(){
  return sumOfRandom;
});

const divisionArray = sum => {
    const arr = [2, 3, 5, 10];
    const total = arr.map(number => sum / number);
    return total;
  };
// Pergunta pendente: devia ser uma promise ou pode ser apenas essa function? (Como testar?)

// BONUS Tentar refazer a mesma coisa usando a sintax async wait (mas ainda n sei testar para entender)
// async function asyncStyle () {
//   try {
//   await promiseTenRandomNumbers();
//   await divisionArray(promiseTenRandomNumbers);
//   } catch(error) {
//     console.log(error)
//   }
// }

const API_URL = 'https://icanhazdadjoke.com/';
const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};
// fetch para pegar API das jokes, e treinando de colocar no html com dom.
const jokesPlace = document.getElementById('jokeContainer');
const fetchJoke = () => {
  fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => jokesPlace.innerHTML = data.joke);
};

window.onload = () => fetchJoke();
// window.onload = () => promiseTenRandomNumbers(); ou asyncStyle();