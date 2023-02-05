import { createContext, useState } from 'react';

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [search, setSearch] = useState({
    city: '',
    country: ''
  });

  const searchedData = e => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    });
  };

  const weatherRequest = (data) => {
    console.log(data)
  }

  return (
    <WeatherContext.Provider
      value={{
        search,
        searchedData,
        weatherRequest
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherProvider };

export default WeatherContext;
