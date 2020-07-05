import React from 'react'

export default function Form({ data, onChangeData }) {
  
  const { initialValue, monthlyPeriod, monthlyInterest } = data;

  const handleChangeInitialValue    = event => onChangeData(+event.target.value, null, null);
  const handleChangeMonthlyInterest = event => onChangeData(null, +event.target.value, null);
  const handleChangeMonthlyPeriod   = event => onChangeData(null, null, +event.target.value);

  return (
    <div className="center row">
      
      <div className="col input-field s6 m4 l4">        
        <input
          type="number"
          id="inputInitialValue"
          value={initialValue}
          min='100'
          step='100'
          onChange={handleChangeInitialValue}
        />
        <label htmlFor="inputInitialValue" className="active"> Montante Inicial</label>
      </div>


      <div className="col input-field s6 m4 l4">        
        <input
          type="number"
          id="inputMonthlyInterest"
          value={monthlyInterest}
          min='-12'
          max='12'
          step='0.1'
          onChange={handleChangeMonthlyInterest}
        />
        <label htmlFor="inputMonthlyInterest" className="active"> Taca de Juros Mensal</label>
      </div>

      <div className="col input-field s6 m4 l4">        
        <input
          type="number"
          id="inputMonthlyPeriod"
          value={monthlyPeriod}
          min='1'
          max='36'
          step='1'
          onChange={handleChangeMonthlyPeriod}
        />
        <label htmlFor="inputMonthlyPeriod" className="active"> Quantidade de Períodos:</label>
      </div>
    </div>
  )
}
