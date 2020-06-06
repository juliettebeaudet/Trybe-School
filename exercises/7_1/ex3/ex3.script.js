// 3. Crie uma página que contenha:
// Um botão ao qual será associado um event listener;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme
// a variável clickCount é atualizada.

        const clickedButton = document.getElementById("button-clicked");
        let clickCount = 0;
        let camp = document.getElementById("num-clicks");

        function countingClicks() {
        clickCount += 1;
        camp.innerHTML = clickCount;
        }

        clickedButton.addEventListener("click", countingClicks);