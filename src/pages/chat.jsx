import React, { useEffect, useRef, useState } from 'react';
import * as S from './chatStyle';
import Header from '../components/header/header';
import { api } from '../api/axios';
import ReactMarkdown from 'react-markdown';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [question, setQuestion] = useState('');
  const chatBodyRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const cleanResponse = (text) => {
    return text.replace(/[\\n\\r"{}]/g, '');
  };

  // GPT 응답 가져오기
  const fetchData = async (userQuestion) => {
    setIsLoading(true);
    const requestData = {
      userId: parseInt(localStorage.getItem('userId')),
      question: userQuestion,
      MBTI: localStorage.getItem('MBTI'),
    };
    console.log(requestData);
    try {
      const response = await api.post('/chat/question', requestData);
      const clean = cleanResponse(response.data);
      console.log(response.data);
      setMessages((prevArr) => [
        ...prevArr.slice(0, -1),
        { role: 'bot', message: clean },
      ]);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  function printfirstChat() {
    if (localStorage.getItem('firstChat') === 'true') {
      localStorage.setItem('MBTI', 'INFJ');
      setMessages((prevArr) => [
        ...prevArr,
        { role: 'bot', message: '...' }, // 🔹 로딩 메시지 추가
      ]);
      fetchData(
        '2025년 2월 28일 내 운세는 어때? 앞으로 쭉 MBTI 관련된 얘기는 절대 하지 말아줘'
      );
    }
    localStorage.setItem('firstChat', false);
  }

  useEffect(() => {
    printfirstChat();
  }, []);

  const [isSending, setIsSending] = useState(false); // 🔹 전송 중 여부 상태 추가

  // 사용자가 메시지 전송
  const sendHumanMessage = () => {
    if (!question.trim() || isSending) return; // 🔹 빈 입력 또는 전송 중일 때 방지

    setIsSending(true); // 🔹 전송 시작
    const userMessage = question.trim(); // 🔹 불필요한 공백 제거
    setMessages((prevArr) => [
      ...prevArr,
      { role: 'human', message: userMessage },
      { role: 'bot', message: '...' }, // 🔹 로딩 메시지 추가
    ]);

    setTimeout(() => setQuestion(''), 0); // 🔹 입력 필드 강제 초기화 (비동기 처리)
    fetchData(userMessage).finally(() => setIsSending(false));
  };

  return (
    <S.Wrapper>
      <Header />
      <S.Container>
        <S.ChatBody ref={chatBodyRef}>
          {messages.map((msg, index) =>
            msg.role === 'bot' ? (
              <S.LeftChat key={index} isLoading={msg.message === '...'}>
                <ReactMarkdown>
                  {isLoading && msg.message === '...'
                    ? 'Loading...'
                    : msg.message}
                </ReactMarkdown>
              </S.LeftChat>
            ) : (
              <S.RightChat key={index}>
                <ReactMarkdown>{msg.message}</ReactMarkdown>
              </S.RightChat>
            )
          )}
        </S.ChatBody>

        <S.ChatInputContainer>
          <S.ChatInputBar>
            <S.ChatInput
              value={question}
              placeholder="메시지를 입력하세요."
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault(); // 🔹 기본 이벤트 방지 (중복 실행 방지)
                  sendHumanMessage();
                }
              }}
            />
            <S.SendButton onClick={sendHumanMessage}>
              <S.SendIcon />
            </S.SendButton>
          </S.ChatInputBar>
        </S.ChatInputContainer>
      </S.Container>
    </S.Wrapper>
  );
}

export default Chat;
