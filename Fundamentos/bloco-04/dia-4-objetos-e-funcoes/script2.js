// Exercícios parte 1 

// Item 1

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

//   console.log('Bem-vinda ' + info.personagem);

  // Item 2

  info['recorrente'] = 'Sim';

//   console.log(info);

  // Item 3

for (key in info) {
    // console.log(key);
}

// Item 4

for (key in info) {
    console.log(info[key]);
}