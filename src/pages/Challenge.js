import React, { useState, useEffect } from "react";
import "./Challenge.css";
import Header from "../components/header/customHeader";
import { aiApiClient,api } from '../api/axios';

const ChoicePage = () => {
  const [questCount, setQuestCount] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [choices, setChoices] = useState([]); // 전체 데이터를 배열로 저장
  const [currentChoice, setCurrentChoice] = useState({ option1: "로딩 중...", option2: "로딩 중..." });

  // fastAPI에서 5개의 "A vs B" 데이터를 가져와서 가공
  const fetchChoices = async () => {
    try {
      const response = await aiApiClient.get("/ai/choice"); // 5개 데이터 받아오기
      console.log("data:", JSON.stringify(response.data, null, 2));

      if (Array.isArray(response.data) && response.data.length >= 5) {
        // "A vs B" 형식의 데이터를 { option1: "A", option2: "B" } 형식으로 변환
        const formattedChoices = response.data.map(item => {
          const [option1, option2] = item.split(" vs ");
          return { option1, option2 };
        });

        setChoices(formattedChoices); // 전체 데이터 저장
        setCurrentChoice(formattedChoices[0]); // 첫 번째 선택지 표시
      } else {
        console.error("올바른 데이터 형식이 아님:", response.data);
      }
    } catch (error) {
      console.error("데이터를 가져오는 중 오류 발생:", error);
    }
  };

  useEffect(() => {
    fetchChoices(); // 컴포넌트가 처음 렌더링될 때 데이터 불러오기
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
      const missionCnt = questCount + 1;
      setQuestCount(missionCnt);

      // 새로운 선택지 설정
      if (choices.length > missionCnt) {
        setCurrentChoice(choices[missionCnt]);
      }

      const response = await api.post("/mission", { missionCnt, missionPnt: 100, userId: 5 });
      console.log("mission count:", response.data);

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
            {currentChoice.option1}
          </button>
          <div className="vs-text">vs</div>
          <button className="choice-button option2" onClick={handleClick}>
            {currentChoice.option2}
          </button>
        </div>
        <div className="toast" style={{ display: showToast ? "block" : "none" }}>100P 획득!</div>
      </div>
    </>
  );
};

export default ChoicePage;
