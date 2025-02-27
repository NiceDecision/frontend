import React from 'react';
import * as S from './headerStyle';
import HeaderTitile from './headerTitle';
import { IoMenu } from 'react-icons/io5';

function Header() {
  return (
    <S.Wrapper>
      <HeaderTitile />
      <S.MenuButton>
        <IoMenu size={32} />
      </S.MenuButton>
    </S.Wrapper>
  );
}
export default Header;
