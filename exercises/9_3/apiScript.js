const API_URL = 'https://icanhazdadjoke.com/';
const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};
// fetch para pegar API das jokes, e inventando de treinar de colocar no html com dom.
const fetchJoke = () => {
  fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => {
    const jokesPlace = document.getElementById('jokeContainer');
    const jokeButton = document.getElementById('jokeButton');
    const tellJoke = () => jokesPlace.innerHTML = data.joke;
    jokeButton.addEventListener('click', tellJoke);
}); // sem efeito
}

window.onload = () => fetchJoke();
window.onload = () => asyncStyle();

const promiseTenRandomNumbers = new Promise((resolve, reject) => {
  const randomArray = [];
  for (i=0; i<10; i+=1){
    randomArray.push(Math.floor(Math.random() * 50) ** 2);
  };
  const sumOfRandom = randomArray.reduce((a, b) => a + b);
  // para quando a promise for resolvida, ver function divisionArray abaixo:
  if (sumOfRandom < 8000) resolve(divisionArray(sumOfRandom));
  // para quando a promise for rejeitada:
  else reject ('É mais de oito mil! Essa promise deve estar quebrada!');
  // quando promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array:
// }).then(finalSum(); ...como escrever aqui? n posso reusar var sumOfRandom (undefined, fora de escopo)
// nem function finalSum criada debaixo para a async.
});

function divisionArray(sum) {
  return new Promise((resolve, reject) => {
    const arr = [2, 3, 5, 10];
    const total = arr.map(number => sum / number);
    if (total) resolve(total);
    reject('divisionArray on resolve returned error')
  });
}
// DEVE ser promise, inicialmente fiz function simples do jeito seguinte:
// const divisionArray = sum => {
//   const arr = [2, 3, 5, 10];
//   const total = arr.map(number => sum / number);
//   return total;
// };

function finalSum(total) { 
  return new Promise((resolve, reject) => {
    lastSum = total.reduce((a, b) => a + b)
    if (lastSum) resolve(console.log(lastSum));
    else reject('finalSum after resolve - then - returned error');
  });
}

// BONUS Refazer a mesma coisa usando a sintax async wait
async function asyncStyle () {
  try {
  const resolved = await promiseTenRandomNumbers()
  const success = await divisionArray(promiseTenRandomNumbers)
  await finalSum(success)
  // ou seja esperar todas as etapas: resolvido, success, e resultado final que é essa soma
  } catch(error) {
    console.log(error)
  }
}
