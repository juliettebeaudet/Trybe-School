// 9. Encontre o nome do livro escrito pela pessoa cujo nome registrado
// começa com três iniciais (terminam com um ponto).
// babysteps:
// 1) interpretar: devo retornar apenas esse nome de livro, ou seja 'O Senhor dos Anéis' (J.R.R.)
// 2) botar um const que vai ser atribuido um find/filter para achar o book onde tà o nome de author com três iniciais
// aqui três caminhos: easy é escrever diretamente J.R.R., hard é includes e contador até 3 pontos, ou hard de novo: via regex.
// 3) retornar aquele book .name

const assert = require("assert");

const books = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: {
      name: "George R. R. Martin",
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: {
      name: "Frank Herbert",
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: {
      name: "H. P. Lovecraft",
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const expected_result = "O Senhor dos Anéis";

function authorWith3DotsOnName() {
  // escreva seu código aqui

  // nivel EASY: chamar diretamente o nome do autor que observei no array:
  // const initials = books.find(book => book.author.name == 'J. R. R. Tolkien');
  // return initials.name;
// }

  // nivel MEDIUM: criar e condicionar alguma regra para pegar o nome com três iniciais
  // (podem ser três coisas: split('.') que cria array de 4 elementos / contador dos três pontos / pontos posicionados 1 3 5)
  // const bookWithThreeInitialsName = books.find(book => book.author.name.split('.').length === 4);
  // return bookWithThreeInitialsName.name;
// }

  // nivel HARD: com regex
  const initialsRegex = /^(\w\.\s*){3} .*/;
  // começa com o conjunto qualquer letra/ponto/possivelmente espaço três vezes e continua com qualquer string
  const bookWithThreeInitialsName = books.find(book => (initialsRegex.test(book.author.name)));
  return bookWithThreeInitialsName.name;
}

assert.deepEqual(authorWith3DotsOnName(), expected_result);
