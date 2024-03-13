import styled from 'styled-components';

const Input = ({
  placeholder,
  value,
  handleChangeInput,
  ...props
}) => {
  return (
    <InputStyles
      placeholder={placeholder}
      value={value}
      onChange={handleChangeInput}
      {...props}
    />
  );
};

export default Input;

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
