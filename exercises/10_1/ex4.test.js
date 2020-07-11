const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name)
    });
}

// 4. Dada a URL 'https://api.github.com/users/tryber/repos', faça um teste que verifique
// que os repositórios 'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator'
// se encontram nessa lista.

test('Ver o que contem o repo', async () => {
  expect.assertions(1);
  const api = await getRepos('https://api.github.com/users/tryber/repos');
  expect(api).toContain('sd-01-week4-5-project-todo-list');
  expect(api).toContain('sd-01-week4-5-project-meme-generator');
});
