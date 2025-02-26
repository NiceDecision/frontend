import { useState } from "react";

export default function BirthInfoForm() {
  const [year, setyear] = useState("2002");
  const [month, setmonth] = useState("3");
  const [date, setdate] = useState("1");
  const [time, settime] = useState("10");
  const [isLunar, setisLunar] = useState(false);
  const [gender, setGender] = useState(null);

  const handleSubmit = () => {
    if (!gender) {
      alert("성별을 선택해주세요.");
      return;
    }
    
    const userData = {
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
        <div className="input-group">
          <input type="text" value={year} onChange={(e) => setyear(e.target.value)} />년
          <input type="text" value={month} onChange={(e) => setmonth(e.target.value)} />월
          <input type="text" value={date} onChange={(e) => setdate(e.target.value)} />일
        </div>
        
        <p>태어난 시각을 선택해주세요.</p>
        <input type="text" value={time} onChange={(e) => settime(e.target.value)} />시
        
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
