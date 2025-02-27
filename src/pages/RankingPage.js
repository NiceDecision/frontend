import { useEffect, useState } from "react";
import "./RankingPage.css";
import Header from "../components/header/customHeader";
import {api} from '../api/axios';

export default function RankingPage() {
  const [rankings, setRankings] = useState([]);

  const fetchData = async () => {
    try {
      const response = await api.get("/mission/rank");
      console.log(response.data);
      setRankings(response.data);
    } catch (error) {
      console.error("Error fetching rankings:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="ranking-container">
        <h1 className="ranking-title">2025년 2월 결정장애 극복 랭킹</h1>
        <div className="ranking-list">
          {rankings.map((rank) => (
            <div key={rank.rank} className="ranking-item">
              <span className="rank-number">{rank.rank}</span>
              <span className="rank-name">{rank.name}</span>
              <span className="rank-points">{rank.totalPnt} P</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
