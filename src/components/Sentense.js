// import React, { useState, useEffect, useCallback } from 'react';
// import axios from 'axios';
import React from 'react';
// import { QUESTIONS } from './questions';
// import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Sentense() {
    // const { qrCode } = useParams();
    // const [userId, setUserId] = useState("");
    // const [name, setName] = useState("");
    // const [keyword1, setKeyword1] = useState("");
    // const [card_ans, setCardAns] = useState("");
    // const navigate = useNavigate();


    // const getRandomQuestion = useCallback((keyword) => {
    //     const questions = QUESTIONS[keyword];
    //     if (!questions) return null;
    
    //     const randomIndex = Math.floor(Math.random() * questions.length);
    //     return questions[randomIndex];
    // }, []);    

    // useEffect(() => {
    //     const fetchData = async () => {
    //         if (qrCode) {
    //             try {
    //                 const response = await axios.get(`/api/get_data/${qrCode}`);
                    
    //                 if (response.data) { 
    //                     setUserId(response.data.user_id || "");
    //                     setName(response.data.name || "");
    //                     setKeyword1(response.data.keyword1 || "");
    //                     setCardAns(response.data.card_ans || "");
    
    //                     // 이곳에서 질문을 랜덤하게 설정합니다.
    //                     const selectedQuestion = getRandomQuestion(response.data.keyword1);
    //                     setQuestion(selectedQuestion);
    //                 }
    //             } catch (error) {
    //                 console.error("Error fetching data", error);
    //             }
    //         }
    //     };
    //     fetchData();
    // }, [qrCode, getRandomQuestion]);
    
    
    // const handleSubmit = async () => {
    //     try {
    //         const response = await axios.post("/api/card/submit", {
    //             qr_code: qrCode,
    //             keyword1: keyword1,
    //             card_ans: card_ans
    //         });
    //         alert(response.data.message);
            
    //         // 요청이 성공하면 /Page3로 이동합니다.
    //         navigate('/result');
    //     } catch (error) {
    //         console.error("Error submitting data", error);
    //     }
    // }
    
    // const [question, setQuestion] = useState(null);

    return (
        <div className="min-h-screen overflow-y-auto max-h-screen p-4 flex flex-col items-center justify-center" style={{backgroundColor: "#514d4c"}}>
            <h3 className="mb-4 text-center text-2xl" style={{color: "#d2d6d5"}}>
                Page 3.
            </h3>
            <h1 className="mb-4 text-center text-6xl" style={{color: "#d2d6d5"}}>
                문장
            </h1>
            <h5 className="mb-10 text-center text-xl" style={{color: "#d2d6d5"}}>
                [ 文章 ]
            </h5>
            <p className="text-center mb-4" style={{color: "#d2d6d5"}}>
            당신의 이야기는 소중합니다. <br/>
            지금까지의 여정에서 겪은 실패, 그리고 그것을 극복하기 위해 했던 노력.<br/>
            그 과정에서 느꼈던 감정과 생각들을 용기 있게 나눠주실 수 있나요?<br/><br/>
            아래의 질문에 답해주세요.<br/><br/>
            </p>
            {/* <p className="text-md text-gray-700 font-semibold">{keyword1}</p> */}
            <div className="w-full max-w-md bg-white p-4 rounded shadow">
                {/* {question && <p className="text-center text-gray-800">{question}</p>} */}
                <p className="text-center text-gray-800">노력하는 것이 어려운 시기에는 어떻게 극복하나요?</p>
                <input 
                    className="w-full border rounded p-2 mt-4"
                    // value={card_ans}
                    // onChange={(e) => setCardAns(e.target.value)}
                    placeholder="질문에 답을 해주세요."
                />
            </div>
            <Link to="/page4">
                <button className="mt-8 mb-8 px-6 py-2 border rounded hover:bg-gray-500 hover:text-white active:bg-gray-700 active:text-white transition duration-300 ease-in-out" style={{ color: "#d2d6d5", borderColor: "#d2d6d5" }}>
                    페이지4로 이동하기
                </button>
            </Link>
        </div>
    );
}

export { Sentense };
