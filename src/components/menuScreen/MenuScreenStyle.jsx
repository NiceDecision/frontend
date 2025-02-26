import styled from 'styled-components';
import { MdOutlineCancel } from 'react-icons/md';

export const Wrapper = styled.div`
  background-color: #dbd2bc80;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  position: fixed;
  align-items: center;
  z-index: 3;
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
`;
export const List = styled.div`
  margin-top: 4vh;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  gap: 8vh;
  align-items: center;
  background-color: #dbd2bc;
  box-shadow: 0px 0px 64px 64px #dbd2bc;
`;
export const Text = styled.div`
  font-size: 16px;
  cursor: pointer;
`;
