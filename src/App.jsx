import Weather from './components/Weather';
import { WeatherProvider } from './context/WeatherProvider';

function App() {
  return (
    <WeatherProvider>
      <header>
        <h1>Buscador de Clima</h1>
      </header>
      <Weather />
    </WeatherProvider>
  );
}

export default App;
