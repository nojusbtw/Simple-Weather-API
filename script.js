const weather = {
    apiKey: "e14f135ff04a40d618f3ce5fb6ddc3fb",

    fetchWeather: async function(city){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
        );

        if (!response.ok) {
            alert("no weather found");
            throw new Error("No weather found");
        }

        let data = await response.json();
        console.log(data);
        this.displayWeather(data);
    },

    displayWeather: function(data) {
        const { name } = data;
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        const { icon, description } = data.weather[0];

        document.querySelector(".city").innerHTML = `Weather in ${name}`;
        document.querySelector(".temp").innerHTML = `${temp} °C`;
        document.querySelector(".icon").src = `https://openweathermap.org/img/wn/04d.png`;
        document.querySelector(".desc").innerHTML = description;
        document.querySelector(".humidity").innerHTML = `Humidity: ${humidity}%`;
        document.querySelector(".wind").innerHTML = `Wind speed: ${speed} km/h`;
    },

    search: function(){
        let searchValue = document.querySelector("#search-bar").value;
        this.fetchWeather(searchValue);
    },
};

document.querySelector('.search-button').addEventListener('click', ()=>{
    weather.search();
});