import React, { useState } from "react";
import "./Challenge.css";

const ChoicePage = () => {
  const [questCount, setQuestCount] = useState(1);
  const [showToast, setShowToast] = useState(false);

  const handleClick = async (choice) => {
    try {
      const response = await fetch("/api/challenge", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ choice }),
      });
      if (response.ok) {
        const newCount = questCount + 1;
        setQuestCount(newCount);
        if (newCount === 5) {
          setShowToast(true);
          setTimeout(() => setShowToast(false), 3000);
        }
      } else {
        alert("오류가 발생했습니다.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("네트워크 오류가 발생했습니다.");
    }
  };

  return (
    <div className="container">
      <h1 className="title">오늘 극복한 퀘스트 수 {questCount} / 5</h1>
      <div className="button-container">
        <button className="choice-button mountain" onClick={() => handleClick("산")}>산</button> 
        <div className="vs-text">vs</div>
        <button className="choice-button sea" onClick={() => handleClick("바다")}>바다</button>
      </div>
      {showToast && <div className="toast">100P 획득!</div>}
    </div>
  );
};

export default ChoicePage;
