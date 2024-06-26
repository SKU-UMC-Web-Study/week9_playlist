import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { CartIcon, ChevronDown, ChevronUp } from '../constants/icons';
import { increase, decrease, removeItem, calculateTotals } from '../redux/cartSlice';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavBar = styled.nav`
  background-color: blue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const Logo = styled.div`
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

const CartButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: white;
`;

const MusicList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const MusicItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
`;

const MusicDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const MusicActions = styled.div`
  display: flex;
  align-items: center;
`;

const Music = () => {
  const musicList = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [musicList, dispatch]);

  const UpIcon = <ChevronUp />;
  const DownIcon = <ChevronDown />;

  return (
    <Container>
      <NavBar>
        <Logo>Music Store</Logo>
        <CartButton>
          <CartIcon />
        </CartButton>
      </NavBar>
      <MusicList>
        {musicList.map((music) => (
          <MusicItem key={music.id}>
            <MusicDetails>
              <span>{music.title}</span>
              <span>{music.singer}</span>
              <span>${music.price}</span>
            </MusicDetails>
            <MusicActions>
              <button onClick={() => dispatch(increase({ id: music.id }))}>{UpIcon}</button>
              <span>{music.amount}</span>
              <button onClick={() => dispatch(decrease({ id: music.id }))}>{DownIcon}</button>
              <button onClick={() => dispatch(removeItem({ id: music.id }))}>Remove</button>
            </MusicActions>
          </MusicItem>
        ))}
      </MusicList>
    </Container>
  );
};

export default Music;
