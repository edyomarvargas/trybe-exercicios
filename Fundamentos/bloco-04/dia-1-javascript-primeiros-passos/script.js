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