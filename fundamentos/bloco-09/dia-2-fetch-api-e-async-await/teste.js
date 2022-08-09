function factorial(n) {
  let result = 1;
  
  for (let i = n; i >= 1; i--) {
      result = result * n;
  }
  return result;
}

console.log(factorial(4));