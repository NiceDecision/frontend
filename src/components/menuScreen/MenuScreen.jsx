import React from 'react';
import * as S from './MenuScreenStyle';
import { useNavigate } from 'react-router-dom';

function MenuScreen({ isOpen, closeMenuScreen }) {
  const nav = useNavigate();

  function selectPage(link) {
    if (window.location.href.includes(link)) {
      closeMenuScreen();
    } else {
      nav(link);
    }
  }

  if (!isOpen) return null; // isOpen이 false면 렌더링 안 함

  return (
    <S.Wrapper>
      <S.CancelButton onClick={closeMenuScreen} />
      <S.Container>
        <S.Title>MENU</S.Title>
        <S.List>
          <S.Text
            onClick={() => {
              selectPage('/chat');
            }}
          >
            딱대봇과 채팅하기
          </S.Text>
          <S.Text
            onClick={() => {
              selectPage('/challenge');
            }}
          >
            도전! 결정 장애 극복!
          </S.Text>
          <S.Text
            onClick={() => {
              selectPage('/rank');
            }}
          >
            나의 결정 장애 극복 랭킹은?
          </S.Text>
        </S.List>
      </S.Container>
    </S.Wrapper>
  );
}
export default MenuScreen;
