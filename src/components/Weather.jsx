import useWeather from '../hooks/useWeather';
import Form from './Form';
import Result from './Result';
import Spinner from './Spinner';

const Weather = () => {
  const { result, loading } = useWeather();

  return (
    <>
      <main className="two-columns">
        <Form />
        {loading ? <Spinner /> : result?.name && <Result />}
      </main>
    </>
  );
};

export default Weather;
