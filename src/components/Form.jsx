const Form = () => {
  return <div className="container">
    <form>
      <div className="field">
        <label htmlFor="city">Cidade</label>
        <input type="text" id="city" name="city" />
      </div>
      <div className="field">
        <label htmlFor="country">Cidade</label>
        <select id="country" name="country">
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
      <input type="submit" value="Consultar Clima" />
    </form>
  </div>
}

export default Form;