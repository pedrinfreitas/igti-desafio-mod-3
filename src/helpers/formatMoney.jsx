const formatter = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
});

const moneyFormatter = value => formatter.format(value);

const moneyFormatterDif = value => {
  const money = formatter.format(value);
  return (value >= 0) ? `+${money}` : money; 
}

const percentFormatter = value => value.toFixed(2).replace('.', ',') + '%';

export { moneyFormatter, moneyFormatterDif, percentFormatter };