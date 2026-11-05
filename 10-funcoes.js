// Funções são blocos de códigos criadas para executar uma tarefa específica.

/* 
    estrutura de uma função 

    function nomeDaFuncao (){
        bloco de código será executado
    }
*/

// Exemplo básico de uma função

function darBoasVindas() {
    console.log("Olá, Seja bem vindo!");
}

// Ativando/invocando/chamando a função
darBoasVindas();


// Funções com parametros e argumentos
function fazerSuco(fruta) {
    console.log(`Preparando o suco de ${fruta}...`);
}

fazerSuco("Laranja");
fazerSuco("Banana");
fazerSuco("Maçã");

// Funções com parametros e argumentos
function soma(a, b) {
    let resultado = a + b;
    console.log(resultado);
}

soma(10, 37);
soma(32, 37);
soma(37, 48);
soma(21, 42);

// Casos bizarros
soma("Davi", "Henrique");
soma("Davi", 10);
soma("Davi", null);
soma(10, null);
soma(10, undefined);
soma([10], { undefined });

// Apresentando pessoas
function apresentarPessoa(nome, sobrenome) {
    // O sinal de + pode ser utilizado para concatenar informações
    // concatenar = unir/juntar dados
    console.log("Olá, meu nome é " + nome + " " + sobrenome + " .");
    // console.log(`Olá meu nome é ${nome} ${sobrenome}`);

}

apresentarPessoa("Davi", "Henrique");

// Funções com retorno
console.log("--- Funções com retorno ---");

function multiplicar(a, b) {

    return a * b;
}

multiplicar(2, 5);

const resultado = multiplicar(3, 5);
console.log(resultado);

//Conhecendo funções anônimas
const saudacao = function () {
    console.log("Olá Davi! Bom dia")
}

// Ativando função anônima
// Utilizamos o nome da variavel para referenciar a função e ativala
saudacao()


// Conhecendo as Arrow Functions (Função da seta)

const banana = () => {
    console.log("Amo comer banana!");
}

banana();