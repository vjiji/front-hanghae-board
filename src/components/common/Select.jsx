import { forwardRef, useState } from 'react';
import styled from 'styled-components';
import toggleIcon from 'assets/select-toggle-icon.svg';

const Select = forwardRef(
  ({ options, handleOptionSelect }, ref) => {
    const [toggleOpen, setToggleOpen] =
      useState(false);

    const handleClickOption = (item) => {
      handleOptionSelect(item);
      setToggleOpen(false);
    };

    return (
      <SelectLayout>
        <InputStyle
          readOnly
          ref={ref}
          placeholder="카테고리 선택"
          onClick={() =>
            setToggleOpen(!toggleOpen)
          }
        />
        <ToggleIcon $turned={toggleOpen}>
          <img
            src={toggleIcon}
            alt="toggle icon"
          />
        </ToggleIcon>
        {toggleOpen && (
          <OptionsBox>
            {options.map((item, index) => (
              <div
                className={`select-option ${index === options.length - 1 && 'select-option--last'}`}
                key={`${item}_${index}`}
                onClick={() =>
                  handleClickOption(item)
                }
              >
                {item}
              </div>
            ))}
          </OptionsBox>
        )}
      </SelectLayout>
    );
  },
);

Select.displayName = Select;

export default Select;

const SelectLayout = styled.div`
  width: 361px;
`;

const InputStyle = styled.input`
  width: 100%;
  height: 60px;
  padding: 0 20px;
  border: none;
  border-bottom: 2px solid #666;
  font-size: 18px;
  cursor: pointer;

  &::placeholder {
    color: #bababa;
  }

  &:focus {
    outline-color: transparent;
  }
`;

const ToggleIcon = styled.div`
  width: 100%;
  position: relative;

  img {
    position: absolute;
    top: -40px;
    right: 0px;

    ${({ $turned }) =>
      $turned && 'rotate: 180deg;'}
  }
`;

const OptionsBox = styled.div`
  width: 381px;
  position: absolute;
  margin: 10px 0;
  margin-left: -10px;
  border: 2px solid #666;
  border-radius: 10px;
  background-color: #fff;

  .select-option {
    height: 50px;
    padding: 0 30px;
    border-bottom: 1px solid #666;
    display: flex;
    align-items: center;
    font-size: 18px;
    cursor: pointer;

    &:hover {
      background: rgb(185, 235, 255, 0.2);
    }
  }
  .select-option--last {
    border: none;
  }
`;
