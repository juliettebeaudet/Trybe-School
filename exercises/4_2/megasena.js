let megaSenaNumbers = [];
let firstPlay = [7, 15, 17, 20, 31, 35];
let secondPlay = [1, 2, 3, 4, 5, 6];
let thirdPlay = [60, 59, 58, 57, 56, 55, 54];
let plays = [firstPlay, secondPlay, thirdPlay];
​
for (let i = 0; i < 6; i+=1) {
  megaSenaNumbers[i] = retornaNumeroEntreUmESessenta();
}
​
function retornaNumeroEntreUmESessenta() {
  return Math.ceil(Math.random() * 60);
}
​
let numberOfHits = [0, 0, 0];
for(let j = 0; j < plays.length; j+=1) {
  for (let i = 0; i < megaSenaNumbers.length; i = i + 1) {
    for (let n = 0; n < plays[j].length; n += 1) {
      if (megaSenaNumbers[i] === plays[j][n]) {
        numberOfHits[j] += 1;
      }
    }
  }
}
​
​
​
console.log(megaSenaNumbers);
​
console.log(plays);
​
console.log(numberOfHits);