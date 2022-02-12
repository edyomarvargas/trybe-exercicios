// Exercícios bônus do dia 4.2

// Item 1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let swap;

// for (i = 0; i < numbers.length; i += 1) {
//     for (j = 0; j < numbers.length - i; j += 1) {
//         if (numbers[j] > numbers[j + 1]) {
//             swap = numbers[j];
//             numbers[j] = numbers[j + 1];
//             numbers[j + 1] = swap;
//         }
//     }
// }
// console.log(numbers);

// Item 2

// for (i = 0; i < numbers.length; i += 1) {
//     for (j = 0; j < numbers.length - i; j += 1) {
//         if (numbers[j] < numbers[j + 1]) {
//             swap = numbers[j];
//             numbers[j] = numbers[j + 1];
//             numbers[j + 1] = swap;
//         }
//     }
// }
// console.log(numbers);

// Item 3

let newNumbers = [];


for (i = 0; i < numbers.length; i += 1) {
    if (numbers[i + 1] !== undefined) {
        newNumbers.push(numbers[i] * numbers[i + 1]);
    }
    else {
        newNumbers.push(numbers[i] * 2);
    }
}

console.log(newNumbers);

