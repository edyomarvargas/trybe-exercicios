// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const joke = document.querySelector('#jokeContainer');

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  const promisse = fetch(API_URL, myObject);

  promisse
  .then((response) => response.json())
  .then((data) => joke.innerText = data.joke);  
};

window.onload = () => fetchJoke();
