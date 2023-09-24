import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function QrResult() {
    const { qrCode } = useParams();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [userId, setUserId] = useState("");
    const [name, setName] = useState("");
    // const [essay, setEssay] = useState("");
    const [essay_title, setEssay_title] = useState("");
    const [essay_sub_title, setEssay_sub_title] = useState("");
    const [essay_body, setEssay_body] = useState("");

    useEffect(() => {
        setTimeout(() => { // setTimeout을 사용하여 3초 후에 데이터를 가져옴
            const fetchData = async () => {
                try {
                    const response = await axios.get(`/api/generate_essay/${qrCode}`);
                    setUserId(response.data.user_id);
                    setName(response.data.name);
                    setEssay_title(response.data.essay_title);
                    setEssay_sub_title(response.data.essay_sub_title);
                    setEssay_body(response.data.essay_body);
                    // setEssay(response.data.essay);
                    setIsLoading(false); // 데이터 로딩이 완료되면 로딩 상태를 false로 변경
                } catch (error) {
                    console.error("Error fetching the essay data:", error);
                }
            };
            
            fetchData();
        }, 2000); // 3초의 딜레이
    }, [qrCode]);  

    const handlePrint = () => {
        navigate('/result');
    };

    // 로딩 중이면 로딩 화면 표시
    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <p className="text-xl text-blue-600">결과 출력중...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6 space-y-4">
            <p className="text-gray-600">N.{userId}</p>
            <p className="text-lg text-blue-600">{name} 작가님, 당신의 에세이는 다음과 같습니다.</p>
            
            <div className="w-full max-w-md bg-white p-4 rounded shadow space-y-4">
                <h2 className="text-2xl font-semibold text-center text-gray-800">{essay_title}</h2>
                <h3 className="text-xl font-medium text-center text-gray-700">{essay_sub_title}</h3>
                <p className="text-md text-gray-600">{essay_body}</p>
                {/* <p className="text-md text-gray-600">{essay}</p> */}
            </div>
            <button onClick={handlePrint} className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none">
                출력하기
            </button>
        </div>
    );
}

export { QrResult };
