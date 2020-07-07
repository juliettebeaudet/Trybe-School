const api = require('./ex-api');

// 6. Mocke a requisição e crie dois testes.
// O primeiro deve interpretar que a requisição se resolveu e teve como valor "request sucess".
// O segundo deve interpretar que a requisição falhou e ter como valor "request failed".
// Crie todos os testes que achar necessário.

describe('testando a requisição API dogs', () => {
  const apiDogs = jest.spyOn(api, 'fetchURL');
  afterEach(apiDogs.mockReset);

  test('caso fetchAPI resolveu', async () => {
    apiDogs.mockResolvedValue('request sucess');
    apiDogs();
    expect(apiDogs).toHaveBeenCalled();
    expect(apiDogs()).resolves.toBe('request sucess');
    expect(apiDogs).toHaveBeenCalledTimes(2);
  });

  test("caso fetchAPI for rejeitada", async () => {
    apiDogs.mockRejectedValue('request failed');

    expect(apiDogs()).rejects.toMatch('request failed');
    expect(apiDogs).toHaveBeenCalledTimes(1);
  });
});