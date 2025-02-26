import { useState } from "react";
import "./InfoForm.css";

export default function BirthInfoForm() {
  const [year, setyear] = useState("");
  const [month, setmonth] = useState("");
  const [date, setdate] = useState("");
  const [time, settime] = useState("");
  const [isLunar, setisLunar] = useState(null);
  const [gender, setGender] = useState(null);

  const handleSubmit = () => {
    if (isLunar === null) {
      alert("양력/음력을 선택해주세요.");
      return;
    }
    if (!year || !month || !date) {
      alert("생년월일을 입력해주세요.");
      return;
    }
    if (!time) {
      alert("태어난 시각을 선택해주세요.");
      return;
    }
    if (!gender) {
      alert("성별을 선택해주세요.");
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
    
    fetch("/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => console.log("Success:", data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="container">
      <div className="form-box">
        <p>생년월일을 선택해주세요.</p> 
        <div className="isLunar-buttons">
          <button className={isLunar === true ? "selected" : ""} onClick={() => setisLunar(true)}>음력</button>
          <button className={isLunar === false ? "selected" : ""} onClick={() => setisLunar(false)}>양력</button>
        </div>
        <div className="input-group">
          <input type="text" value={year} onChange={(e) => setyear(e.target.value)} />년
          <input type="text" value={month} onChange={(e) => setmonth(e.target.value)} />월
          <input type="text" value={date} onChange={(e) => setdate(e.target.value)} />일
        </div>
        
        <p>태어난 시각을 선택해주세요.</p>
        <input type="time" className="time" value={time} onChange={(e) => settime(e.target.value)} />
        
        <p>성별을 선택해주세요.</p>
        <div className="gender-buttons">
          <button className={gender === "남자" ? "selected" : ""} onClick={() => setGender("남자")}>남자</button>
          <button className={gender === "여자" ? "selected" : ""} onClick={() => setGender("여자")}>여자</button>
        </div>
        
        <button className="submit-button" onClick={handleSubmit}>확인</button>
      </div>
    </div>
  );
}
