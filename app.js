// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const weatherApi = {
  key: "4f7c136a5f94498f33f18be180c59b9d",
  baseUrl: "https://api.openweathermap.org/data/2.5/weather",
};

const searchBox = document.getElementById("search-box");
searchBox.addEventListener("keyup", (newEvent) => {
  if (newEvent.key === "Enter")
    // console.log(searchBox.value);
    getWeatherReport(searchBox.value);
});

function getWeatherReport(city) {
  fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then((reponse) => {
      return reponse.json();
    })
    .then(showWeatherReport);
}
function showWeatherReport(weather) {
  console.log(weather);
  let city = document.getElementById("city");
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let temp = document.getElementById("temprature");
  temp.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

  let min_max = document.getElementById("min-max");
  min_max.innerHTML = `${Math.floor(
    weather.main.temp_min
  )}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max)`;

  let weatherType = document.getElementById("weather-type");
  weatherType.innerText = `${weather.weather[0].main}`;

  let date = document.getElementById("date");
  TodayDate = new Date();
  date.innerText = dateManager(TodayDate);

  if (weatherType.textContent == "Rain") {
    document.body.style.backgroundImage = "url(images/Rainy.jpg)";
  }
  if (weatherType.textContent == "Clouds") {
    document.body.style.backgroundImage = "url(images/Cloudy.jpg)";
  }
  if (weatherType.textContent == "Clear") {
    document.body.style.backgroundImage = "url(images/Clear.jpg)";
  }
  if (weatherType.textContent == "Haze") {
    document.body.style.backgroundImage = "url(images/haze.jpg)";
  }
  if (weatherType.textContent == "Mist") {
    document.body.style.backgroundImage = "url(images/mist.jpg)";
  }
  if (weatherType.textContent == "Smoke") {
    document.body.style.backgroundImage = "url(images/smoke.jpg)";
  }
}
function dateManager(param) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thusday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "November",
    "December",
  ];
  let year = param.getFullYear();
  let month = months[param.getMonth()];
  let date = param.getDate();
  let day = days[param.getDay()];

  return `${date} ${month} (${day}) ${year}`;
}
