import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { modalClose } from '../redux/ModalSlice';
import { clearCart } from '../redux/cartSlice';

const ModalCon = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
`;

const ModalMessage = styled.div`
  margin-bottom: 20px;
`;

const ModalBtn = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: blue;
  color: white;

  &:hover {
    background: darkblue;
  }

  &:first-child {
    background: red;

    &:hover {
      background: darkred;
    }
  }
`;

const Modal = () => {
  const isOpen = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(modalClose());
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    dispatch(modalClose());
  };

  if (!isOpen) return null;

  return (
    <ModalCon>
      <ModalContent>
        <ModalMessage>담아두신 모든 음반을 삭제하시겠습니까?</ModalMessage>
        <ModalBtn>
          <Button onClick={handleClearCart}>네</Button>
          <Button onClick={handleClose}>아니요</Button>
        </ModalBtn>
      </ModalContent>
    </ModalCon>
  );
};

export default Modal;
