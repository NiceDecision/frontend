import React, { useEffect, useRef } from 'react';
import * as S from './chatStyle';
import Header from '../components/header/header';

function Chat() {
  const chatBodyRef = useRef(null);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, []);

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
          <S.RightChat>
            asdfadsfasdfasdfasdfadsfasdfasdfasdfadsfasdfasdfasdfadsfasdfasdfasdfadsfasdfasdfasdfadsfasdfasdfasdfadsfasdfasdfasdfadsfasdfasdfasdfadsfasdfasdfasdfadsfasdfasdfasdfadsfasdfasdfasdfadsfasdfasdfasdfadsfasdfasdf
          </S.RightChat>
        </S.ChatBody>
      </S.Container>
      <S.ChatInputContainer>
        <S.ChatInputBar>
          <S.ChatInput />
          <S.SendButton />
        </S.ChatInputBar>
      </S.ChatInputContainer>
    </S.Wrapper>
  );
}
export default Chat;
