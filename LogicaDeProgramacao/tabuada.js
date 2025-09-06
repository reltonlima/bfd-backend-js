// Função para gerar tabuada (para facilitar o teste)
function gerarTabuada(numero) {
  const resultado = [];
  for (let i = 1; i <= 10; i++) {
    resultado.push(`${i} x ${numero} = ${i * numero}`);
  }
  return resultado;
}

module.exports = { gerarTabuada };
