import React, { useState } from 'react';
import * as S from './headerStyle';
import HeaderTitile from './headerTitle';
import MenuScreen from '../menuScreen/MenuScreen'; 

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function openMenuScreen() {
    setIsOpen(true);
  }
  function closeMenuScreen() {
    setIsOpen(false);
  }
  return (
    <>
      <S.Wrapper>
        <S.Left>  {/* 왼쪽 요소를 감싸는 컨테이너 */}
          <HeaderTitile />
        </S.Left>
        <S.MenuButton onClick={openMenuScreen}>
          <S.MenuButtonIcon />
        </S.MenuButton>
      </S.Wrapper>

      {isOpen ? (
        <MenuScreen isOpen={isOpen} closeMenuScreen={closeMenuScreen} />
      ) : (
        ''
      )}
    </>
  );
}
export default Header;
