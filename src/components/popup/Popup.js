import React, { useState } from "react";
import "./Popup.css";

const options = [
  ["E", "I"],
  ["N", "S"],
  ["T", "F"],
  ["J", "P"],
];

const Popup = ({ onClose }) => {
  const [selected, setSelected] = useState(["", "", "", ""]);

  const handleSelect = (rowIndex, value) => {
    const newSelection = [...selected];
    newSelection[rowIndex] = value;
    setSelected(newSelection);
  };

  const isComplete = selected.every((val) => val !== "");

  const handleConfirm = () => {
    if (!isComplete) return;

    fetch("/chat/mbti", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ result: selected.join("") }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success:", data);
        onClose();
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="popup">
      <div className="popup-content">
        {options.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((option) => (
              <button
                key={option}
                className={`option ${selected[rowIndex] === option ? "selected" : ""}`}
                onClick={() => handleSelect(rowIndex, option)}
              >
                {option}
              </button>
            ))}
          </div>
        ))}
        <button className="confirm" onClick={handleConfirm} disabled={!isComplete}>
          확인
        </button>
        <button className="close" onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default Popup;
