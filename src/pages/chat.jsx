import React, { useEffect, useRef, useState } from 'react';
import * as S from './chatStyle';
import Header from '../components/header/header';
import api from '../api/axios';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [question, setQuestion] = useState('');
  const chatBodyRef = useRef(null);
  const gpt_mbti = localStorage.getItem('gpt_mbti');

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const cleanResponse = (text) => {
    return text.replace(/[@#$%^&*()_+=\-[\]{};':"\\|<>/`]/g, ''); // ❌ 제외할 문자 목록
  };

  // GPT 응답 가져오기
  const fetchData = async (userQuestion) => {
    const requestData = {
      userId: parseInt(localStorage.getItem('userId')),
      question: userQuestion,
      MBTI: gpt_mbti,
    };
    try {
      const response = await api.post('/chat/question', requestData);
      const cleanedMessage = cleanResponse(response.data); // ✅ 문자 정리

      setMessages((prevArr) => [
        ...prevArr,
        { role: 'bot', message: cleanedMessage },
      ]);
    } catch (e) {
      console.log(e);
    }
  };

  // 사용자가 메시지 전송
  const sendHumanMessage = () => {
    if (!question.trim()) return; // 빈 메시지 전송 방지

    const userMessage = question; // 현재 입력된 질문 저장
    setMessages((prevArr) => [
      ...prevArr,
      { role: 'human', message: userMessage },
    ]);

    console.log(messages);

    setQuestion(''); // 입력창 비우기

    fetchData(userMessage); // API 호출 (question이 초기화되므로 userMessage 사용)
  };

  return (
    <S.Wrapper>
      <Header />
      <S.Container>
        <S.ChatBody ref={chatBodyRef}>
          {messages.map((msg, index) =>
            msg.role === 'bot' ? (
              <S.LeftChat key={index}>{msg.message}</S.LeftChat>
            ) : (
              <S.RightChat key={index}>{msg.message}</S.RightChat>
            )
          )}
        </S.ChatBody>

        <S.ChatInputContainer>
          <S.ChatInputBar>
            <S.ChatInput
              value={question}
              placeholder="메시지를 입력하세요."
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendHumanMessage()}
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
