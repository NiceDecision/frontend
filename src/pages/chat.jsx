import React, { useEffect, useRef } from 'react';
import * as S from './chatStyle';
import Header from '../components/header/header';

function Chat() {
  const chatBodyRef = useRef(null);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, []); // 컴포넌트 마운트 시 실행 (새로고침 포함)
  return (
    <S.Wrapper>
      <Header />
      <S.Container>
        <S.ChatBody ref={chatBodyRef}>
          <S.LeftChat>asdfadsfasf</S.LeftChat>
          <S.RightChat>asdfadsfasdfasdf</S.RightChat>
          <S.LeftChat>asdfadsfasf</S.LeftChat>
          <S.RightChat>asdfadsfasdfasdf</S.RightChat>
          <S.LeftChat>asdfadsfasf</S.LeftChat>
          <S.RightChat>
            asdfadsfasdfasdfasdfadsfasdfasdfasdfadsfasdfasdfasdfadsfasdfasdfasdfadsfasdfasdfasdfadsfasdfasdfasdfadsfasdfasdfasdfadsfasdfasdfasdfadsfasdfasdfasdfadsfasdfasdfasdfadsfasdfasdfasdfadsfasdfasdfasdfadsfasdfasdf
          </S.RightChat>
          <S.LeftChat>asdfadsfasf</S.LeftChat>
          <S.RightChat>asdfadsfasdfasdf</S.RightChat>
          <S.LeftChat>asdfadsfasf</S.LeftChat>
          <S.RightChat>asdfadsfasdfasdf</S.RightChat>
          <S.LeftChat>asdfadsfasf</S.LeftChat>
          <S.RightChat>
            asdfadsfasdfasdfasdfadsfasdfasdfasdfadsfasdfasdfasdfadsfasdfasdfasdfadsfasdfasdfasdfadsfasdfasdfasdfadsfasdfasdfasdfadsfasdfasdfasdfadsfasdfasdfasdfadsfasdfasdfasdfadsfasdfasdfasdfadsfasdfasdfasdfadsfasdfasdf
          </S.RightChat>
          <S.LeftChat>asdfadsfasf</S.LeftChat>
          <S.RightChat>
            asdfadsfasdfasdfasdfadsfasdfasdfasdfadsfasdfasdfasdfadsfasdfasdfasdfadsfasdfasdfasdfadsfasdfasdfasdfadsfasdfasdfasdfadsfasdfasdfasdfadsfasdfasdfasdfadsfasdfasdfasdfadsfasdfasdfasdfadsfasdfasdfasdfadsfasdfasdf
          </S.RightChat>
        </S.ChatBody>
        <S.ChatInputContainer>
          <S.ChatInputBar>
            <S.ChatInput />
            <S.SendButton />
          </S.ChatInputBar>
        </S.ChatInputContainer>
      </S.Container>
    </S.Wrapper>
  );
}
export default Chat;
