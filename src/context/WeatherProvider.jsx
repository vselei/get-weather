import { createContext, useState } from 'react';
import axios from 'axios';

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [search, setSearch] = useState({
    city: '',
    country: ''
  });
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);
  const [noResult, setNoResult] = useState('');

  const searchedData = e => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    });
  };

  const weatherRequest = async data => {
    setLoading(true);
    setNoResult('');
    try {
      const { city, country } = data;

      const appId = import.meta.env.VITE_API_KEY;

      const url = encodeURI(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${appId}`
      );

      const { data: response } = await axios(url);
      const { lat, lon } = response[0];

      const weatherUrl = encodeURI(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`
      );

      const { data: weather } = await axios(weatherUrl);
      setResult(weather);
    } catch (error) {
      setNoResult('Não tem resultados');
    } finally {
      setLoading(false);
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        search,
        searchedData,
        weatherRequest,
        result,
        loading,
        noResult
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherProvider };

export default WeatherContext;
