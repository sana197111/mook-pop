import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { QUESTIONS } from './questions';
import { useParams, useNavigate } from 'react-router-dom';

function QrPage3() {
    const { qrCode } = useParams();
    const [userId, setUserId] = useState("");
    const [name, setName] = useState("");
    const [keyword1, setKeyword1] = useState("");
    const [card_ans, setCardAns] = useState("");
    const navigate = useNavigate();


    const getRandomQuestion = useCallback((keyword) => {
        const questions = QUESTIONS[keyword];
        if (!questions) return null;
    
        const randomIndex = Math.floor(Math.random() * questions.length);
        return questions[randomIndex];
    }, []);    

    useEffect(() => {
        const fetchData = async () => {
            if (qrCode) {
                try {
                    const response = await axios.get(`/api/get_data/${qrCode}`);
                    
                    if (response.data) { 
                        setUserId(response.data.user_id || "");
                        setName(response.data.name || "");
                        setKeyword1(response.data.keyword1 || "");
                        setCardAns(response.data.card_ans || "");
    
                        // 이곳에서 질문을 랜덤하게 설정합니다.
                        const selectedQuestion = getRandomQuestion(response.data.keyword1);
                        setQuestion(selectedQuestion);
                    }
                } catch (error) {
                    console.error("Error fetching data", error);
                }
            }
        };
        fetchData();
    }, [qrCode, getRandomQuestion]);
    
    
    const handleSubmit = async () => {
        try {
            const response = await axios.post("/api/card/submit", {
                qr_code: qrCode,
                keyword1: keyword1,
                card_ans: card_ans
            });
            alert(response.data.message);
            
            // 요청이 성공하면 /Page3로 이동합니다.
            navigate('/result');
        } catch (error) {
            console.error("Error submitting data", error);
        }
    }
    
    const [question, setQuestion] = useState(null);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6 space-y-4">
            <p className="text-gray-600">N.{userId}</p>
            <p className="text-lg text-blue-600">{name} 님, 아래에 질문에 답해주세요.</p>
            <p className="text-md text-gray-700 font-semibold">{keyword1}</p>
            <div className="w-full max-w-md bg-white p-4 rounded shadow">
                {question && <p className="text-center text-gray-800">{question}</p>}
                <input 
                    className="w-full border rounded p-2 mt-4"
                    value={card_ans}
                    onChange={(e) => setCardAns(e.target.value)}
                    placeholder="질문에 답을 해주세요."
                />
                <button 
                    onClick={handleSubmit} 
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-4 rounded shadow"
                >
                    나만의 에세이 받으러 가기
                </button>
            </div>
        </div>
    );
}

export { QrPage3 };
