import React, { useState } from 'react';
import './App.scss';
import Button from './components/Button';
import { Row, Col, Container } from 'reactstrap';

const App = () => {
  const [isReset, setIsReset] = useState(false);
  const [current, setCurrent] = useState('0');
  const [previous, setPrevious] = useState([]);

  const reset = symbol => {
    setCurrent('0');
  };

  const addToCurrent = symbol => {
    const operators = ['/', '-', '*', '+'];
    if (operators.includes(symbol)) {
      setIsReset(true);
      setPrevious([...previous, `${current + symbol}`])
      return setCurrent('0');
    }

    if ((current === '0' && symbol !== '.') || isReset) {
      setIsReset(false);
      return setCurrent(symbol);
    }

    setCurrent(current + symbol);
  };

  const calculate = symbol => {
    console.log('symbol :', symbol);
    if (previous.length > 0) {
      const result = eval(String(previous[previous.length - 1] + current));
      setPrevious([]);
      setIsReset(true);
      setCurrent(result);
    }
  };

  const buttons = [
    { symbol: 'C', col: 9, action: reset },
    { symbol: '/', col: 3, action: addToCurrent },
    { symbol: '7', col: 3, action: addToCurrent },
    { symbol: '8', col: 3, action: addToCurrent },
    { symbol: '9', col: 3, action: addToCurrent },
    { symbol: '*', col: 3, action: addToCurrent },
    { symbol: '4', col: 3, action: addToCurrent },
    { symbol: '5', col: 3, action: addToCurrent },
    { symbol: '6', col: 3, action: addToCurrent },
    { symbol: '-', col: 3, action: addToCurrent },
    { symbol: '3', col: 3, action: addToCurrent },
    { symbol: '2', col: 3, action: addToCurrent },
    { symbol: '3', col: 3, action: addToCurrent },
    { symbol: '+', col: 3, action: addToCurrent },
    { symbol: '0', col: 3, action: addToCurrent },
    { symbol: '.', col: 3, action: addToCurrent },
    { symbol: '=', col: 6, action: calculate },
  ];
  return (
    <Container className="calc-container w-25">
      <Row>
        <Col md="12">
          <div className="float-expression">
            {previous.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
          <input
            disabled
            type="text"
            className="calc-result w-100"
            value={current}
          />
        </Col>
        <Col md="12">
          <Row className="calc-btn-container m-0">
            {buttons.map((btn, index) => {
              const { symbol, col, action } = btn;
              return (
                <Button key={index} symbol={symbol} col={col} action={action} />
              );
            })}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
