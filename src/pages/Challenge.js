import React, { useState, useEffect } from "react";
import "./Challenge.css";
import Header from "../components/header/customHeader";

const ChoicePage = () => {
  const [questCount, setQuestCount] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [choices, setChoices] = useState({ option1: "로딩 중...", option2: "로딩 중..." });

  // 서버에서 양자택일 데이터를 가져오기
  const fetchChoices = async () => {
    try {
      const response = await fetch("/mission");
      if (!response.ok) {
        throw new Error("데이터를 불러오는 데 실패했습니다.");
      }
      const data = await response.json();
      setChoices(data);
    } catch (error) {
      console.error("데이터를 가져오는 중 오류 발생:", error);
    }
  };

  // 서버에서 기존 questCount 값을 가져오는 함수 추가 (GET 요청)
  const fetchQuestCount = async () => {
    try {
      const response = await fetch("/challenge"); // GET 방식 요청
      if (!response.ok) {
        throw new Error("questCount 데이터를 불러오는 데 실패했습니다.");
      }
      const data = await response.json();
      // 예: 서버 응답이 { questCount: 3 } 형태라고 가정
      setQuestCount(data.questCount);
    } catch (error) {
      console.error("questCount 데이터를 가져오는 중 오류 발생:", error);
    }
  };
  useEffect(() => {
    fetchChoices();
    fetchQuestCount();
  }, []);

  useEffect(() => {
    if (questCount === 5) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  }, [questCount]);

  const handleClick = async () => {
    if (questCount >= 5) return;
    try {
      const newCount = questCount + 1;
      setQuestCount(newCount);

      const response = await fetch("/challenge", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newCount }),
      });

      if (!response.ok) {
        throw new Error("서버 응답이 올바르지 않습니다.");
      }

      fetchChoices();
    } catch (error) {
      console.error("Error:", error);
      alert("네트워크 오류가 발생했습니다.");
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <h1 className="title">오늘 극복한 퀘스트 수 {questCount} / 5</h1>
        <div className="button-container">
          <button className="choice-button option1" onClick={handleClick}>
            {choices.option1}
          </button>
          <div className="vs-text">vs</div>
          <button className="choice-button option2" onClick={handleClick}>
            {choices.option2}
          </button>
        </div>
        <div className="toast" style={{ display: showToast ? "block" : "none" }}>100P 획득!</div>
      </div>
    </>
  );
};

export default ChoicePage;