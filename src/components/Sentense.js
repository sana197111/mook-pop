import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { QUESTIONS } from './questions';

function Sentense() {
    const navigate = useNavigate();
    const location = useLocation();
    const { initialFormData, selectedKeyword } = location.state || {};

    const [formData, setFormData] = useState({
        selectedQuestion: QUESTIONS[0],  // 기본으로 첫 번째 질문 선택
        card_ans: '',
    });

    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setError(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.card_ans) { // 키워드가 선택되지 않았다면,
            setError("문장을 입력해주세요."); // 에러 상태를 업데이트합니다.
            return; // 함수를 종료하고 이동하지 않습니다.
        }
        try {
            navigate('/page4', { state: { initialFormData, selectedKeyword, card_ans: formData.card_ans } });
            console.log("Location Form Data: ", initialFormData);
            console.log("Selected Keyword: ", selectedKeyword);
            console.log(formData.card_ans);
        } catch (error) {
            console.error("오류가 발생했습니다. 다시 한번 시도해주시길 바랍니다.", error);
        }
    };

    return (
        <div className="min-h-screen overflow-y-auto max-h-screen p-4 flex flex-col items-center" style={{backgroundColor: "#514d4c"}}>
            <h3 className="mb-4 text-center text-2xl mt-14" style={{color: "#d2d6d5"}}>
                Page 3.
            </h3>
            <h1 className="mb-4 text-center text-6xl" style={{color: "#d2d6d5"}}>
                문장
            </h1>
            <h5 className="mb-10 text-center text-xl" style={{color: "#d2d6d5"}}>
                [ 文章 ]
            </h5>
            <p className="text-center mb-4" style={{color: "#d2d6d5"}}>
            지금까지의 여정에서 겪은 실패, <br/>그리고 그것을 극복하기 위해 했던 노력.<br/><br/>
            그 과정에서 느꼈던 <span className="text-customYellow">감정과 생각</span>들을<br/>용기 있게 나눠주실 수 있나요?<br/><br/>
            아래의 질문에 답해주세요.<br/><br/>
            </p>
            {/* <p className="text-md text-gray-700 font-semibold">{keyword1}</p> */}
            <div className="w-full max-w-md bg-white p-4 rounded shadow">
            <p className="text-center text-gray-800 mb-3">질문을 골라주세요.</p>
                <select 
                    className="w-full border rounded p-2 mb-4"
                    name="selectedQuestion"
                    value={formData.selectedQuestion}
                    onChange={handleInputChange}
                >
                    {QUESTIONS.map((question, index) => (
                        <option key={index} value={question}>{question}</option>
                    ))}
                </select>
                <input 
                    className="w-full border rounded p-2"
                    name="card_ans"
                    value={formData.card_ans}
                    onChange={handleInputChange}
                    placeholder="질문에 답을 해주세요."
                />
            </div>
            {error && (
                <p className="mt-2 text-red-500">{error}</p>
            )}
            <button 
                onClick={handleSubmit}
                className="mt-8 mb-20 px-6 py-2 border rounded hover:bg-gray-500 hover:text-white active:bg-gray-700 active:text-white transition duration-300 ease-in-out" 
                style={{ color: "#d2d6d5", borderColor: "#d2d6d5" }}
            >
                페이지4로 이동하기
            </button>
            <div
                className="mt-8 mb-8"
            ></div>
        </div>
        
    );
}

export { Sentense };
