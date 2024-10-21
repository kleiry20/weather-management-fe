import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Weather from "./components/Weather";
import WeatherList from "./components/WeatherList/WeatherList";

function App() {
  return (
    <div className="app">
      <h1 className="app-title">Weather Management System</h1>
      {/* <Weather /> */}
      <WeatherList />
    </div>
  );
}

export default App;
