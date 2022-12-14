import React, { useCallback, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import store from '../redux/store';
import { setUsername } from '../redux/reducers/userSlice';

import Box from '../components/Box';
import Button from '../components/Button';
import Container from '../components/Container';
import ErrorMessage from '../components/ErrorMessage';
import Form from '../components/Form';
import Input from '../components/Input';
import Logo from '../components/Logo';
import logo from '../images/rockGlass.svg';

import { validateEmailInput, validatePasswordInput } from '../utils/inputValidations';

import { postLogin } from '../services';

export default function Login() {
  const [loginInput, setLoginInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [alarmErrorLogin, setAlarmErrorLogin] = useState(false);

  const navigate = useNavigate();

  const handleEmailInput = ({ target: { value } }) => {
    setLoginInput(value);
  };

  const handlePasswordInput = ({ target: { value } }) => {
    setPasswordInput(value);
  };

  const validateLogin = useCallback(() => {
    if (validateEmailInput(loginInput) && validatePasswordInput(passwordInput)) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [loginInput, passwordInput]);

  const submitLogin = async (event) => {
    event.preventDefault();
    const response = await postLogin({ email: loginInput, password: passwordInput });

    if (!response) {
      setAlarmErrorLogin(true);
    }

    const { data: { name } } = response;
    store.dispatch(setUsername(name));

    localStorage.setItem('token', response.data.token);

    switch (response.data.role) {
    case 'customer':
      return navigate('/customer/products');
    case 'seller':
      return navigate('/seller/orders');
    case 'administrator':
      return navigate('/admin/manage');
    default:
      break;
    }
  };

  useEffect(() => {
    validateLogin();
  }, [loginInput, passwordInput, validateLogin]);

  return (
    <Container>
      <Box desktopSize="350px" style={ { marginTop: '10vh' } }>
        <Logo src={ logo } alt="logo com um copo" />
        <Form
          onSubmit={ submitLogin }
          mobileSize="350px"
        >
          <span style={ { padding: '0 15px' } }>Login</span>
          <Input
            data-testid="common_login__input-email"
            onChange={ handleEmailInput }
            placeholder="email@trybeer.com.br"
            type="text"
            value={ loginInput }
          />
          <span style={ { padding: '0 5px' } }>Senha</span>
          <Input
            data-testid="common_login__input-password"
            onChange={ handlePasswordInput }
            placeholder="********"
            type="password"
            value={ passwordInput }
          />
          { alarmErrorLogin && (
            <ErrorMessage data-testid="common_login__element-invalid-email">
              Credenciais inv??lidas
            </ErrorMessage>
          )}
          <Button
            data-testid="common_login__button-login"
            disabled={ isButtonDisabled }
            type="submit"
          >
            LOGIN
          </Button>
          <Button
            data-testid="common_login__button-register"
            onClick={ () => navigate('/register') }
            type="button"
          >
            Ainda n??o tenho conta
          </Button>
        </Form>
      </Box>
    </Container>
  );
}
