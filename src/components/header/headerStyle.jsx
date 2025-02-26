import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 96vw;
  padding: 2vh 2vw 2vh 2vw;
  justify-content: space-between;
`;
export const Left = styled.div`
  display: flex;
  gap: 2vw;
  align-items: center;
`;
export const MbtiButton = styled.button`
  background-color: #dbd2bc;
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
export const MenuButton = styled.div``;
