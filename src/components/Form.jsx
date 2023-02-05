import { useState } from 'react';
import useWeather from '../hooks/useWeather';

const Form = () => {
  const [alert, setAlert] = useState('');

  const { search, searchedData, weatherRequest } = useWeather();

  const handleSubmit = e => {
    e.preventDefault();

    if (Object.values(search).includes('')) {
      setAlert('Todos os campos são obrigatórios');
      return;
    }

    setAlert('');
    weatherRequest(search)
  };

  return (
    <div className="container">
      {alert && <p>{alert}</p>}
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="city">Cidade</label>
          <input
            type="text"
            id="city"
            name="city"
            value={search.city}
            onChange={searchedData}
          />
        </div>
        <div className="field">
          <label htmlFor="country">Cidade</label>
          <select
            id="country"
            name="country"
            value={search.country}
            onChange={searchedData}
          >
            <option value="">-- Selecione um País --</option>
            <option value="US">Estados Unidos</option>
            <option value="BR">Brasil</option>
            <option value="AR">Argentina</option>
            <option value="CA">Canadá</option>
            <option value="MX">México</option>
            <option value="ES">Espanha</option>
            <option value="DE">Alemanha</option>
          </select>
        </div>
        <input type="submit" value="Clima" />
      </form>
    </div>
  );
};

export default Form;
