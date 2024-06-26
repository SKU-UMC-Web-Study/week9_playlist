import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Music from './components/music';
import Modal from './components/modal';
import { modalOpen } from './redux/ModalSlice';
import './App.css';
const ClearCartButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: red;
  color: white;
  margin-top: 20px;

  &:hover {
    background: darkred;
  }
`;
const BtnCon = styled.div`
  display:flex;
  align-items: center;
  justify-content:center;

`
function App() {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(modalOpen());
  };


  return (
    <>
      <Music/>
      <BtnCon>
      <ClearCartButton onClick={handleOpenModal}>장바구니 비우기</ClearCartButton>
      </BtnCon>
      
      <Modal />
    </>
  )
}

export default App
