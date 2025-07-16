
# 🌦️ Weather App

A simple JavaScript weather application that fetches real-time weather data using the **OpenWeatherMap API**.

## 🔍 Features

- Search for any city and get current weather details:
  - 🌡 Temperature in Celsius  
  - 🌬 Wind speed  
  - 💧 Humidity  
  - 🌥 Weather description and icon  
- Basic error handling (alerts user if the city is not found)

## 🧪 Technologies Used

- **JavaScript (ES6+)**
- **HTML/CSS**
- **OpenWeatherMap API**

## 📸 Preview

*(You can insert a screenshot here once ready)*  
```md
![Weather App Screenshot](./screenshot.png)
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/weather-app.git
cd weather-app
```

### 2. Open `index.html` in a browser

No need for a server. It's a pure frontend app using JavaScript.

## 🔑 API Key

This project uses a public weather API from [OpenWeatherMap](https://openweathermap.org/api).  
You can use the provided API key in this demo or get your own for free:

```js
const weather = {
  apiKey: "e14f135ff04a40d618f3ce5fb6ddc3fb", // replace this with your own key if needed
  ...
};
```

## ✍️ Usage

1. Type a city name into the input field with `id="search-bar"`
2. Click the button with the class `.search-button`
3. Weather details will display on the screen

## 📁 File Structure

```
/weather-app
├── index.html
├── style.css
└── script.js  # Contains the weather logic
```

## ⚠️ Notes

- Ensure you have a valid API key (some free keys have usage limits)
- Weather icons are static (`04d.png` used by default). You can replace this:
  ```js
  document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${icon}.png`;
  ```

## 📄 License

MIT — free to use and modify
