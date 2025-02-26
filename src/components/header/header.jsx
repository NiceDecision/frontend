import React from 'react';
import * as S from './headerStyle';
import HeaderTitile from './headerTitle';
import { IoMenu } from 'react-icons/io5';

function Header() {
  return (
    <S.Wrapper>
      <S.Left>
        <S.MbtiButton>MBTI</S.MbtiButton>
        <S.Date>2025.02.26</S.Date>
      </S.Left>
      <HeaderTitile />
      <S.MenuButton>
        <IoMenu size={32} />
      </S.MenuButton>
    </S.Wrapper>
  );
}
export default Header;
