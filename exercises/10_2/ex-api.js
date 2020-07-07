// 6. Crie uma função que faça requisição para a api dog pictures.

function fetchURL() {
    return fetch('https://dog.ceo/api/breeds/image/random');
  }

  module.exports = { fetchURL };