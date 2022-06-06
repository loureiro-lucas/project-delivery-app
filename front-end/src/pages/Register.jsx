import React, { useState, useCallback, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import Form from '../components/Form';
import Input from '../components/Input';
import Button from '../components/Button';

import {
  validateEmailInput,
  validateNameInput,
  validatePasswordInput,
} from '../utils/inputValidations';

import { postRegister } from '../services';
import Box from '../components/Box';
import Container from '../components/Container';
import ErrorMessage from '../components/ErrorMessage';
import Title from '../components/Title';

export default function Registration() {
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [registerError, setRegisterError] = useState(false);

  const navigate = useNavigate();

  const handleNameInput = ({ target: { value } }) => {
    setNameInput(value);
  };

  const handleEmailInput = ({ target: { value } }) => {
    setEmailInput(value);
  };

  const handlePasswordInput = ({ target: { value } }) => {
    setPasswordInput(value);
  };

  const validateRegister = useCallback(() => {
    if (validateEmailInput(emailInput)
    && validatePasswordInput(passwordInput)
    && validateNameInput(nameInput)) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [nameInput, emailInput, passwordInput]);

  const submitRegister = async (event) => {
    event.preventDefault();
    const response = await postRegister(nameInput, emailInput, passwordInput);

    if (response) {
      return navigate('/customer/products');
    }

    setRegisterError(true);
  };

  useEffect(() => {
    validateRegister();
  }, [nameInput, emailInput, passwordInput, validateRegister]);

  return (
    <Container>
      <Box desktopSize="350px" style={ { marginTop: '10vh' } }>
        <Title>Cadastro</Title>
        <Form
          onSubmit={ submitRegister }
          mobileSize="350px"
        >
          <span style={ { padding: '0 15px' } }>Nome:</span>
          <Input
            data-testid="common_register__input-name"
            onChange={ handleNameInput }
            placeholder="seu nome"
            type="text"
            value={ nameInput }
          />
          <span style={ { padding: '0 15px' } }>E-mail:</span>
          <Input
            data-testid="common_register__input-email"
            onChange={ handleEmailInput }
            placeholder="seu-email@exemplo.com.br"
            type="text"
            value={ emailInput }
          />
          <span style={ { padding: '0 15px' } }>Senha:</span>
          <Input
            data-testid="common_register__input-password"
            onChange={ handlePasswordInput }
            placeholder="******"
            type="password"
            value={ passwordInput }
          />
          <Button
            data-testid="common_register__button-register"
            disabled={ isButtonDisabled }
            type="submit"
          >
            CADASTRAR
          </Button>
        </Form>
        {registerError
        && (
          <ErrorMessage data-testid="common_register__element-invalid_register">
            Error to register
          </ErrorMessage>
        )}
      </Box>
    </Container>
  );
}
