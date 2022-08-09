function doMath(a, b, c) {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      return reject(new Error('Informe apenas números'));
    }

    const result = ((a + b) * c);

    if (result < 50) {
      return reject(new Error('Valor muito baixo'));
    }

    resolve(result);
  });
}
const a = Math.floor(Math.random() * 10 + 1);
const b = Math.floor(Math.random() * 10 + 1);
const c = Math.floor(Math.random() * 10 + 1);

doMath(a, b, c)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error.message));