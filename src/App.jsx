import "./App.css";
import WeatherList from "./components/WeatherList/WeatherList";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="main">
        <WeatherList />
      </main>
    </div>
  );
}

export default App;
