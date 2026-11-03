// O do...while é uma estrutura de repetição que nos permite executar um bloco de código pelo menos uma vez antes de verificarmos uma condição.

/* 
    estrutura do laço do...while

    do{
        bloco de código que será executado
    } while (condição)
*/

// Exemplo básico - Contador

// 1 - Inicialização 
let contador = 1;

do {
    console.log(contador);

    // 2 - Atualização
    contador++;
} while (contador <= 5);
// 3 - condição

// Exemplo 2 - Nome
// 1 - Inicialização
let nome;

do {
    // 2 - Atualização
    nome = prompt("Digite o seu nome:")
} while (nome === null || nome.trim() === "");

alert(`Olá, ${nome}`)