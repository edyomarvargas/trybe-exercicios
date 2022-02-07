// Exercícios parte 1 (Objetos e For/In)

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
    // console.log(info[key]);
}

// Item 5

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
};

for (key in info) {
    if (key === 'recorrente' && info[key] === 'Sim' && info2[key] === 'Sim') {
        // console.log('Ambos recorrentes');
    } 
    else {
        // console.log(info[key] + ' e ' + info2[key]);
    }
}


// Item 6

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
};

// console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo);


// Item 7 

leitor['livrosFavoritos'].push(
    {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
    }
)

// console.log(leitor.livrosFavoritos);

// Item 8

// console.log(leitor['nome'] + ' tem ' + leitor['livrosFavoritos'].length + ' livros favoritos.');


// Parte 2 (Funções)

// Item 1

function verificaPalindromo(palavra) {
    let separaPalavra = palavra.split('');
    let ehPalindromo = true;
    for (i = 0; i < separaPalavra.length; i += 1) {
        if (separaPalavra[i] !== separaPalavra[(separaPalavra.length - 1) - i]) {
            ehPalindromo = false;
        }
    }
    return ehPalindromo;
}
// console.log(verificaPalindromo('rodador'));


// Item 2

function getIndex(arr) {
    let maxNumber = arr.reduce(function (a, b) {
    return Math.max(a, b);
    });

    return arr.indexOf(maxNumber);
}

console.log(getIndex([2, 3, 6, 7, 10, 1]));







