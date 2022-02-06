// Para fixar dia 4.4

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

console.log(mensagem);

let mensagem2 = 'A jogadora ' + player['name'] + ' ' + player['lastName'] + ' foi eleita a melhor do mundo por ' + 
player['bestInTheWorld'].length + ' vezes.'

console.log(mensagem2);

let mensagem3 = 'A jogadora possui ' + player['medals']['golden'] + ' medalhas de ouro e ' + player['medals']['silver'] + ' medalhas de prata';

console.log(mensagem3);