import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { removeItem } from '../../redux/reducers/orderSlice';
import store from '../../redux/store';
import Box from '../Box';
import Button from '../Button';
import Container from '../Container';
import Title from '../Title';
import ComponentPrice from './ComponentPrice';

function TableOrders() {
  const [isOrder, setIsOrder] = useState(store.getState().order.cart);

  const location = useLocation();

  const handlerText = () => {
    let text = 'Detalhe do Pedido';
    // console.log(location.pathname);
    switch (location.pathname) {
    case '/customer/checkout':
      text = 'Finalizar Pedido';
      return text;
    case '/customer/orders/':
      return text;
    default:
      break;
    }
  };

  const isCheckout = location.pathname === '/customer/checkout';
  store.subscribe(() => setIsOrder(store.getState().order.cart));

  const Table = (
    <table>
      <thead>
        <tr>
          <th>item</th>
          <th>Descricao</th>
          <th>Quantidade</th>
          <th>Valor Unitario</th>
          <th>Sub-Total</th>
          { isCheckout
          && <th>Remover Item</th>}
        </tr>
      </thead>
      <tbody>

        {
          isOrder.map(({ name, price, qty, id }, index) => (
            <tr key={ index }>
              <td>{index + 1}</td>
              <td>{name}</td>
              <td>{qty}</td>
              <td>{price}</td>
              <td>{(price * qty)}</td>
              { isCheckout
              && (
                <td>
                  <Button
                    value={ id }
                    onClick={ () => store.dispatch(removeItem(id)) }
                  >
                    Remover
                  </Button>
                </td>
              )}
            </tr>
          ))
        }
      </tbody>
    </table>
  );

  return (
    <Container>
      <Box>
        <Title>{handlerText()}</Title>
      </Box>
      {Table}
      <ComponentPrice />
    </Container>

  );
}

export default TableOrders;
