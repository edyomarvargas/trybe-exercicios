// Item 1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (i = 0; i < numbers.length; i++) {
    // console.log(numbers[i]);
}


// Item 2

let soma = 0;

for (i = 0; i < numbers.length; i++) {
    soma += numbers[i];
}

console.log(soma);


// Item 3

const media = soma / numbers.length;

console.log(media);


// Item 4

if (media > 20) {
    console.log('valor maior que 20');
}
else {
    console.log('valor igual ou menor a 20');
}


// Item 5

let maiorNumero = numbers[0];

for (i = 1; i < numbers.length; i++) {
    if (numbers[i] > maiorNumero) {
        maiorNumero = numbers[i];
    }
}

console.log(maiorNumero);


// Item 6

let impares = 0;

for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 1) {
        impares++;
    }
}

if (impares == 0) {
    console.log('nenhum valor ímpar encontrado');
}
else {
    console.log(impares);
}


// Item 7

let menorNumero = numbers[0];

for (i = 1; i < numbers.length; i++) {
    if (numbers[i] < menorNumero) {
        menorNumero = numbers[i];
    }
}

console.log(menorNumero);


// Item 8

let myArr = [];

for (i = 1; i <= 25; i++) {
    myArr.push(i);
}

console.log(myArr);


// Item 9

for (i = 0; i < myArr.length; i++) {
    console.log(myArr[i] / 2);
}
