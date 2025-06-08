function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = 'e71fe9b02ea148c07b5dee12315b37e8';
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then(data => {
      const temp = data.main.temp;
      const desc = data.weather[0].description;
      document.getElementById('result').innerHTML = `
        <h2>Weather in ${city}</h2>
        <p><strong>Temperature:</strong> ${temp} °C</p>
        <p><strong>Description:</strong> ${desc}</p>
      `;
    })
    .catch(error => {
      document.getElementById('result').textContent = error.message;
    });
}
