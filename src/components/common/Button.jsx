import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Button = ({
  value,
  handleClickButton,
  ...props
}) => {
  return (
    <ButtonStyles
      value={value}
      onClick={handleClickButton}
      {...props}
    />
  );
};

Button.propTypes = {
  value: PropTypes.string,
  handleClickButton: PropTypes.func,
};

export default Button;

const ButtonStyles = styled.button`
  width: 200px;
  height: 60px;
  background-color: #4d4d4d;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  ${({ color }) => {
    switch (color) {
      case 'white':
        return css`
          background-color: #fff;
          color: #000;
          border: 1px solid #000;
          &:active {
            background-color: #fff;
          }
        `;
    }
  }}
`;
