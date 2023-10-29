<template>
    <div id="outcome">
      <h1><br><br><br><br>Weather Predictor</h1>
      <p>created by chandu dissanayake</p><br><br><br><br>
      <label for="temperature">Enter Temperature (in Celsius):</label>
      <input type="number" id="temperature" required>
  
      <label for="wind">Enter Wind Speed (in km/h):</label>
      <input type="number" id="wind" required>
  
      <label for="day-type">Select Day Type:</label>
      <select id="day-type">
        <option value="sunny">Sunny</option>
        <option value="rainy">Rainy</option>
        <option value="cloudy">Cloudy</option>
      </select>
      <p><br><br><br><br></p>
      <div id="result">{{ weatherDescription }}</div>
  
      <button @click="predictWeather">PREDICT WEATHER</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        weatherDescription: '',
      };
    },
    methods: {
      predictWeather() {
        const temperatureInput = document.getElementById('temperature');
        const windInput = document.getElementById('wind');
        const dayTypeInput = document.getElementById('day-type');
        const resultContainer = document.getElementById('result');
  
        const temperature = parseFloat(temperatureInput.value);
        const windSpeed = parseFloat(windInput.value);
        const dayType = dayTypeInput.value;
  
        if (isNaN(temperature) || isNaN(windSpeed)) {
          this.weatherDescription = 'Please enter valid temperature and wind speed.';
        } else {
          let weatherDescription = '';
  
          if (temperature < 0) {
            weatherDescription += "It's very cold. ";
          } else if (temperature >= 0 && temperature < 20) {
            weatherDescription += "It's little bit cold. ";
          } else if (temperature >= 20 && temperature < 30) {
            weatherDescription += 'It\'s a pleasant temperature. ';
          } else {
            weatherDescription += 'It\'s so hot. ';
          }
  
          if (windSpeed < 10) {
            weatherDescription += 'Expect light winds. ';
          } else if (windSpeed >= 10 && windSpeed < 30) {
            weatherDescription += 'Windy conditions expected. ';
          } else {
            weatherDescription += 'Expect storms. ';
          }
  
          if (dayType === 'sunny') {
            weatherDescription += 'It will be a better day for your day to day works.';
          } else if (dayType === 'rainy') {
            weatherDescription += 'Stay in home. It might be rain for some hours.';
          } else if (dayType === 'cloudy') {
            weatherDescription += 'It will be rainy. If you go out, take an umbrella.';
          }
  
          this.weatherDescription = weatherDescription;
        }
      },
    },
  };
  </script>

<style>
  #outcome {
    text-align: center;
    color: orange;
  }
</style>
  