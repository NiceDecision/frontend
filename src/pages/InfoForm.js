import { useState } from 'react';
import './InfoForm.css';
import { useNavigate } from 'react-router-dom';

export default function BirthInfoForm() {
  const nav = useNavigate();
  const [year, setyear] = useState('');
  const [month, setmonth] = useState('');
  const [date, setdate] = useState('');
  const [time, settime] = useState('');
  const [isLunar, setisLunar] = useState(null);
  const [gender, setGender] = useState(null);

  const handleSubmit = () => {
    if (isLunar === null) {
      alert('양력/음력을 선택해주세요.');
      return;
    }
    if (!year || !month || !date) {
      alert('생년월일을 입력해주세요.');
      return;
    }
    if (!time) {
      alert('태어난 시각을 선택해주세요.');
      return;
    }
    if (!gender) {
      alert('성별을 선택해주세요.');
      return;
    }

    const userData = {
      isLunar,
      year,
      month,
      date,
      time,
      gender,
    };
    
    fetch("/users", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => console.log('Success:', data))
      .catch((error) => console.error('Error:', error))
      .finally(() => nav('/chat'));
  };

  function controlLunar(value) {
    if (isLunar === value) {
      setisLunar(null);
    } else {
      setisLunar(value);
    }
  }
  function controlGender(value) {
    if (gender === value) {
      setGender(null);
    } else {
      setGender(value);
    }
  }

  return (
    <div className="container">
      <div className="form-box">
        <p>생년월일을 선택해주세요.</p>
        <div className="input-group">
          <div className="input-gap">
            <input
              type="number"
              min="1900"
              max="2100"
              value={year}
              onChange={(e) => setyear(e.target.value)}
              placeholder="생년"
            />
            년
          </div>
          <div className="input-gap">
            <input
              type="number"
              min="1"
              max="12"
              value={month}
              placeholder="생월"
              onChange={(e) => setmonth(e.target.value)}
            />
            월
          </div>
          <div className="input-gap">
            <input
              type="number"
              min="1"
              max="31"
              placeholder="생일"
              value={date}
              onChange={(e) => setdate(e.target.value)}
            />
            일
          </div>
        </div>
        <div className="isLunar-buttons">
          <button
            className={isLunar === true ? 'selected' : ''}
            onClick={() => controlLunar(true)}
          >
            음력
          </button>
          <button
            className={isLunar === false ? 'selected' : ''}
            onClick={() => controlLunar(false)}
          >
            양력
          </button>
        </div>
        <hr className="line" />
        <p>태어난 시각을 선택해주세요.</p>
        <input
          type="time"
          className="time"
          value={time}
          onChange={(e) => settime(e.target.value)}
        />
        <hr className="line" />
        <p>성별을 선택해주세요.</p>
        <div className="gender-buttons">
          <button
            className={gender === '남자' ? 'selected' : ''}
            onClick={() => controlGender('남자')}
          >
            남자
          </button>
          <button
            className={gender === '여자' ? 'selected' : ''}
            onClick={() => controlGender('여자')}
          >
            여자
          </button>
        </div>

        <button className="submit-button" onClick={handleSubmit}>
          확인
        </button>
      </div>
    </div>
  );
}
