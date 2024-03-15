import { forwardRef } from 'react';
import styled from 'styled-components';

const RefInput = forwardRef(
  ({ placeholder, ...props }, ref) => {
    return (
      <InputStyles
        placeholder={placeholder}
        {...props}
        ref={ref}
      />
    );
  },
);

RefInput.displayName = RefInput;

export default RefInput;

const InputStyles = styled.input`
  width: ${({ width }) => width};
  height: 60px;
  border: 2px solid #666;
  border-radius: 10px;
  padding: 0 20px;
  font-size: 18px;
  &::placeholder {
    color: #bababa;
  }

  &:focus {
    outline-color: #666;
  }
`;
