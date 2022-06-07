import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import Header from '../Header';
import Title from '../Title';
import store from '../../redux/store';

function ComponentHeader() {
  // const exitPage = (event) => {
  //   event.preventDefault();
  //   return useNavigate('/login');
  // };
  const navigate = useNavigate();
  return (
    <Header>
      <Title
        data-testid="customer_products__element-navbar-link-products"
      >
        PRODUTOS

      </Title>
      <Title
        data-testid="customer_products__element-navbar-link-orders"
      >
        MEUS PEDIDOS

      </Title>

      <Title
        data-testid="customer_products__element-navbar-user-full-name"
      >
        {store.getState().user.username}

      </Title>

      <Button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
        BGcolor="red"
        onClick={ () => navigate('/login') }
      >
        Sair
      </Button>
    </Header>
  );
}

export default ComponentHeader;
