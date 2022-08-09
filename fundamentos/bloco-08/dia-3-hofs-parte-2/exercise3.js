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

const fantasyOrScienceFiction = (array) => {
	return array.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica')
};

console.log(fantasyOrScienceFiction(books));



function getSpeciesByIds(...ids) {
	return species.filter((animal) => {
		return animal.id === ids;
	});
}

function getSpeciesByIds(...ids) {
	ids.forEach((id) => {
		species.filter((animal) => {
			console.log(animal.id, id);
			return animal.id === id;
		})
	});
}

//requisito 1 funcionando

function getSpeciesByIds(...ids) {
	const animals = [];
	ids.forEach((id) => {
		return species.filter((animal) => {
			if (animal.id === id) {
				return animals.push(animal);
			}
		});
	});
	return animals;
}

// requisito 2 funcionando 

function getAnimalsOlderThan(animal, age) {
	// seu código aqui
	let bicho;
	species.forEach(element => {
		if (element.name === animal) {
			bicho = element.residents;
		}
	});
	return bicho.every((element2) => {
		return element2.age > age;
	});
}


// requisito calculateentry
function countEntrants(entrants) {
	let child = 0;
	let adult = 0;
	let senior = 0;
	entrants.forEach((element) => {
		if (element.age < 18) child += 1;
		if (element.age >= 18 && element.age < 50) adult += 1;
		if (element.age >= 50) senior += 1;
	});

	const people = {
		child,
		adult,
		senior,
	};
	return people;
}

let valor = (people.child * 20.99) + (people.adult * 49.99) + (people.senior * 24.99)
return valor

// requisito 4
function getRelatedEmployees(managerId) {
	const checkManager = isManager(managerId);
	let manager;

	if (checkManager === true) {
		manager = employees.find((employee) => {
			return employee.id === managerId;
		})
		return manager;
	}
}

// 5
function countAnimals(animal) {
	const animalsObj = {};
	if (!animal) {
		species.map((specie) => {
			animalsObj[`${specie.name}`] = specie.residents.length;
			return animalsObj;
		});
		return animalsObj;
	}

	if (animal) {
		const animalFiltered = species.filter((specie) => specie.name === animal.specie);
		return animalFiltered[0].residents.length;
	}
}

const param = { specie: 'penguins' };
const param2 = { specie: 'giraffes', sex: 'female' }
console.log(countAnimals(param2));

// 10
const employeeSpecies = species.forEach((specie) => {
	return findEmployee.responsibleFor.forEach((element) => console.log(specie.id, element));
 })

 // 10
 function allEmployees() {
  let arr = [];

  let allIdsFromResponsableFrom = employees.map((employee) => employee.responsibleFor)

  let x = {};

  x = employees.map((employee) => {
    
    return {
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: employee.responsibleFor.map((id) => species.find((specie) => id === specie.id).name)
    }
  })

  // console.log(x);





  // let animalsObj = {};

  // species.map((specie) => {
  //   return animalsObj[`${specie.name}`] = specie.id;
  // })

  // console.log(animalsObj);
  // console.log(Object.keys(animalsObj));








  // let x = [];
  // let y;
  // species.forEach((specie, index, array) => {
  //   console.log(array[index].name, array[index].id);

  // })





  // allIdsFromResponsableFrom.forEach((arrayWithIds, index, array) => {
  //   arrayWithIds.map((id) => {
  //     if (id === species[index].id) {
  //       console.log(species[index].name);
  //     }
  //     console.log(array);
  //   })

  // })



  employees.map((employee) => {
    arr.push(
      {
        id: employee.id,
        fullName: `${employee.firstName} ${employee.lastName}`,
        species: employee.responsibleFor.map((id) => species.find((specie) => id === specie.id).name),
        locations: employee.responsibleFor.map((id) => species.find((specie) => id === specie.id).location),
      }
    )
  });
  return arr;
}



// 10 aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
function allEmployees() {
  let allEmployeesInfo = [];

  employees.map((employee) => {
    allEmployeesInfo.push(
      {
        id: employee.id,
        fullName: `${employee.firstName} ${employee.lastName}`,
        species: employee.responsibleFor.map((id) => species.find((specie) => id === specie.id).name),
        locations: employee.responsibleFor.map((id) => species.find((specie) => id === specie.id).location),
      }
    )
  });
  return allEmployeesInfo;
}

function specificEmployee(nameOrId) {
  let findEmployee;
  // Encontra o objeto referente ao funcionário caso seja passado o nome ou sobrenome como parâmetro
  if (nameOrId.name) {
    findEmployee = employees.find((employee) => employee.firstName === nameOrId.name
      || employee.lastName === nameOrId.name);
  }
  // Encontra o objeto referente ao funcionário caso seja passado o id como parâmetro
  if (nameOrId.id) {
    findEmployee = employees.find((employee) => employee.id === nameOrId.id);
  }

  // Cria um array com as espécies que o funcionário é responsável
  const employeeSpecies = [];
  findEmployee.responsibleFor.forEach((element) => {
    employeeSpecies.push(species.find((specie) => specie.id === element));
  });
  // Cria um novo array apenas com o nome das espécies
  const nameOfAnimals = employeeSpecies.map((element) => element.name);

  const location = [];
  employeeSpecies.filter((element) => {
    location.push(element.location);
  });

  let obj = {
    id: findEmployee.id,
    fullName: `${findEmployee.firstName} ${findEmployee.lastName}`,
    species: nameOfAnimals,
    locations: location,
  }
  return obj;
}


function getEmployeesCoverage(nameOrId) {

  if (!nameOrId) {
    return allEmployees();
  }

  if ()

}