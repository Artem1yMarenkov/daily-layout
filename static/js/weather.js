const setWeather = document.querySelector('.weather');
const city = "Moscow";

function weather(city) {
    const key = "2dd1c1634e2f4c41b1b71a9bbdf0b4f6";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)
        .then(function (resp) {
            return resp.json()
        })
        .then(function (data) {
            setWeather.innerHTML = Math.floor(data.main.temp);
            console.log(data);
        })
}
weather(city);