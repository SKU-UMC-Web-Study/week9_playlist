import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { CartIcon, ChevronDown, ChevronUp } from '../constants/icons';
import { increase, decrease, calculateTotals } from '../redux/thunk';
import {fetchMusic} from '../redux/thunk';
import Error from './error';
import Loading from './loading'
const Container = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  padding: 10px;
`;

const Navbar = styled.nav`
  width: 100%; 
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: blue;
  color: white;
`;

const MusicContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px; 
`;

const MusicList = styled.div`
  display: flex;
  flex-direction: column;
`;

const MusicCon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  margin: 20px 0; 
`;

const MusicCover = styled.img`
  width: 120px;
  height: 120px;
`;

const MusicDetail = styled.div`
  flex: 1;
  margin-left: 20px;
`;

const ChangeCon = styled.div`
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 4px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:focus {
    outline: none;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

const CartCon = styled.div`
position: relative;
width: 60px;
cursor: pointer;
color: white;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const CartItemCount = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color:#84C2FF;
  color: white;
  border-radius: 50%;
  padding: 5px;
  font-size: 20px;
`;

const Music = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchMusic());
  },[dispatch]);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cart.items, dispatch]);

  

  return (
    <>
      <Navbar>
        <h2>Ssoy playlist</h2>
        <CartCon>
          <CartIcon  />
          <CartItemCount>{cart.totalQuantity}</CartItemCount>
        </CartCon>
      </Navbar>
      
      <Container>
      {cart.loading ? (
          <Loading/>
        ) : cart.error ? (
          <Error/>
        ) : (
        <MusicContainer>
          <MusicList>
            <h2>당신이 선택한 음반</h2>
            {cart.items.map((music) => (
              <MusicCon key={music.id}>
                <MusicCover src={music.img} alt={music.title} />
                <MusicDetail>
                  <p>{music.title} | {music.singer}</p>
                  <p>W{music.price}</p>
                </MusicDetail>
                <ChangeCon>
                  <IconButton onClick={() => dispatch(increase(music))}>
                    <ChevronUp />
                  </IconButton>
                  <p>{music.amount}</p>
                  <IconButton onClick={() => dispatch(decrease(music))}>
                    <ChevronDown />
                  </IconButton>
                </ChangeCon>
              </MusicCon>
            ))}
          </MusicList>
          <hr />
          <Total>
            <p>총 가격</p>
            <p>W{cart.totalAmount}</p>
          </Total>
          
        </MusicContainer>
        )}
      </Container>
    </>
  );
};

export default Music;
