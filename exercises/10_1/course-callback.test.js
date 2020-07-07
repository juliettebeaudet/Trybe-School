const SumNumbers = (a, b, callback) => {
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 500)
}

test('Testando SumNumbers, soma 5 mais 10', done => {
  SumNumbers(5, 10, (result) => {
    expect(result).toBe(15);
    done();
  });
})

// Mude o valor .toBe(15) para .toBe(10) e verifique. O esperado é o teste identificar o erro.
// Caso isso ocorra, quer dizer que o seu teste está correto;
// caso continue passando e não encontre o erro, provavelmente seu teste está com algum falso-positivo.