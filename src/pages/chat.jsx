import React from 'react';
import * as S from './chatStyle';
import Header from '../components/header/header';
import { IoSend } from 'react-icons/io5';

function Chat() {
  return (
    <S.Wrapper>
      <Header />
      <S.Container>
        <S.ChatBody>
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
