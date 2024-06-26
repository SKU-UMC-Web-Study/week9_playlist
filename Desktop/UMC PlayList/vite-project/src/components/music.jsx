import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { CartIcon, ChevronDown, ChevronUp } from '../constants/icons';
import { increase, decrease, removeItem, calculateTotals } from '../redux/cartSlice';

const Container = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  padding: 10px;
`;

const Navbar = styled.nav`
  width: 100%; /* Navbar가 전체 너비를 차지하도록 설정 */
  display: flex;
  justify-content: space-between;
  padding: 10px;
  
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
display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
`
const Music = () => {
  const musicList = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <>
    <Navbar>
        <p>Ssoy playlist</p>
        
    </Navbar>
    
    <Container>
      
      <MusicContainer>
        <MusicList>
          <h2>당신이 선택한 음반</h2>
          {musicList.map((music) => (
            <MusicCon key={music.id}>
              <MusicCover src={music.img} alt={music.title} />
              <MusicDetail>
                <p>{music.title} | {music.singer}</p>
                <p>W{music.price}</p>
              </MusicDetail>
              <ChangeCon>
                <IconButton onClick={() => alert('Chevron Up clicked')}>
                  <ChevronUp />
                </IconButton>
                <p>{music.amount}</p>
                <IconButton onClick={() => alert('Chevron Down clicked')}>
                  <ChevronDown />
                </IconButton>
              </ChangeCon>
            </MusicCon>
          ))}
        </MusicList>
      </MusicContainer>
    </Container>
    </>
  );
};

export default Music;
