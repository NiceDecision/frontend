import React, { useEffect, useRef, useState } from 'react';
import * as S from './chatStyle';
import Header from '../components/header/header';

function Chat() {
  const [messages, setMessages] = useState([]); // 메시지 상태
  const [input, setInput] = useState(""); // 입력값 상태
  const [isComposing, setIsComposing] = useState(false); // 한글 입력 중인지 여부
  const chatBodyRef = useRef(null);

  // 스크롤 자동 이동
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  // 서버에서 최초 메시지 가져오기
  /*
  useEffect(() => {
    fetch("/chat/luck")
      .then((res) => res.json())
      .then((data) => {
        if (data.code === 200) {
          setMessages((prev) => {
            const newMessages = [
              ...prev,
              { sender: "bot", text: data.message },
              { sender: "bot", text: data.data.todayLuck }
            ];
            console.log("대화 내용:", newMessages);
            return newMessages;
          });
        }
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);
  */

  // 메시지 전송 핸들러
  const sendMessage = async () => {
    if (!input.trim()) return;

    const currentInput = input; // 현재 입력값 저장
    const userMessage = { sender: "user", text: currentInput };

    // 사용자 메시지 추가 및 콘솔 출력
    setMessages((prev) => {
      const newMessages = [...prev, userMessage];
      console.log("대화 내용:", newMessages);
      return newMessages;
    });
    setInput("");

    try {
      const response = await fetch("/chat/question", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: currentInput }),
      });

      const data = await response.json();

      if (data.code === 200) {
        // 봇 응답이 사용자 메시지와 동일하면 추가하지 않음
        if (data.message !== currentInput) {
          const botMessage = { sender: "bot", text: data.message };
          setMessages((prev) => {
            const newMessages = [...prev, botMessage];
            console.log("대화 내용:", newMessages);
            return newMessages;
          });
        } else {
          console.log("봇 응답이 사용자 메시지와 동일하여 추가하지 않습니다.");
        }
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <S.Wrapper>
      <Header />
      <S.Container>
        <S.ChatBody ref={chatBodyRef}>
          {messages.map((msg, index) =>
            msg.sender === "bot" ? (
              <S.LeftChat key={index}>{msg.text}</S.LeftChat>
            ) : (
              <S.RightChat key={index}>{msg.text}</S.RightChat>
            )
          )}
        </S.ChatBody>

        <S.ChatInputContainer>
          <S.ChatInputBar>
            <S.ChatInput
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onCompositionStart={() => setIsComposing(true)}
              onCompositionEnd={() => setIsComposing(false)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !isComposing) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              placeholder="메시지를 입력하세요..."
            />
            <S.SendButton onClick={sendMessage}>전송</S.SendButton>
          </S.ChatInputBar>
        </S.ChatInputContainer>
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
