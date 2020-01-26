import React from 'react';
import { Col } from 'reactstrap';
import './Button.scss'

const Button = props => {
  const { symbol, action, col } = props;
    return (
    <Col md={col} className="border p-0">
      <button className="calc-btn w-100" onClick={() => action(symbol)}>
        {symbol}
      </button>
    </Col>
  );
};

export default Button;
