const API_URL = "https://icanhazdadjoke.com/";
const myObject = {
  method: "GET",
  headers: { Accept: "application/json" },
};
// 1. Criar fetch para pegar API das jokes e posicionar a piada no html com dom.
const fetchJoke = () => {
  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => (jokesPlace.innerHTML = data.joke));
  // Funciona quando comenta as outras functions debaixo.
};
const jokesPlace = document.getElementById("jokeContainer");

// // 2. Construir uma promise passo a passo

function promiseTenRandomNumbers() { 
  return new Promise((resolve, reject) => {
  const basicArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const randomArray = basicArray.map(number => (number = Math.floor(Math.random() * 50) ** 2));
  const randomSum = randomArray.reduce((a, b) => a + b);
  if (randomSum < 8000) resolve(randomSum);
  else reject('É mais de oito mil! Essa promise deve estar quebrada!');
});
};

function divisionArray(sum) {
  return new Promise((resolve, reject) => {
    const arr = [2, 3, 5, 10];
    const total = arr.map(number => sum / number);
    if (total) resolve(total);
    reject('divisionArray, after resolve, returned error')
  })  
};

function finalSum(total) { 
  return new Promise((resolve, reject) => {
    lastSum = total.reduce((a, b) => a + b)
    if (lastSum) resolve(console.log(lastSum)) 
    else reject('finalSum after resolve returned error instead of success scenario')
  });
}

// BONUS Refazer a mesma coisa usando a sintax async wait
async function asyncStyle() {
  try {
    const resolvedStatus = await promiseTenRandomNumbers();
    const successStatus = await divisionArray(resolvedStatus);
    await finalSum(successStatus);
    // ou seja esperar todas as etapas: resolvido, success, e resultado final que é essa soma
  } catch (error) {
    console.log(error);
  }
}

window.onload = () => fetchJoke();
window.onload = () => asyncStyle();
