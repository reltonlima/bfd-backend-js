const { gerarTabuada } = require('./tabuada');

describe('Função gerarTabuada', () => {
  it('deve retornar a tabuada correta para o número 5', () => {
    const esperado = [
      '1 x 5 = 5',
      '2 x 5 = 10',
      '3 x 5 = 15',
      '4 x 5 = 20',
      '5 x 5 = 25',
      '6 x 5 = 30',
      '7 x 5 = 35',
      '8 x 5 = 40',
      '9 x 5 = 45',
      '10 x 5 = 50'
    ];
    expect(gerarTabuada(5)).toEqual(esperado);
  });

  it('deve retornar a tabuada correta para o número 1', () => {
    const esperado = [
      '1 x 1 = 1',
      '2 x 1 = 2',
      '3 x 1 = 3',
      '4 x 1 = 4',
      '5 x 1 = 5',
      '6 x 1 = 6',
      '7 x 1 = 7',
      '8 x 1 = 8',
      '9 x 1 = 9',
      '10 x 1 = 10'
    ];
    expect(gerarTabuada(1)).toEqual(esperado);
  });
});
