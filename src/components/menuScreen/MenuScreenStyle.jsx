import styled, { keyframes } from 'styled-components';
import { MdOutlineCancel } from 'react-icons/md';

const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

export const Wrapper = styled.div`
  animation: ${fadeIn} 0.4s ease-in;
  background-color: #dbd2bc80;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  position: fixed;
  align-items: center;
  z-index: 3;
  top: 0;
`;
export const CancelButton = styled(MdOutlineCancel)`
  width: 32px;
  height: 32px;
  cursor: pointer;
  position: fixed;
  top: 4vh;
  right: 2vw;
`;

export const Title = styled.div`
  font-weight: 700;
  margin-top: 32vh;
  z-index: 4;
  font-size: 40px;
`;
export const List = styled.div`
  margin-top: 4vh;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  gap: 8vh;
  align-items: center;
  background-color: #dbd2bc;
  box-shadow: 0px 0px 3vh 4vw #dbd2bc;
`;
export const Text = styled.div`
  font-size: 20px;
  cursor: pointer;
`;
