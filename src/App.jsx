import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Weather from "./components/Weather";
import WeatherList from "./components/WeatherList/WeatherList";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Weather Management System </h1>
        <picture>
          <source
            srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f30f/512.webp"
            type="image/webp"
          />
          <img
            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f30f/512.gif"
            alt="🌏"
            width="32"
            height="32"
          />
        </picture>
      </header>

      <main className="main">
        <WeatherList />
      </main>
    </div>
  );
}

export default App;
