import React, { useCallback, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

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

    if (response) {
      return navigate('/customer/products');
    }

    setAlarmErrorLogin(true);
  };

  useEffect(() => {
    validateLogin();
  }, [loginInput, passwordInput, validateLogin]);

  return (
    <Container>
      <Box style={ { marginTop: '10vh' } }>
        <Logo src={ logo } alt="logo com um copo" />
        <Form
          onSubmit={ submitLogin }
          style={ { flexDirection: 'column', height: '300px' } }
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
              Credenciais inválidas
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
            Ainda não tenho conta
          </Button>
        </Form>
      </Box>
    </Container>
  );
}
