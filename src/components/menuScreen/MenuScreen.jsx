import React, { useState } from 'react';
import * as S from './MenuScreenStyle';

function MenuScreen({ isOpen, closeMenuScreen }) {
  if (!isOpen) return null; // isOpen이 false면 렌더링 안 함
  return (
    <S.Wrapper>
      <S.CancelButton onClick={closeMenuScreen} />
      <S.Title>MENU</S.Title>
      <S.List>
        <S.Text>서비스명과 채팅하기</S.Text>
        <S.Text>도전! 결정 장애 극복!</S.Text>
        <S.Text>나의 결정 장애 극복 랭킹은?</S.Text>
      </S.List>
    </S.Wrapper>
  );
}
export default MenuScreen;
