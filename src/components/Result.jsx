import useWeather from '../hooks/useWeather';

const Result = () => {
  const { result } = useWeather();

  const { name, main } = result;

  // kelvin
  const kelvin = 273.15;

  return (
    <div className="container weather">
      <h2>O clima de {name} está: </h2>
      <p>{parseInt(main.temp - kelvin)}<span>&#x2103;</span></p>
      <div className='temp-min-max'>
      <p>Mín: {parseInt(main.temp_min - kelvin)}<span>&#x2103;</span></p>
      <p>Máx: {parseInt(main.temp_max - kelvin)}<span>&#x2103;</span></p>
      </div>
    </div>
  );
};

export default Result;
