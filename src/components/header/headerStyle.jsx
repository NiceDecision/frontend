import styled from 'styled-components';
import { IoMenu } from 'react-icons/io5';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 96vw;
  padding: 2vh 2vw 2vh 2vw;
  justify-content: space-between;
  height: clamp(64px, 4vh, 72px);
  background-color: #f5f1ed;
  top: 0px;
`;
export const Left = styled.div`
  display: flex;
  gap: 2vw;
  align-items: center;
`;
export const MbtiButton = styled.button`
  background-color:rgb(193, 181, 151);
  border: none;
  width: 120px;
  height: 32px;
  border-radius: 16px;
  cursor: pointer;
  &:hover {
    background-color: #a99985;
  }
  z-index: 2;
`;
export const Date = styled.div``;
export const MenuButton = styled.div`
  z-index: 2;
`;

export const MenuButtonIcon = styled(IoMenu)`
  width: 32px;
  height: 32px;
  cursor: pointer;
  color: #a99985;
`;
