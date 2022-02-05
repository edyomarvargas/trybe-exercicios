// Item 1

let numero = 10;
let fatorial = 1;

for (let i = numero; i >= 1; i--) {
	fatorial = fatorial * i;
}

console.log(fatorial);


// Item 2

let word = 'tryber';

let reverseWord = word.split('').reverse().join("")

console.log(reverseWord);


// Item 3

let array = ['java', 'javascript', 'python', 'html', 'css'];
let menorPalavra = array[0];
let maiorPalavra = array[0];

for (i = 0; i < array.length; i += 1) {
	if (menorPalavra.length > array[i].length) {
		menorPalavra = array[i];
	}
	else if (maiorPalavra.length < array[i].length) {
		maiorPalavra = array[i];
	} 
}
console.log(menorPalavra, maiorPalavra);


// Item 4

// let limite = 50;
// let naoPrimos = [];

// for (i = 1; i <= limite; i += 1) {
// 	for (j = 2; j <= i - 1; j += 1) {
// 		if (i % j === 0) {
// 			naoPrimos.push(i);
// 		}
// 	}
// }

// let naoPrimosUnicos = naoPrimos.filter(function(este, i) {
// 	return naoPrimos.indexOf(este) === i;
// });

// // console.log(naoPrimosUnicos);

// let primos = [];

// for (i = 2; i <= limite; i += 1) {
// 	primos.push(i);
// }

// // console.log(primos);

// let filtro = [];

// for (i = 0; i <= primos.length; i += 1) {
// 	for (j = 0; j <= naoPrimosUnicos.length; j += 1) {
// 		if (primos[i] === naoPrimosUnicos[j]) {
// 			filtro.push(primos.splice(i, 1));
// 		}
// 	}
// }

// console.log(primos[primos.length - 1]);

// Item 4 (segunda versão)

let limite = 50;
let ehPrimo;
let primos = [];

for (i = 2; i <= limite; i += 1) {
	ehPrimo = true;
	for (j = 2; j < i; j += 1) {
		if (i % j === 0) {
			ehPrimo = false;
		}
	}
	
	if (ehPrimo === true) {
		primos.push(i);
	}
	
}

console.log(primos[primos.length - 1]); 
console.log(primos);