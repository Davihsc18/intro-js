// O while é uma estrutura de repetição, e ele premite executar um bloco de código enquanto uma determinada condição for verdadeira.

/* 
    estrutura de um while

    while(condição){
        bloco de código que será executado enquanto a condição for verdadeira 
    }

    exemplo de laço infinito

    let numero = 1;
    while(numero < 3){
        console.log(nunmero);
    }
*/

// Inicialização
let contador = 1;

// condição
while (contador <= 5) {
    console.log(contador);

    // Atualização
    contador++;
}


// exemplo de senha de acesso
// 1 - Inicialização (Criando senha de acesso)
let senha = "";

// 2 - Condição
while (senha !== "1234") {
    // 3 - Atualização
    senha = prompt("Digite sua senha")
}

alert("Acesso permitido!");