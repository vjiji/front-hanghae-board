import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import CloseIcon from 'icons/close-icon.svg';

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
  margin-top: 20px;

  &:hover {
    background-color: #2d2d2d;
  }

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

// 모달 <닫기 X> 버튼 import해서 쓰면됩니다!

export const StyledCloseButton = styled.button`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 10px;
  right: 10px;
  background-image: url(${CloseIcon});
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 30px 30px;
  border: none;
  cursor: pointer;
`;

// 스크롤 상단 이동 버튼

export const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '80px',
        border: '1px solid #000',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        background: '#000',
        color: '#FFF',
        fontSize: '18px',
      }}
    >
      Top
    </button>
  );
};
