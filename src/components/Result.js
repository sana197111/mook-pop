import React from 'react';
import { useParams } from 'react-router-dom';
// import { useLocation, useNavigate } from 'react-router-dom';
import type1 from './type/type1.png';
import type2 from './type/type2.png';
import type3 from './type/type3.png';
import type4 from './type/type4.png';
import type5 from './type/type5.png';
import type6 from './type/type6.png';
import type7 from './type/type7.png';
import type8 from './type/type8.png';
import type9 from './type/type9.png';

const typeImages = {
    1: type1,
    2: type2,
    3: type3,
    4: type4,
    5: type5,
    6: type6,
    7: type7,
    8: type8,
    9: type9
  };

function Result() {
    const { typeNumber } = useParams(); // Access route parameters using `useParams` hook
    
    // Ensure that typeNumber is a valid number
    const validTypeNumber = parseInt(typeNumber);
    if (isNaN(validTypeNumber) || validTypeNumber < 1 || validTypeNumber > 9) {
        // Handle error, e.g., redirect to a 404 page or show an error message
    }

    // const [type, setType] = useState(1);
    // const location = useLocation();
    // const navigate = useNavigate(); // useNavigate 훅을 사용합니다.
    
    // useEffect(() => {
    //     // location.state 또는 location.state.sums가 정의되지 않았다면
    //     // 사용자를 테스트 페이지로 리다이렉트합니다.
    //     if (!location.state || !location.state.sums) {
    //         navigate('/score');
    //         return;
    //     }
    
    //     const sums = location.state.sums;
    
    //     // 최대 점수를 찾습니다.
    //     const maxScore = Math.max(...Object.values(sums));
    
    //     // 최대 점수와 동일한 점수를 가진 인덱스를 찾습니다.
    //     const maxIndices = Object.keys(sums).filter(key => sums[key] === maxScore);
    
    //     // 랜덤으로 하나의 인덱스를 선택합니다.
    //     const randomIndex = maxIndices[Math.floor(Math.random() * maxIndices.length)];
    
    //     // Set the type state
    //     setType(parseInt(randomIndex));
    // }, [location, navigate]); // navigate를 의존성 배열에 추가합니다.
    
    return (
        <div className="min-h-screen p-4 overflow-y-auto max-h-screen flex flex-col items-center" style={{backgroundColor: "#514d4c"}}>
            <img src={typeImages[validTypeNumber]} alt={`Type ${validTypeNumber}`} className="object-contain" />
        </div>
    );
}

export { Result };
