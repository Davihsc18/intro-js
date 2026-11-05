// Os objetos são uma estrutura de dados que nos permitem armazenar várias informações relacionadas dentro de uma ÚNICA variavel

/*
    estrutura de um objeto

    const objeto = {
        key: value,
        chave: valor,
        propriedade: valor,
        outraPropriedade: outroValor
    }
*/

//Exemplo: Criando informações de um aluno
let nome = "Davi";
let idade = 17;
let curso = "JavaScript";
let email = "davihsc18@gmail.com";
let matriculado = true;

// Organizando estrutura com objetos
const aluno = {
    nome: "Davi",
    idade: 17,
    curso: "JavaScript",
    email: "davihsc18@gmail.com",
    matriculado: true
}

// Exibindo o objeto completo
console.log("--- OBJETO COMPLETO ---");
console.log(aluno);

// Acessando informações especificas
// com o ponto final . (dot notation)
console.log("--- ACESSANDO COM . ---");
console.log(aluno.nome);
console.log(aluno.email);

// com o colchet [] - (bractket notation)
console.log("--- ACESSANDO COM [] ---");
console.log(aluno["curso"]);
console.log(aluno["idade"]);

// Altera informações de um objeto
console.log("--- ALTERANDO PROPRIEDADES ---");
aluno.curso = "React";
console.log(aluno)

// Adicionando propriedades ao objeto
aluno.nota = 9.5;
console.log(aluno);

// Removendo propriedades do objeto
console.log("--- ADICIONANDO PROPRIEDADES ---");
delete aluno.nota

console.log(aluno);

// Objetos aninhados (Objeto dentro de objeto)
console.log("--- Objetos aninhados ---");

const pessoa = {
    nome: "Alex",
    sobrenome: "Carrão",
    idade: 18,

    endereco: {
        bairro: "Carrão",
        estado: "SP",
        cidade: "São Paulo",
        cep: "01000-000",
        numero: 67,
        rua: "Logo ali"
    }
}
//
console.log(pessoa.endereco.cep);

// Objetos com funções(métodos)
const cachorro = {
    // Propriedade
    nome: "Renato",
    idade: 3,
    raca: "Husky Siberiano",

    // Método
    latir: function () {
        console.log("Au au");
    }
}

cachorro.latir()