import React, { useEffect } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 500ms;

  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;

  .popup-simple-inner {
    padding: 1rem;
    width: auto;
    height: auto;
    max-width: 80%;
    background: #fff;
    max-height: 90%;
    overflow-y: auto;
    border-radius: 5px;
    transition: all 1s ease-in-out;
    @media only screen and (max-width: 600px) {
      max-width: 100%;
      margin: 0.2rem;
    }
  }
  .popup-simple-header {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    font-weight: bold;
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 0.5rem;
    .close-button {
      transition: all 200ms;
      text-decoration: none;
      :hover {
        cursor: pointer;
        color: gray;
      }
    }
  }
  .popup-simple-content {
    display: flex;
    flex-direction: column;
  }
`;

interface Props {
  header: any;
  closePopup: () => void;
  children: any;
}

const PopupSimple: React.FC<Props> = ({ header, closePopup, children = '' }) => {
  useEffect(() => {
    const scrollY = window.scrollY + '';
    document.body.style.overflowY = 'hidden'

    return () => {
      document.body.style.top = '';
      document.body.style.overflowY = ''
      window.scrollTo(0, parseInt(scrollY || '0'));
    };
  }, []);

  const handleClose = () => {
    closePopup();
  };

  return (
    <Container className={'popup-simple'} onMouseDown={handleClose}>
      <div
        className={'popup-simple-inner'}
        onMouseDown={e => {
          e.stopPropagation();
        }}
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <div className={'popup-simple-header'}>
          <div>{header}</div>
          <a className={'close-button'} onClick={handleClose}>
            X
          </a>
        </div>
        <div className={'popup-simple-content'}>{children}</div>
      </div>
    </Container>
  );
};
export default PopupSimple;
