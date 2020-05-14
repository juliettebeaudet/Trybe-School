/*3- Agora inverta o lado do triângulo. Por exemplo:
    *
   **
  ***
 ****
*****

/* Desenhando os Baby steps
1) interpretar:
na primeira iteracao, tem que imprimir 4 espaços e 1*
na segunda, 3esp e 2*
terceira 2esp e 3*
quarta 1esp e 4*
quinta 0esp 5*.
*/ 

let triangleStars='';
let n = 5;

for (let i=0; i<n; i+=1) {
    triangleStars += '*';
    console.log(triangleStars);
    }
