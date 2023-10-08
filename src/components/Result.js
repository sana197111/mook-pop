import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Result() {
    const [type, setType] = useState(1);
    const location = useLocation();
    const navigate = useNavigate(); // useNavigate 훅을 사용합니다.

    useEffect(() => {
        // location.state 또는 location.state.sums가 정의되지 않았다면
        // 사용자를 테스트 페이지로 리다이렉트합니다.
        if (!location.state || !location.state.sums) {
            navigate('/score');
            return;
        }

        const sums = location.state.sums;

        // Find the index of the max score
        let maxIndices = Object.keys(sums).filter((a, b) => sums[a] === sums[b]);

        // 랜덤으로 하나의 인덱스를 선택합니다.
        let randomIndex = maxIndices[Math.floor(Math.random() * maxIndices.length)];

        // Set the type state
        setType(parseInt(randomIndex.replace('score', '')));
    }, [location, navigate]); // navigate를 의존성 배열에 추가합니다.

    return (
        <div className="min-h-screen p-4 overflow-y-auto max-h-screen flex flex-col items-center" style={{backgroundColor: "#514d4c"}}>
            <img src={require(`./type/type${type}.png`).default} alt={`Type ${type}`} className="object-contain" />
        </div>
    );
}

export { Result };
