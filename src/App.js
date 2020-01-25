import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';

const App = () => {
  const [ result, setResult ] = useState('0');
  const [ current, setCurrent ] = useState('0');
  const [ previous, setPrevious ] = useState(0);

  const reset = () => {
    setResult('0');
  };

  const addToCurrent = symbol => {
    setCurrent(current + symbol);
  };
  const buttons = [
    { symbol: 'C', col: 3, action: reset },
    { symbol: '/', col: 1, action: addToCurrent },
    { symbol: '7', col: 1, action: addToCurrent },
    { symbol: '8', col: 1, action: addToCurrent },
    { symbol: '9', col: 1, action: addToCurrent },
    { symbol: 'X', col: 1, action: addToCurrent },
    { symbol: '4', col: 1, action: addToCurrent },
    { symbol: '5', col: 1, action: addToCurrent },
    { symbol: '6', col: 1, action: addToCurrent },
    { symbol: '-', col: 1, action: addToCurrent },
    { symbol: '1', col: 1, action: addToCurrent },
    { symbol: '2', col: 1, action: addToCurrent },
    { symbol: '3', col: 1, action: addToCurrent },
    { symbol: '+', col: 1, action: addToCurrent },
    { symbol: '0', col: 1, action: addToCurrent },
    { symbol: '.', col: 1, action: addToCurrent },
    { symbol: '=', col: 1, action: addToCurrent }
  ];
  return (
    <div className="App">
      <input type="text" className="calc-result" />
      <div className="calc-btn-container">
        {buttons.map((btn, index) => {
          const { symbol, col, action } = btn;
          return <Button symbol={symbol} col={col} action={(symbol) => action} />;
        })}
      </div>
    </div>
  );
};

export default App;
