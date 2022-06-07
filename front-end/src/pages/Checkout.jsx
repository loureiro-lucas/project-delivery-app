import React from 'react';
import Title from '../components/Title';
import ComponentHeader from '../components/utils/HeaderComponent';
import TableOrders from '../components/utils/TableOrders';

function CustomerCheckout() {
  return (
    <>
      <ComponentHeader />
      <Title>CHECKOUT</Title>
      <TableOrders />
    </>
  );
}

export default CustomerCheckout;
