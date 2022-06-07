import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import store from '../../redux/store';
import Box from '../Box';

function ComponentPrice() {
  const [totalPrice, setTotalPrice] = useState(0);
  const location = useLocation();

  const handlerText = () => {
    let text = 'Total';
    // console.log(location.pathname);
    switch (location.pathname) {
    case '/customer/products':
      text = 'Ver Carrinho';
      return text;
    case '/customer/checkout':
      return text;
    case '/customer/orders':
      return text;
    default:
      break;
    }
  };

  // manipula o valor total ** não realiza os cálculos **
  store.subscribe(() => setTotalPrice(store.getState().order.totalPrice));

  return (
    <Box>
      {`${handlerText()}: R$ ${totalPrice}`}
    </Box>
  );
}

export default ComponentPrice;
