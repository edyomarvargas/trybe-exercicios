const getParagraph = document.getElementById('paragraph');
const API_URL = `https://api.coincap.io/v2/assets`;

const fetchCoin = async () => {
  const promisse = await fetch(API_URL)
    .then((response) => response.json())
    .then((data) => data.data);

  return promisse;
}

const setCoins = async () => {
  const coins = await fetchCoin();

  const top10Coins = coins.filter((coin, index) => index < 10);

  top10Coins.forEach((coin) => {
    const newParagraph = document.createElement('p');
    const priceUsd = Number(coin.priceUsd);
    newParagraph.innerText = `${coin.name} (${coin.symbol}): ${priceUsd.toFixed(2)}`
    getParagraph.appendChild(newParagraph);
  });

}

// fetchCoin();
setCoins();
