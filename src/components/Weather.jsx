import useWeather from '../hooks/useWeather';
import Form from './Form';
import Result from './Result';

const Weather = () => {
  const { result } = useWeather();

  return (
    <>
      <main className="two-columns">
        <Form />
        {result?.name && <Result />}
      </main>
    </>
  );
};

export default Weather;
