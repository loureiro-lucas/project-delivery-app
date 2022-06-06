import React from 'react';

import PropTypes from 'prop-types';

import styled from 'styled-components';

const CustomSelect = styled.select`
  appearance: none;
  border: none;
  border-radius: 8px;
  box-shadow: 0 2px 5px 0 rgb(88 88 88/20%);
  cursor: pointer;
  height: 42px;
  outline: none;
  padding: 0 15px;
  width: ${({ mobileSize }) => mobileSize};

  @media only screen and (min-width: 600px) {
    width: ${({ desktopSize }) => desktopSize || mobileSize};
  }
`;

const CustomLabel = styled.label`
  position: relative;
  :after {
    color: ${({ theme }) => theme.palette.primary};
    content: '>';
    font: 1.5em 'Consolas';
    font-weight: bold;
    margin-right: 0;
    position: absolute;
    pointer-events: none;
    right: 15px;
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    top: 8px;
    transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
  }
`;

export default function DropdownMenu({
  desktopSize,
  handler,
  options,
  mobileSize,
  selectValue,
  testId }) {
  return (
    <CustomLabel>
      <CustomSelect
        data-testid={ testId }
        desktopSize={ desktopSize }
        onChange={ ({ target: { value } }) => handler(value) }
        mobileSize={ mobileSize }
        value={ selectValue }
      >
        {
          options.length && options.map((option, index) => (
            <option
              key={ option + index }
              value={ option.toLowerCase() }
            >
              { option }
            </option>
          ))
        }
      </CustomSelect>
    </CustomLabel>
  );
}

DropdownMenu.propTypes = {
  desktopSize: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  mobileSize: PropTypes.string.isRequired,
  selectValue: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
};
