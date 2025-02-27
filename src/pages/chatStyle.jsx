import styled, { keyframes, css } from 'styled-components';
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
  height: 100vh;
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
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;
export const LeftChat = styled.div`
  padding: 0vh 2vw;
  left: 0;
  background-color: #dbd2bc;
  max-width: 100%;
  width: max-content;
  max-width: 600px;
  border-radius: 32px;
  overflow-wrap: break-word;
  background: ${({ isLoading }) =>
    isLoading
      ? 'linear-gradient(90deg, #A99985, #dbd2bc, #DBD2BC)'
      : '#dbd2bc'};
  background-size: 200% 200%;
  transition: background 0.3s ease;

  ${({ isLoading }) =>
    isLoading &&
    css`
      animation: ${gradientAnimation} 2s linear infinite;
    `}
`;
export const RightChat = styled.div`
  padding: 0vh 2vw;
  background-color: #a99985;
  max-width: 100%;
  border-radius: 32px;
  overflow-wrap: break-word;
  align-self: flex-end;
  width: max-content;
  max-width: 600px;
`;

export const ChatInputContainer = styled.div`
  max-width: 1360px;
  width: 70vw;
  background-color: #dbd2bc;
  border-radius: 4vh;
  bottom: 4vh;
  position: absolute;
`;
export const ChatInputBar = styled.div`
  margin-bottom: 2vh;
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
export const SendButton = styled.button`
  cursor: pointer;
  background-color: #a99985;
  padding: 0.8vh 1vh;
  border-radius: 10px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(0.92);
    transition: transform 0.2s ease;
  }
`;

export const SendIcon = styled(IoSend)`
  font-size: 1.2rem;
  color: #f5f1ed;
`;
