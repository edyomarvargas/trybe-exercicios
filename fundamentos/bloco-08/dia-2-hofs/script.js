const books = [
	{
		id: 1,
		name: 'As Crônicas de Gelo e Fogo',
		genre: 'Fantasia',
		author: {
			name: 'George R. R. Martin',
			birthYear: 1948,
		},
		releaseYear: 1991,
	},
	{
		id: 2,
		name: 'O Senhor dos Anéis',
		genre: 'Fantasia',
		author: {
			name: 'J. R. R. Tolkien',
			birthYear: 1892,
		},
		releaseYear: 1954,
	},
	{
		id: 3,
		name: 'Fundação',
		genre: 'Ficção Científica',
		author: {
			name: 'Isaac Asimov',
			birthYear: 1920,
		},
		releaseYear: 1951,
	},
	{
		id: 4,
		name: 'Duna',
		genre: 'Ficção Científica',
		author: {
			name: 'Frank Herbert',
			birthYear: 1920,
		},
		releaseYear: 1965,
	},
	{
		id: 5,
		name: 'A Coisa',
		genre: 'Terror',
		author: {
			name: 'Stephen King',
			birthYear: 1947,
		},
		releaseYear: 1986,
	},
	{
		id: 6,
		name: 'O Chamado de Cthulhu',
		genre: 'Terror',
		author: {
			name: 'H. P. Lovecraft',
			birthYear: 1890,
		},
		releaseYear: 1928,
	},
];

// Adicione o código do exercício aqui:

// 1
const authorBornIn1947 = (array) => {
	let firstAuthor = array.find((element) => element.author.birthYear === 1947);
	console.log(firstAuthor.author.name);
}

// authorBornIn1947(books);

// 2
function smallerName(array) {
	let nameBook;
	array.forEach(element => {
		if (!nameBook || element.name.length < nameBook.length) {
			nameBook = element.name;
		};
	});
	return nameBook;
}

// console.log(smallerName(books));


// 3

const getNamedBook = (array) => {
	let result = array.find((element) => {
		return element.name.length === 26;
	});
	console.log(result.name);
};

// getNamedBook(books);


// 4

const booksOrdered = (array) => {
	console.log(array.sort((a, b) => b.releaseYear - a.releaseYear));
}

// booksOrdered(books);


// 5

function everyoneWasBornOnSecXX(array) {
	return array.every((element) => {
		element.author.birthYear >= 1901 && element.author.birthYear <= 2000;
	});
}

// console.log(everyoneWasBornOnSecXX(books));


6

function someBookWasReleaseOnThe80s(array) {
	return array.some((book) => {
		return book.releaseYear >= 1980 && book.releaseYear <= 1989;
	});
}

console.log(someBookWasReleaseOnThe80s(books));


