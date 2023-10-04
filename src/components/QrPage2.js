import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function QrPage2() {
    const { qrCode } = useParams();
    const [userId, setUserId] = useState("");
    const [name, setName] = useState("");
    const [keyword1, setKeyword1] = useState("");
    const keywords = ["자존감", "인간관계", "성장", "행복", "노력", "사랑", "연애", "신뢰", "건강한 삶", "성취", "합격"];
    const navigate = useNavigate();

    useEffect(() => {
        // 페이지 로드 시 데이터 가져오기
        const fetchData = async () => {
            if(qrCode) {  // qrCode가 정의되어 있을 때만 요청을 보냅니다.
                try {
                    const response = await axios.get(`/api/get_data/${qrCode}`);
                    setName(response.data.name);
                    setKeyword1(response.data.keyword1);
                    setUserId(response.data.user_id);
                } catch (error) {
                    console.error("Error fetching data", error);
                }
            }
        };
        fetchData();
    }, [qrCode]);
    
    
    const handleSubmit = async () => {
        try {
            const response = await axios.post("/api/keyword/submit", {
                qr_code: qrCode,
                name: name,
                keyword1: keyword1
            });
            alert(response.data.message);
            // 요청이 성공하면 /Page2로 이동합니다.
            navigate('/Page3');
        } catch (error) {
            console.error("Error submitting data", error);
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6 space-y-4">
            <p className="text-gray-600">N.{userId}</p>
            <input 
                className="border rounded p-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="이름"
            />
            <div className="flex flex-wrap justify-center space-x-4 space-y-2">
                {keywords.map((keyword) => (
                    <label key={keyword} className="flex items-center space-x-2">
                        <input
                            className="mr-1"
                            type="radio"
                            value={keyword}
                            name="keyword"
                            checked={keyword1 === keyword}
                            onChange={() => setKeyword1(keyword)}
                        /> 
                        <span className="text-gray-700">{keyword}</span>
                    </label>
                ))}
            </div>
            <button 
                onClick={handleSubmit} 
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow"
            >
                페이지 3로 넘어가기
            </button>
        </div>
    );
}


export { QrPage2 };
