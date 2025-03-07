// Exercicio 01 

function manipularString(str) {
    // 1. Converte para maiúsculas
    console.log("Maiúsculas: " + str.toUpperCase());
    
    // 2. Converte para minúsculas
    console.log("Minúsculas: " + str.toLowerCase());
    
    // 3. Inverte a string
    console.log("Invertida: " + str.split('').reverse().join(''));
    
    // 4. Substitui todas as ocorrências de uma letra específica por outra
    let letraAntiga = 'a'; // Exemplo de letra a ser substituída
    let letraNova = 'o';   // Exemplo de letra nova
    console.log("Substituída: " + str.replaceAll(letraAntiga, letraNova));
}

manipularString("Abacaxi");

// Exercicio 02

function operadoresAritmeticosEComparacao(num1, num2) {
    console.log("Soma: " + (num1 + num2));
    console.log("Subtração: " + (num1 - num2));
    console.log("Multiplicação: " + (num1 * num2));
    console.log("Divisão: " + (num1 / num2));
    console.log("O primeiro número é maior que o segundo? " + (num1 > num2));
}

operadoresAritmeticosEComparacao(10, 5);

// Exercicio 03

function verificarIdade(idade) {
    if (idade < 18) {
        console.log("Menor de idade");
    } else if (idade >= 18 && idade < 65) {
        console.log("Maior de idade");
    } else {
        console.log("Idosa");
    }
}

verificarIdade(70);

// Exercicio 04

function imprimirNumeros() {
    for (let i = 1; i <= 100; i++) {
        console.log(i);
    }
}

imprimirNumeros();


// Exercicio 05 

function calcularValores(num) {
    console.log("Dobro: " + (num * 2));
    console.log("Triplo: " + (num * 3));
    console.log("Quadrado: " + (num ** 2));
}

calcularValores(5);


// Exercicio 06

function manipularArray(arr) {
    // 1. Adicionar um número ao final
    arr.push(60);
    console.log("Array após adicionar: " + arr);
    
    // 2. Remover o primeiro número
    arr.shift();
    console.log("Array após remover o primeiro número: " + arr);
    
    // 3. Encontrar o maior número
    console.log("Maior número: " + Math.max(...arr));
    
    // 4. Encontrar o menor número
    console.log("Menor número: " + Math.min(...arr));
}

manipularArray([10, 20, 30, 40, 50]);

// Exercicio 07

function manipularStringsArray(arr) {
    // 1. Converte todas as strings para maiúsculas
    let maiusculas = arr.map(str => str.toUpperCase());
    console.log("Maiúsculas: " + maiusculas);

    // 2. Filtra as strings que começam com 'A'
    let comA = arr.filter(str => str[0].toUpperCase() === 'A');
    console.log("Strings que começam com 'A': " + comA);

    // 3. Cria um novo array com o comprimento de cada string
    let comprimentos = arr.map(str => str.length);
    console.log("Comprimentos das strings: " + comprimentos);
}

manipularStringsArray(["Maçã", "Banana", "Abacaxi", "Laranja"]);


// Exercicio 08

function manipularObjeto(obj) {
    // 1. Adicionar uma nova propriedade ao objeto
    obj.profissao = "Desenvolvedor";
    console.log("Objeto após adicionar profissão: ", obj);
    
    // 2. Remover uma propriedade do objeto
    delete obj.idade;
    console.log("Objeto após remover idade: ", obj);
    
    // 3. Listar todas as propriedades do objeto
    console.log("Propriedades do objeto: ", Object.keys(obj));
}

manipularObjeto({ nome: "Carlos", idade: 28, cidade: "São Paulo" });


// Exercicio 09

    function desestruturarObjeto(livro) {
        // 1. Desestruturar o título e o autor do objeto
        const { titulo, autor } = livro;
        console.log("titulo: " + titulo + ", Autor: " + autor);
    
        // 2. Criar uma função que receba o objeto e retorne uma string com o título e o autor
        function obterInformacoes(livro) {
        return 'O titulo do livro é "${livro.titulo}" e o autor é ${livro.autor}.';
    }
    console.log(obterInformacoes(livro));
}

desestruturarObjeto({ titulo: "O Senhor dos Anéis", autor: "J.R. Tolkien", ano: 1954 });


