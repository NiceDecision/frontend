import styled from 'styled-components';
import { IoMenu } from 'react-icons/io5';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 96vw;
  padding: 2vh 2vw;
  justify-content: flex-end; /* 왼쪽 요소가 공간을 차지하면 메뉴 버튼을 오른쪽으로 밀어줌 */
  height: clamp(64px, 4vh, 72px);
  background-color: #f5f1ed;
`;

export const Left = styled.div`
  display: flex;
  gap: 2vw;
  align-items: center;
  flex-grow: 1; /* 왼쪽 요소가 공간을 차지하도록 확장 */
`;  

export const MenuButton = styled.div`
  z-index: 2;
  margin-left: auto; /* 왼쪽 요소가 존재하는 경우 오른쪽으로 정렬 */
`;

export const MenuButtonIcon = styled(IoMenu)`
  width: 32px;
  height: 32px;
  cursor: pointer;
  color: #a99985;
`;
