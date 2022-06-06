import React, { useState, useEffect, useCallback } from 'react';
import Input from '../components/Input';
import { validateEmailInput, validatePasswordInput } from './Login';
import { postAdminRegister } from '../services';

export const NAME_MIN_LENGTH = 12;
export const validateNameInput = (nameInput) => {
  if (nameInput.length >= NAME_MIN_LENGTH) return true;
  return false;
};

export default function Manage() {
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [roleInput, setRoleInput] = useState('customer');
  const [alarmInvalidRegister, setAlarmInvalidRegister] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleNamelInput = ({ target: { value } }) => {
    setNameInput(value);
  };
  const handleEmailInput = ({ target: { value } }) => {
    setEmailInput(value);
  };
  const handlePasswordInput = ({ target: { value } }) => {
    setPasswordInput(value);
  };
  const handleRoleInput = ({ target: { value } }) => {
    setRoleInput(value);
  };

  const validateCreate = useCallback(() => {
    if (validateNameInput(nameInput)
    && validateEmailInput(emailInput)
    && validatePasswordInput(passwordInput)
    && roleInput) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [nameInput, emailInput, passwordInput, roleInput]);

  const submitRegister = async (event) => {
    const token = localStorage.getItem('token');
    event.preventDefault();

    const response = await
    postAdminRegister({ token, nameInput, emailInput, passwordInput, roleInput });

    if (!response) {
      setAlarmInvalidRegister(true);
    } else {
      setAlarmInvalidRegister(false);
    }
  };

  useEffect(() => {
    validateCreate();
  }, [emailInput, nameInput, passwordInput, validateCreate]);

  return (
    <div>
      <form
        onSubmit={ submitRegister }
      >
        <p>Cadastrar novo usuário</p>
        <span style={ { padding: '0 15px' } }>Nome</span>
        <Input
          data-testid="admin_manage__input-name"
          placeholder="Nome e sobrenome"
          type="text"
          onChange={ handleNamelInput }
        />
        <span style={ { padding: '0 15px' } }>Email</span>
        <Input
          data-testid="admin_manage__input-email"
          placeholder="seu-email@site.com.br"
          type="text"
          onChange={ handleEmailInput }
        />
        <span style={ { padding: '0 15px' } }>Senha</span>
        <Input
          data-testid="admin_manage__input-password"
          placeholder="**********"
          type="password"
          onChange={ handlePasswordInput }
        />
        <span style={ { padding: '0 15px' } }>Tipo</span>
        <select
          onChange={ handleRoleInput }
          data-testid="admin_manage__select-role"
        >
          <option value="customer" defaultValue>Customer</option>
          <option value="seller">Seller</option>
          <option value="administrator">Administrator</option>
        </select>
        <button
          data-testid="admin_manage__button-register"
          type="submit"
          disabled={ isButtonDisabled }
        >
          Cadastrar
        </button>
      </form>
      { alarmInvalidRegister
        ? <p data-testid="admin_manage__element-invalid-register">Usuário já existe</p>
        : null }
    </div>
  );
}
