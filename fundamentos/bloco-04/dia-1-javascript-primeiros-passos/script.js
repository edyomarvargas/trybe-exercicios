// Item 1

const a = 12;
const b = 3;

//Soma
let soma = a + b;

//Subtração
let sub = a - b;

//Multiplicação
let mult = a * b;

//Divisão
let div = a / b;

//Resto
let mod = a % b;


// Item 2

const num1 = 25;
const num2 = 30;

if (num1 > num2) {
    console.log(num1);
}
else if (num1 < num2) {
    console.log(num2);
}
else {
    console.log('números iguais');
}


// Item 3

const x = 15;
const y = 18;
const z = 20;

if (x > y && x > z) {
    console.log(x);
}
else if (y > x && y > z) {
    console.log(y);
}
else if (z > x && z > y) {
    console.log(z);
}
else {
    console.log('existem números iguais');
}


// Item 4

const value = -3;

if (value > 0) {
    console.log('positve');
}
else if (value < 0) {
    console.log('negative');
}
else {
    console.log('zero');
}


// Item 5

const anguloA = 30;
const anguloB = 60;
const anguloC = 90;

if (anguloA <= 0 || anguloB <= 0 || anguloC <= 0) {
    console.log('ângulo inválido');
}
else if (anguloA + anguloB + anguloC == 180) {
    console.log(true);
}
else {
    console.log(false);
}


// Item 6

const pawn = 'moves forward one square at a time';
const bishop = 'moves diagonally as many squares as it likes';
const knight = 'moves in an L-shape';
const rook = 'moves like a + sign, as many squares as it likes';
const queen = 'moves like a bishop and a rook combined';
const king = 'moves only one square in any direction';

let chessPiece = knight;

console.log(chessPiece);

// Item 7

let nota = 85;

if (nota > 100 || nota < 0) {
    nota = 'nota incorreta';
}
else if (nota >= 90) {
    nota = 'A';
}
else if (nota >= 80) {
    nota = 'B';
}
else if (nota >= 70) {
    nota = 'c';
}
else if (nota >= 60) {
    nota = 'D';
}
else if (nota >= 50) {
    nota = 'E';
}
else {
    nota = 'F';
}

console.log(nota);


// Item 8

let firstNum = 12;
let secondNum = 19;
let thirdNum = 21;

if (firstNum % 2 == 0 || secondNum % 2 == 0 || thirdNum % 2 == 0) {
    console.log(true);
}
else {
    console.log(false);
}


// Item 9

let primeiroNum = 15;
let segundoNum = 18;
let terceiroNum = 22;

if (primeiroNum % 2 == 1 || segundoNum % 2 == 1 || terceiroNum % 2 == 1) {
    console.log(true);
}
else {
    console.log(false);
}


// Item 10

const custo = 30;
const precoVenda = 75;

let numeroVendas = 1000;
let custoTotal = custo * 1.2;
let lucro = numeroVendas * (precoVenda - custoTotal); 

if (custo < 0 || precoVenda < 0) {
    console.log('valor de entrada incorreto');
}
else {
    console.log(lucro);
}


// Item 11

let salarioBruto = 4500;
let salarioBase;
let salarioLiquido;
let aliquotaINSS;
let aliquotaIR;
let parcelaIR;

if (salarioBruto <= 1556.94) {
    aliquotaINSS = 0.08;
    salarioBase = salarioBruto - (salarioBruto * aliquotaINSS);
}
else if (salarioBruto <= 2594.92) {
    aliquotaINSS = 0.09;
    salarioBase = salarioBruto - (salarioBruto * aliquotaINSS);
}
else if (salarioBruto <= 5189.82) {
    aliquotaINSS = 0.11;
    salarioBase = salarioBruto - (salarioBruto * aliquotaINSS);
}
else {
    salarioBase = salarioBruto - 570.88;
}

if (salarioBase <= 1903.98) {
    salarioLiquido = salarioBase;
}
else if (salarioBase <= 2826.65) {
    aliquotaIR = 0.075;
    parcelaIR = 142.80;
    salarioLiquido = salarioBase - ((salarioBase * aliquotaIR) - parcelaIR);
}
else if (salarioBase <= 3751.05) {
    aliquotaIR = 0.15;
    parcelaIR = 354.80;
    salarioLiquido = salarioBase - ((salarioBase * aliquotaIR) - parcelaIR);
}
else if (salarioBase <= 4664.68) {
    aliquotaIR = 0.225;
    parcelaIR = 636.13;
    salarioLiquido = salarioBase - ((salarioBase * aliquotaIR) - parcelaIR);
}
else {
    aliquotaIR = 0.275;
    parcelaIR = 869.36;
    salarioLiquido = salarioBase - ((salarioBase * aliquotaIR) - parcelaIR);
}

let pagamentoTrybe;

if (salarioBruto >= 3000) {
    pagamentoTrybe = salarioBruto * 0.17;
}
else {
    pagamentoTrybe = 0;
}

const salarioFinal = salarioLiquido - pagamentoTrybe;

console.log(salarioLiquido);
console.log(salarioFinal);
