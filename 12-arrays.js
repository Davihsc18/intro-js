// Um array é uma estrutura de dados utilizada para armazenar uma coleção(lista) de valores dentro de uma ÚNICA variavel.

let aluno1 = "Davi";
let aluno2 = "Murilo";
let aluno3 = "Leila";
let aluno4 = "Samuel";
let aluno5 = "Guilherme";
let aluno6 = "Maria";

// Organizando estruturas com arrays
// A estrutura de um array é representada por []
const alunos = ["Davi", "Murilo", "Leila", "Samuel", "Guilherme", "Maria"]

console.log(alunos);

// Acessando informações de um array
console.log("--- Acessando elementos ---");
console.log(alunos[0]);
console.log(alunos[3]);

// Acessando um elemento sem valor definido
console.log(alunos[6]);


// Descobrindo o tamanho de um array
console.log("O tamanho do array é: ", alunos.length);


// Iterando sobre um array
console.log("--- Percorrendo array - For ---");

for (let index = 0; index < alunos.length; index++) {

    const element = alunos[index];
    console.log(element);
}

console.log("--- Percorrendo array - For/of ---");
for (let aluno of alunos) {
    console.log(aluno);

}

console.log("--- Percorrendo array - For/of ---");

alunos.forEach((aluno) => {
    console.log(aluno);
})


// Métodos importantes dos arrays
const frutas = ["Banana", "Maçã", "Pêra", "Manga", "Uva"];

// 1 - Includes(Verifica se um elemento existe)

console.log("--- Includes ---");
console.log(frutas.includes("Banana"));
console.log(frutas.includes("Goiaba"));


// 2 - indexOf(Verifca a posição de um elemento)
console.log("--- indexOf ---");
console.log(frutas.indexOf("Goiaba"));
console.log(frutas.indexOf("Banana"));


// 3 - find(Encontrar um elemento)
// O find() retorna o primeiro elemento que atende a condição especificada.
console.log("--- find ---");
const notas = [4, 5, 7, 8, 10]

const resultado = notas.find((nota) => {
    return nota > 7;
})

console.log(resultado);


// 4 - filter()
// Diferente do find, o filter retorna todos os elementos que atendem uma determinada condição
console.log("--- filter() ---");

// filter com retorno explicito
const aprovados = notas.filter((nota) => {
    return nota >= 7;
})

// filter com retorno implicito
const reprovados = notas.filter(nota => nota < 7);

console.log(aprovados);
console.log(reprovados);

// Mnaipulando arrays
const animais = ["Cachorro", "Pássaro", "Ornintorinco"];

console.log(animais);

console.log("--- push() ---");
// Insere um elemento no final do array
animais.push("Gorila");

console.log("--- unshift() ---");
// Insere um elemento no inicio do array
animais.unshift("Girafa");

console.log("--- pop() ---");
// Remove o último elemento da lista
animais.pop();

console.log("--- shift() ---");
// Remove o primeiro elemento da lista
animais.shift();


// Tipos de dados que um array suporta
const dados = [
    "Davi Henrique",
    18,
    true,
    null,
    undefined,
    { cidade: "SP" },
    [1, 2, 3, ["kkkkkkkk"]],
    function () {
        console.log("Olá");
    }
]

dados[7]();
console.log(dados[1]);
console.log(dados[6][3][0]);

// Exemplo prático
const students = [
    {
        nome: "Davi",
        idade: 18,
        linguagens: ["HTML", "CSS", "JavaScript"],
        ativo: true,
    },
    {
        nome: "Ronaldo",
        idade: 18,
        linguagens: ["Python", "Java"],
        ativo: true
    },
    {
        nome: "Thiago",
        idade: 20,
        linguagens: ["PHP", "JavaScript", "HTML"],
        ativo: false
    }
]
// Para um estudante da lista de estudantes, faça...
for (let student of students) {
    console.log("--- Aluno ---");
    console.log(student.nome);
    console.log(student.idade);
    console.log(student.linguagens);
    console.log(student.ativo);
}
