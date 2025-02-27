import React, { useState } from 'react';
import * as S from './headerStyle';
import HeaderTitile from './headerTitle';
import MenuScreen from '../menuScreen/MenuScreen';
import Popup from '../popup/Popup';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  function openMenuScreen() {
    setIsOpen(true);
  }
  function closeMenuScreen() {
    setIsOpen(false);
  }
  function openMbtiPopup() {
    setShowPopup(true);
  }
  const today = new Date().toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  return (
    <>
      <S.Wrapper>
        <S.Left>
          <S.MbtiButton onClick={openMbtiPopup}>MBTI</S.MbtiButton>
          <S.Date>{today}</S.Date>
        </S.Left>
        <HeaderTitile />
        <S.MenuButton onClick={openMenuScreen}>
          <S.MenuButtonIcon />
        </S.MenuButton>
      </S.Wrapper>
      {isOpen ? (
        <MenuScreen isOpen={isOpen} closeMenuScreen={closeMenuScreen} />
      ) : (
        ''
      )}
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
    </>
  );
}
export default Header;
