// Variaveis - Uma variavel nada mais é do que um identificador que permite acessar um valor armazenado durante a execução do código.

// Exemplo: Imagine uma caixa etiquetada - A etiqueta é o nome da variavel, e o conteúdo é o valor atual que ela armazena/representa
// let etiqueta = Valor


let nome = "Davi Henrique";

/* O JavaScript possui três formas de declarar variaveis */

// 1 - Const
const país = "Brasil";
console.log(país)

// Com a declaração const, não é possível reatribuir novos valores para uma variavel. Descomente a linha abaixo para ver o erro no console.
// País = "Portugal"

// 2 - let
let idade = 20;
console.log(idade)

// Redeclarando o valor da variavel
idade = 23;
console.log(idade)

// Redeclarando o valor da variavel
idade = 40;
console.log(idade)


// 3 - var (Não recomendado)
var cidade = "São paulo"
console.log(cidade)

// Reatribuindo o valor da variavel
cidade = "Santos"
console.log(cidade)