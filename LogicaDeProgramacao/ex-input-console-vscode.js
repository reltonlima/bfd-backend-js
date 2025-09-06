// Exemplo de como receber entrada no console do VSCode
// Para rodar esse código, use o comando: node ex-input-console-vscode.js
// Depois informe um número e tecle Enter
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(
  // Esse código é preciso para aceitar entrada pelo console e salvar o
  // valor digitado pelo usuário em uma variável
  "Informe um numero para ver a tabuada: ",
  (vNumeroInformado) => {
    console.log(`\n***************`);
    readline.close(); // Fecha a interface
     for (let i = 1; i <= 10; i++) {
      console.log(`${i} x ${vNumeroInformado} = ${vNumeroInformado * i}`);
    }
    console.log(`\n***************`);
  }
);
// Você deve ter o vscode e o node.js instalados para executar este código.
// Algoritmo: entrada // processamento // saída
// entrada: numero informado pelo usuario
// processamento: calcular a tabuada
// saída: imprimir a tabuada