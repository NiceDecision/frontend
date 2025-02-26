// import { useEffect, useState } from "react";
// import "./RankingPage.css";

// const RankingPage = () => {
//   const [rankings, setRankings] = useState([]);

//   useEffect(() => {
//     fetch("/ranking") // Node.js에서 데이터를 제공하는 엔드포인트-> 추후 확정
//       .then((response) => response.json())
//       .then((data) => setRankings(data.data.rankedList))
//       .catch((error) => console.error("Error fetching rankings:", error));
//   }, []);

//   return (
//     <div className="ranking-container">
//       <h1 className="ranking-title">2025년 2월 결정장애 극복 랭킹</h1>
//       <div className="ranking-list">
//         {rankings.map((rank) => (
//           <div key={rank.rankNum} className="ranking-item">
//             <span className="rank-number">{rank.rankNum}</span>
//             <span className="rank-name">{rank.name}</span>
//             <span className="rank-points">{rank.totalPnt} P</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RankingPage;



// MOCK DATA

import { useEffect, useState } from "react";
import "./RankingPage.css";

const RankingPage = () => {
  const [rankings, setRankings] = useState([]);

  useEffect(() => {
    // Mock Data 대신 API 요청을 주석 처리하고 테스트 데이터 사용
    // fetch("/api/ranking")
    //   .then((response) => response.json())
    //   .then((data) => setRankings(data.data.rankedList))
    //   .catch((error) => console.error("Error fetching rankings:", error));

    const mockData = {
      data: {
        rankedList: [
          { rankNum: 1, name: "John Doe", totalPnt: 300 },
          { rankNum: 2, name: "daisy3", totalPnt: 270 },
          { rankNum: 3, name: "daisy200", totalPnt: 260 },
          { rankNum: 4, name: "daisy109", totalPnt: 250 },
          { rankNum: 5, name: "daisy17", totalPnt: 240 },
          { rankNum: 6, name: "holly", totalPnt: 150 },
        ],
      },
    };
    setRankings(mockData.data.rankedList);
  }, []);

  return (
    <div className="ranking-container">
      <h1 className="ranking-title">2025년 2월 결정장애 극복 랭킹</h1>
      <div className="ranking-list">
        {rankings.map((rank) => (
          <div key={rank.rankNum} className="ranking-item">
            <span className="rank-number">{rank.rankNum}</span>
            <span className="rank-name">{rank.name}</span>
            <span className="rank-points">{rank.totalPnt} P</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RankingPage;
