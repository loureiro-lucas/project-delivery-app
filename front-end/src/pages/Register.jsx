import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../components/Form';
import Input from '../components/Input';
import Button from '../components/Button';
import {
  validateEmailInput,
  validatePasswordInput,
} from './Login';
import { postRegister } from '../services';

const NAME_MIN_LENGTH = 12;

const validateNameInput = (nameInput) => nameInput.length > NAME_MIN_LENGTH;

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
    <>
      Cadastro
      <Form
        onSubmit={ submitRegister }
      >
        <Input
          data-testid="common_register__input-name"
          onChange={ handleNameInput }
          placeholder="Seu nome"
          type="text"
          value={ nameInput }
        />
        <Input
          data-testid="common_register__input-email"
          onChange={ handleEmailInput }
          placeholder="seu0email@site.com.br"
          type="text"
          value={ emailInput }
        />
        <Input
          data-testid="common_register__input-password"
          onChange={ handlePasswordInput }
          placeholder="********"
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
      && <p data-testid="common_register__element-invalid_register">Error to register</p>}
    </>
  );
}
