const newEmployees = () => {
	const employees = {
		id1: '', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
		id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
		id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
	}
	return employees;
};

// Consultei o seguinte site para usar o método replace(): https://www.delftstack.com/pt/howto/javascript/javascript-remove-spaces/
const info = (name) => {
	let emailOutput = name.toLowerCase().replace(/ /g, "_");
	let obj = {
		nomeCompleto: name,
		email: `${emailOutput}@trybe.com`,
	}
	return obj;
}

// console.log(info('Edyomar Netto'));