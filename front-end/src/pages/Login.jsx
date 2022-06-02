import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import Box from '../components/Box';
import Button from '../components/Button';
import Container from '../components/Container';
import Form from '../components/Form';
import Input from '../components/Input';
import Logo from '../components/Logo';
import logo from '../images/rockGlass.svg';

import postLogin from '../services';

export default function Login() {
  const [loginInput, setLoginInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [alarmErrorLogin, setAlarmErrorLogin] = useState(false);

  const PASSWORD_MIN_LENGTH = 6;
  const EMAIL_REGEX = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

  const navigate = useNavigate();

  const handleLoginInput = ({ target: { value } }) => {
    setLoginInput(value);
  };

  const handlePasswordInput = ({ target: { value } }) => {
    setPasswordInput(value);
  };

  const validateEmailInput = () => {
    if (loginInput.match(EMAIL_REGEX)) return true;
    return false;
  };

  const validatePasswordInput = () => {
    if (passwordInput.length >= PASSWORD_MIN_LENGTH) return true;
    return false;
  };

  const validateLogin = () => {
    if (validateEmailInput() && validatePasswordInput()) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const submitLogin = async (event) => {
    event.preventDefault();
    const response = await postLogin({ email: loginInput, password: passwordInput });

    if (response) {
      navigate('/customer/product');
    }

    setAlarmErrorLogin(true);
  };

  useEffect(() => {
    validateLogin();
  }, [loginInput, passwordInput]);

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
              onChange={ handleLoginInput }
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
