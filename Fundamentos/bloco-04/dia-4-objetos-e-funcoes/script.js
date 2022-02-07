// Para fixar (objetos) dia 4.4

// Item 1

let player = {
	name: 'Marta',
	lastName: 'Silva',
	age: 34,
	medals: {
		golden: 2,
		silver: 3,
	},
	bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
};

let mensagem = 'A jogadora ' + player['name'] + ' ' + player['lastName'] + ' tem ' + player['age'] + ' anos de idade.';

// console.log(mensagem);

let mensagem2 = 'A jogadora ' + player['name'] + ' ' + player['lastName'] + ' foi eleita a melhor do mundo por ' + 
player['bestInTheWorld'].length + ' vezes.'

// console.log(mensagem2);

let mensagem3 = 'A jogadora possui ' + player['medals']['golden'] + ' medalhas de ouro e ' + player['medals']['silver'] + ' medalhas de prata';

// console.log(mensagem3);


// Para fixar (for/in for/of)

// Item 1

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for (let key in names) {
	// console.log('Olá ' + names[key]);
}

// Item 2

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let key in car) {
	// console.log(key, car[key]);	
}



// Para fixar (funções)

// Item 1.1

function soma (a, b) {
	let resultadoSoma = a + b;

	return resultadoSoma;
}

function subtracao (a, b) {
	let resultadoSubtracao = a - b;

	return resultadoSubtracao;
}

function multiplicacao (a, b) {
	let resultadoMultiplicacao = a * b;

	return resultadoMultiplicacao;
}

function divisao (a, b) {
	let resultadoDivisao = a / b;

	return resultadoDivisao;
}

function resto (a, b) {
	let resultadoResto = a % b;

	return resultadoResto;
}

// console.log(soma(12, 3));
// console.log(subtracao(12, 3));
// console.log(multiplicacao(12, 3));
// console.log(divisao(12, 3));
// console.log(resto(12, 3));


// Item 1.2

function maiorNum (num1, num2) {
	if (num1 > num2) {
		return num1;
	}
	else if (num1 < num2) {
		return num2;
	}
	else {
		return 'números iguais';
	}
}

// console.log(maiorNum(18,21));


// Item 1.3

function comparador(x, y, z) {
	if (x > y && x > z) {
		return x;
	}
	else if (y > x && y > z) {
		return y;
	}
	else if (z > x && z > y) {
		return z;
	}
	else {
		return 'existem números iguais';
	}
}

// console.log(comparador(3,6,8));


// Item 1.4

function positiveNegative (value) {
	if (value > 0) {
		return 'positve';
	}
	else if (value < 0) {
		return 'negative';
	}
	else {
		return 'zero';
	}
}

// console.log(positiveNegative(8));


// Item 1.5

function isTriangle (anguloA, anguloB, anguloC) {
	if (anguloA <= 0 || anguloB <= 0 || anguloC <= 0) {
		return 'ângulo inválido';
	}
	else if (anguloA + anguloB + anguloC == 180) {
		return true;
	}
	else {
		return false;
	}
}

console.log(isTriangle(30, 60, 90));