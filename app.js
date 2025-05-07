/*
    Questão 1:
    Escreva um programa que solicite ao usuário um número de 1 a 7 e informe o dia 
    correspondente da semana (por exemplo, 1 para segunda-feira, 2 para terça-feira, etc.).


const readline = require('readline-sync');

const diaSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
var dia = Number(readline.question("Informe um numero de 1 a 7:"));

if (dia >= 1 && dia <= 7) {
    switch (dia) {
        case 1:
            console.log("Hoje é " + diaSemana[0]);
            break;
        case 2:
            console.log("Hoje é " + diaSemana[1]);
            break;
        case 3:
            console.log("Hoje é " + diaSemana[2]);
            break;
        case 4:
            console.log("Hoje é " + diaSemana[3]);
            break;
        case 5:
            console.log("Hoje é " + diaSemana[4]);
            break;
        case 6:
            console.log("Hoje é " + diaSemana[5]);
            break;
        case 7:
            console.log("Hoje é " + diaSemana[6]);
            break;
    }

}
*/

/*
    Questão 2:
    Escreva um algoritmo que construa um menu de cadastro com as opções:
    C) Create	(Cadastrar/Inserir)
    R) Read	(Buscar/Ler)
    U) Update	(Editar/Atualizar)
    D) Delete	(Excluir/Apagar)


const readline = require('readline-sync');

var opc = readline.question("Escolha uma dessas opcoes:\nC) Create	(Cadastrar/Inserir)\nR) Read (Buscar/Ler)\nU) Update (Editar/Atualizar)\nD) Delete (Excluir/Apagar)")

switch (opc){
    case 'C':
        console.log("Voce escolheu a opcao de Cadastro/Inserir")
        break;
    case 'R':
        console.log("Voce escolheu a opcao de Buscar/Ler")
        break;
    case 'U':
        console.log("Voce escolheu a opcao de Editar/Atualizar")
        break;
    case 'D':
        console.log("Voce escolheu a opcao de Excluir/Apagar")
        break;

    default:
        console.log("Algo de errado nao esta certo ;-;")
}
*/

/*
    Questão 3:
    Crie uma função vendaHotDogs que recebe n (quantidade de hotdogs). Dependendo da quantidade, o preço unitário varia:
    Quantidade de hotdogs       Preço por unidade (centavos)
    n < 5                       100
    5 ≤ n < 10                  95
    n ≥ 10                      90 


const vendaHotDogs = (qtd_hotdogs) => {
    let preco = 0;

    if (qtd_hotdogs >= 10){
        preco = 0.90;
    }else if (qtd_hotdogs >= 5){
        preco = 0.95;
    }else{
        preco = 1.00;
    }        
    return qtd_hotdogs * preco;
}

// Teste 
console.log(vendaHotDogs(5)) 
*/

/*
    Questão 4:
    Escreva uma função que remova todas as vogais de uma string de entrada.
    Exemplo:
    "This website is for losers LOL!" => "Ths wbst s fr lsrs LL!"


const removeVogais = (str) => {
    //g: O modificador g significa global. 
    // Ele instrui o mecanismo de busca a procurar todas as ocorrências no texto, em vez de parar na primeira correspondência.
    return str.replace(/[aeiouAEIOU]/g, '');
}  

// Teste
console.log(removeVogais("This website is for losers LOL!"))
*/

/*
    Questão 5:

    Faça uma função em que receba três argumentos
    Dois números
    operador aritmético
    A partir desta função retorne o cálculo desejado com os dois números


const calc = (n1, n2, operador) => {
    switch (operador){
        case '+':
            return n1 + n2;
        case '-':
            return n1 - n2;
        case '*':
            return n1 * n2;
        case '/':   
            return n1 / n2;
        default:
            return "Operador inválido";
    }
}
// Teste
console.log(calc(10, 5, '+'))
console.log(calc(10, 5, '-'))
console.log(calc(10, 5, '*'))
console.log(calc(10, 5, '/'))
*/

/*
    Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. 
    No final, mostre uma listagem com todos os nomes informados, na ordem 
    inversa daquela em que eles foram informados.


const readline = require('readline-sync');

var nomes = [];

for (let i = 0; i<7; i++){
    nomes[i] = readline.question("Informe o nome da pessoa: ");
}
console.log("Nomes informados na ordem inversa:");

for (let i = 6; i>=0; i--){
    console.log(nomes[i]);
}
*/

/*
    Questão 7:
    Crie um jogo de JoKenPo (Pedra-Papel-Tesoura)


const readline = require('readline-sync');

const opcoes = ['pedra','papel','tesoura'];

const jokenpo = (opcaoUsuario) => {
    let opcaoPC = Math.floor(Math.random() * 3);
    if (opcaoUsuario === opcaoPC){
        return 'Empate';
    }else if ((opcaoUsuario === 0 && opcaoPC === 2) || // pedra ganha de tesoura
                (opcaoUsuario === 1 && opcaoPC === 0) || // papel ganha de pedra
                (opcaoUsuario === 2 && opcaoPC === 1)){ // tesoura ganha de papel   
                    return `O Pc escolheu ${opcoes[opcaoPC]} e sua escolha foi  ${opcoes[opcaoUsuario]} você venceu!`;
    }else{
        return `O Pc escolheu ${opcoes[opcaoPC]} e sua escolha foi  ${opcoes[opcaoUsuario]} você perdeu!`;
    } 
}

// Teste
var opc = parseInt(readline.question("Escolha uma opcao:\n0) Pedra\n1) Papel\n2) Tesoura\n"), 10);
console.log(jokenpo(opc));
*/
 

/*
    Questão 8:
    Escreva um programa que pergunte a velocidade de um carro. 
    Caso ultrapasse 80 Km, exiba uma mensagem dizendo que o usuário 
    foi multado. Nesse caso, exiba o valor damulta, cobrando R$ 5,00 por 
    cada Km acima da velocidade permitida.


const readline = require('readline-sync');

var velocidade = readline.question("Informe a velocidade do carro: ");

if( velocidade > 80){
    var multa = (velocidade - 80) * 5;
    console.log("Você foi multado em R$ " + multa);
}else{
    console.log("Você não foi multado")
}
*/

/*
    Questão 9:
    Escreva um programa para calcular a redução do tempo de vida de um fumante. 
    Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou. 
    Considere que um fumante perde 10 min de vida a cada cigarro. 
    Calcule quantos dias de vida um fumante perderá e exiba o total em dias.


const readline = require('readline-sync');

var cigarros = readline.question("Informe a quantidade de cigarros fumados por dia: ");
var anos = readline.question("Informe quantos anos ele já fumou: ");


var dias = anos * 365; // 365 dias em um ano

var minutosPerdidos = cigarros * 10 * dias; // 10 minutos por cigarro

var diasPerdidos = minutosPerdidos / (60 * 24); // 60 minutos em uma hora e 24 horas em um dia

console.log(`O fumante perderá ${diasPerdidos} dias de vida.`);
*/

/*
    Questão 10:
    Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. 
    O aluguel de um carro popular custa R$ 90,00 por dia e um carro de luxo 
    custa R$ 150,00. Além disso, o cliente paga por Km percorrido. 
    Faça um programa que leia o tipo de carro alugado (popular ou luxo), 
    quantos dias de aluguel e quantos Km foram percorridos. No final, 
    mostre o preço a ser pago de acordo com os dados a seguir:

    Carros populares
        Até 100 Km percorridos: R$ 0,20 por Km
        Acima de 100 Km percorridos: R$ 0,10 por Km

    Carros de luxo
        Até 200 Km percorridos: R$ 0,30 por Km
        Acima de 200 Km percorridos: R$ 0,25 por Km


const readline = require('readline-sync');

const precoPopular = 90;
const precoLuxo = 150;

const precoKmPopular = 0.20;
const precoKmLuxo = 0.30;

const precoKmLuxoAcima = 0.25;
const precoKmPopularAcima = 0.10;

var preco = 0;

var tipoCarro = readline.question("Informe o tipo de carro (popular ou luxo): ").toLowerCase();
var dias = readline.question("Informe quantos dias de alugul: ");
var km = readline.question("Informe quantos Km foram percorridos: ");

if (tipoCarro === 'popular'){
    preco = precoPopular * dias;

    if (km <= 100){
        preco += km * precoKmPopular;
    }
    else{
        preco += km * precoKmPopularAcima;
    }

}else {

    preco = precoLuxo * dias;

    if (km <= 200){
        preco += km * precoKmLuxo;
    }else{
        preco += km * precoKmLuxoAcima;
    }

}

console.log("O preço a ser pago é: R$ " + preco.toFixed(2));
*/


/*
    BONUS:
    Escreva uma função que receba uma array  de numeros como argumento, a partir dela, retorne : 
    A soma dos numeros
    Os numeros pares dentro da array
    A media dos numeros
    A ordem crescente dos numeros



const readline = require('readline-sync');

const numeros = [];
const tamanho = readline.question("Informe o tamanho do array: ");
for (let i = 0; i < tamanho; i++){
    numeros[i] = Number(readline.question("Informe um numero: "));
}

//Os numeros pares dentro da array
//A media dos numeros
//A ordem crescente dos numeros

const soma = (array) => {
    let soma = 0;
    for (let i = 0; i < array.length; i++){
        soma += array[i];
    }
    return soma;
}

const pares = (array) => {
    let pares = [];
    for (let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            pares.push(array[i]);
        }   
    }
    return pares;
}

const media = (array) => {
    let soma = 0;
    for (let i = 0; i < array.length; i++){
        soma += array[i];
    }
    return soma / array.length;
}

const crescente = (array) => {

        // A função array.sort((a, b) => a - b) é usada para ordenar os elementos de um array em ordem crescente.
        // O método sort() aceita uma função de comparação como argumento.

        // A função de comparação (a, b) => a - b compara dois elementos do array:
            // - Se a - b for negativo, 'a' será colocado antes de 'b'.
            // - Se a - b for positivo, 'b' será colocado antes de 'a'.
            // - Se a - b for zero, a ordem entre 'a' e 'b' permanece inalterada.
        // Isso resulta em uma ordenação numérica crescente.
    
    return array.sort((a, b) => a - b);
}

// Testes
console.log("A soma dos numeros é: " + soma(numeros));
console.log("Os numeros pares dentro da array são: " + pares(numeros));
console.log("A media dos numeros é: " + media(numeros));
console.log("A ordem crescente dos numeros é: " + crescente(numeros));
*/



/*
    Crie uma função que retorne a quantidade de itens de um array
    (não pode usar length)

const readline = require('readline-sync');

const qtd_itens = (array) => {
    let contador = 0;
    for (let i = 0; array[i] !== undefined; i++){
        contador++;
    }
    return contador;
}
// Teste
console.log(qtd_itens([1,4,2,6,8,4]));
*/

/*
    Crie uma função que retorne todos os números pares deste array [1,2,3,4,5,6,7,8,9,10]
    (não pode usar filter)

const readline = require('readline-sync');

const numerosPares = (array) => {
    let pares = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            pares.push(array[i]);
        }
    }
    return pares;
}
// Teste
console.log(numerosPares([1,2,3,4,5,6,7,8,9,10]));
*/

/*
    Crie uma função que transforme frases de snake_case para camelCase
    (não pode usar replace, split, join)

const snakePraCamel = (str) => {
    let resultado = '';
    let letraMaiuscula = false;
    for (let i = 0; i < str.length; i++) {
        // Verifica se o caractere atual é um underscore
        if (str[i] === '_') {
            letraMaiuscula = true;
        } 
        // Se o caractere não for um underscore, adiciona ao resultado
        else if (letraMaiuscula) {
            resultado += str[i].toUpperCase();
            letraMaiuscula = false;
        } 
        // Se não for um underscore adiciona normalmente
        else {
            resultado += str[i];
        }
    }
    return resultado;
}

// Teste
console.log(snakePraCamel('snake_case_para_camel_case'));
*/


/*
    Crie uma função que retorne "true" caso todos os itens de um array obedecerem a uma condição 
    (não pode usar map, every)
*/

/*
    Crie uma função em que verifica a força da senha:
    - Letra Maiuscula
    - numero
    - caractere especial
    - minimo 8 careteres (obrigatorio)


    forte: 4 requisitos
    medio: pelo menos 3 requisitos
    fraca: 2 requisitos
    muito fraca: 1 requisito
    invalida: 0 requisitos

*/

const readline = require('readline-sync');

const senhaForte = (senha) => {
    let maiuscula = false;
    let minuscula = false;
    let numero = false;
    let especial = false;

    // Verifica se a senha tem pelo menos 8 caracteres
    if (senha.length < 8) {
        return "Senha inválida";
    }

    for (let i = 0; i < senha.lenght; i++ ){

        if (senha[i] >= 'A' && senha[i] <= 'Z') maiuscula = true;
  
        else if (senha[i] >= 'a' && senha[i] <= 'z') minuscula = true;
       
        else if (senha[i] >= '0' && senha[i] <= '9') numero = true;
  
        // Verifica se o caractere é especial (!@#$%^&*())
        else if (   
                senha[i] === '!' || 
                senha[i] === '@' || 
                senha[i] === '#' || 
                senha[i] === '$' || 
                senha[i] === '%' || 
                senha[i] === '^' || 
                senha[i] === '&' || 
                senha[i] === '*' || 
                senha[i] === '(' || 
                senha[i] === ')'
            ){
            especial = true;
        }
    }
    let requisitos = 0;
    if (maiuscula)  requisitos++;
    if (minuscula)  requisitos++;
    if (numero)     requisitos++;
    if (especial)   requisitos++;
    
    if (requisitos === 4)  return "Senha forte";
    else if (requisitos >= 3)  return "Senha média";
    else if (requisitos === 2)  return "Senha fraca";
    else  return "Senha muito fraca";
    
}
// Teste    
var senha = readline.question("Informe a senha: ");
console.log(senhaForte(senha));

