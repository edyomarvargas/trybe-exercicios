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