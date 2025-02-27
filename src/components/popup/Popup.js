import React, { useState } from 'react';
import './Popup.css';
import * as S from '../menuScreen/MenuScreenStyle';

const options = [
  ['E', 'I'],
  ['N', 'S'],
  ['T', 'F'],
  ['J', 'P'],
];

const Popup = ({ closeMbtiPopup }) => {
  const [selected, setSelected] = useState(['', '', '', '']);

  const handleSelect = (rowIndex, value) => {
    const newSelection = [...selected];
    newSelection[rowIndex] = value;
    setSelected(newSelection);
  };

  const isComplete = selected.every((val) => val !== '');

  const handleConfirm = () => {
    if (!isComplete) return;
    const MBTI = selected.join('');
    console.log(MBTI);
    localStorage.setItem('MBTI', MBTI);
    closeMbtiPopup();
  };

  return (
    <div className="popup-wrapper">
      <div className="popup">
        <div className="popup-content">
          <p>딱대봇의 성격을 정해주세요.</p>
          {options.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
              {row.map((option) => (
                <button
                  key={option}
                  className={`option ${
                    selected[rowIndex] === option ? 'selected' : ''
                  }`}
                  onClick={() => handleSelect(rowIndex, option)}
                >
                  {option}
                </button>
              ))}
            </div>
          ))}
          <button
            className="confirm"
            onClick={handleConfirm}
            disabled={!isComplete}
          >
            확인
          </button>
          <S.CancelButton onClick={closeMbtiPopup} />
        </div>
      </div>
    </div>
  );
};

export default Popup;
