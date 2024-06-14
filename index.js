const apiKey = "c94a2f8ab03914519af6e629279c7d1a";
// var location = 'Philippines';

async function getWeather($location) {
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`)
  .then(response => {   
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Data received:', data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

}

getWeather('Germany');



