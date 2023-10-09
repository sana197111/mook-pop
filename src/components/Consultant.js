import React, { useEffect, useState } from 'react';
import "./style.css";

function Consultant() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // 서버로부터 데이터 가져오기
        const fetchData = async () => {
            try {
                const response = await fetch('/api/getRecentData');
                if (!response.ok) {
                    throw new Error('Network response was not ok' + response.statusText);
                }
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error('Error during fetch operation: ', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="min-h-screen p-4 overflow-y-auto max-h-screen flex flex-col items-center" style={{backgroundColor: "#514d4c"}}>
            <h3 className="mb-4 text-center text-2xl mt-14" style={{color: "#d2d6d5"}}>
                대상자한테는 보여주지 마세요!
            </h3>
            <h1 className="mb-4 text-center text-6xl" style={{color: "#d2d6d5"}}>
                상담사 페이지
            </h1>
            {/* 여기부터 데이터를 보여주는 UI 구성 */}
            {data.map((item, index) => (
                <div key={index} className="dataItem">
                    <h2>{item.name}</h2>
                    <p>Phone Number: {item.phone_number}</p>
                    <p>Keyword: {item.keyword1}</p>
                    <p>Answer: {item.card_ans}</p>
                    <p>Scores: {item.sorted_scores.map(score => (
                        <span key={score[0]}> {score[0]}번({score[1]}점)</span>
                    ))}</p>
                </div>
            ))}
        </div>
    );
}

export { Consultant };
