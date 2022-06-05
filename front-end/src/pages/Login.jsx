import React, { useCallback, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import Box from '../components/Box';
import Button from '../components/Button';
import Container from '../components/Container';
import Form from '../components/Form';
import Input from '../components/Input';
import Logo from '../components/Logo';
import logo from '../images/rockGlass.svg';

import { postLogin } from '../services';

export const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
export const PASSWORD_MIN_LENGTH = 6;

export const validatePasswordInput = (passwordInput) => {
  if (passwordInput.length >= PASSWORD_MIN_LENGTH) return true;
  return false;
};
export const validateEmailInput = (loginInput) => loginInput.match(EMAIL_REGEX);

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

    localStorage.clear();
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
      <Box>
        <Logo src={ logo } alt="logo com um copo" />
        <Box style={ { width: '350px' } }>
          <Form
            onSubmit={ submitLogin }
            style={ { flexDirection: 'column', height: '280px' } }
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
            >
              Ainda não tenho conta
            </Button>
          </Form>
        </Box>
      </Box>
      { alarmErrorLogin
        ? <p data-testid="common_login__element-invalid-email">erro de login</p> : null }
    </Container>
  );
}
