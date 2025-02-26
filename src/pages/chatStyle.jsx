import styled, { keyframes } from 'styled-components';
import { IoSend } from 'react-icons/io5';

const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

export const Wrapper = styled.div`
  animation: ${fadeIn} 0.4s ease-in-out;
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
`;
export const Container = styled.div`
  max-width: 1360px;
  width: 70vw;
`;

export const ChatBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;
  width: 100%;
  max-height: 76vh;
  padding-bottom: 2.4vh;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const LeftChat = styled.div`
  padding: 1vh 2vw;
  left: 0;
  background-color: #dbd2bc;
  max-width: 600px;
  width: max-content;
  border-radius: 32px;
  overflow-wrap: break-word;
`;
export const RightChat = styled.div`
  align-self: flex-end;
  width: max-content;
  padding: 1vh 2vw;
  right: 0px;
  background-color: #a99985;
  max-width: 600px;
  border-radius: 32px;
  overflow-wrap: break-word;
`;

export const ChatInputContainer = styled.div`
  max-width: 1360px;
  width: 70vw;
  background-color: #dbd2bc;
  border-radius: 4vh;
`;
export const ChatInputBar = styled.div`
  margin-top: 2vh;
  display: flex;
  align-items: center;
  margin: 0vh 1vw;
  justify-content: space-between;
`;

export const ChatInput = styled.input`
  background-color: #dbd2bc;
  border: none;
  width: calc(100% - 4.8vw);
  height: 32px;
  text-align: left; /* 왼쪽 정렬 강제 적용 */
  outline: none;
`;
export const SendButton = styled(IoSend)`
  cursor: pointer;
  background-color: #a99985;
  padding: 0.4vh 0.4vh;
  border-radius: 10px;
`;
