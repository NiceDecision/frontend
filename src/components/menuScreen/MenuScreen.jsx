import React from 'react';
import * as S from './MenuScreenStyle';
import { useNavigate } from 'react-router-dom';

function MenuScreen({ isOpen, closeMenuScreen }) {
  const nav = useNavigate();

  if (!isOpen) return null; // isOpen이 false면 렌더링 안 함

  return (
    <S.Wrapper>
      <S.CancelButton onClick={closeMenuScreen} />
      <S.Title>MENU</S.Title>
      <S.List>
        <S.Text
          onClick={() => {
            nav('/chat');
            closeMenuScreen();
          }}
        >
          서비스명과 채팅하기
        </S.Text>
        <S.Text
          onClick={() => {
            nav('/challenge');
            closeMenuScreen();
          }}
        >
          도전! 결정 장애 극복!
        </S.Text>
        <S.Text
          onClick={() => {
            nav('/rank');
            closeMenuScreen();
          }}
        >
          나의 결정 장애 극복 랭킹은?
        </S.Text>
      </S.List>
    </S.Wrapper>
  );
}
export default MenuScreen;
