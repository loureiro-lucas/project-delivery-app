import React, { useState, useEffect, useCallback } from 'react';

import Container from '../components/Container';
import Input from '../components/Input';

import {
  validateEmailInput,
  validateNameInput,
  validatePasswordInput } from '../utils/inputValidations';

import { postAdminRegister } from '../services';
import Box from '../components/Box';
import Form from '../components/Form';
import Title from '../components/Title';
import Button from '../components/Button';
import DropdownMenu from '../components/DropdownMenu';

const USER_TYPE_OPTIONS = ['Customer', 'Seller', 'Administrator'];

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
  const handleRoleInput = (value) => {
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
    <Container>
      <Box>
        <Title>Cadastrar novo usuário</Title>
        <Form
          desktopDirection="row"
          desktopSize="50px"
          onSubmit={ submitRegister }
          mobileSize="380px"
        >
          <span style={ { padding: '0 15px' } }>Nome:</span>
          <Input
            data-testid="admin_manage__input-name"
            placeholder="Nome e sobrenome"
            type="text"
            onChange={ handleNamelInput }
          />
          <span style={ { padding: '0 15px' } }>Email:</span>
          <Input
            data-testid="admin_manage__input-email"
            placeholder="seu-email@site.com.br"
            type="text"
            onChange={ handleEmailInput }
          />
          <span style={ { padding: '0 15px' } }>Senha:</span>
          <Input
            data-testid="admin_manage__input-password"
            placeholder="**********"
            type="password"
            onChange={ handlePasswordInput }
          />
          <span style={ { padding: '0 15px' } }>Tipo:</span>
          <DropdownMenu
            desktopSize="199px"
            handler={ handleRoleInput }
            options={ USER_TYPE_OPTIONS }
            selectValue={ roleInput }
            mobileSize="100%"
            testId="admin_manage__select-role"
          />
          <Button
            data-testid="admin_manage__button-register"
            desktopSize="180px"
            desktopSpacer="15px"
            type="submit"
            disabled={ isButtonDisabled }
          >
            CADASTRAR
          </Button>
        </Form>
        { alarmInvalidRegister
          ? <p data-testid="admin_manage__element-invalid-register">Usuário já existe</p>
          : null }
      </Box>
    </Container>
  );
}
