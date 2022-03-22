const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
function sendMarsTemperature() {
  const temperature = getMarsTemperature();
  return `Mars temperature is: ${temperature} degrees Celsius`;
}

setTimeout(() => console.log(sendMarsTemperature()), messageDelay()); // imprime "Mars temperature is: 20 degree Celsius", por exemplo