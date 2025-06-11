import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

// Money formatter
function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    '$ ' +
    (p[0][0] === '-' ? '-' : '') +
    p[0]
      .replace('-', '')
      .split('')
      .reverse()
      .reduce((acc, num, i) => num + (i && !(i % 3) ? ',' : '') + acc, '') +
    '.' +
    p[1]
  );
}

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => acc + item, 0);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>{moneyFormatter(total)}</h1>
    </>
  );
};
