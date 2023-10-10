import React, { useState, useEffect } from "react";
import questions from "./BookTestQuestions";
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

function Score() {
    const [selectedQuestions, setSelectedQuestions] = useState([]);
    const [scores, setScores] = useState(Array(27).fill(null));
    const navigate = useNavigate();
    const location = useLocation();
    const { initialFormData, selectedKeyword, card_ans } = location.state || {};

    useEffect(() => {
    setSelectedQuestions(shuffleArray(questions).slice(0, 27));
    }, []);

    const shuffleArray = (array) => {
        let shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

    const handleScoreChange = (index, score) => {
        let newScores = [...scores];
        newScores[index] = newScores[index] === score ? null : score;
        setScores(newScores);
    };

    const handleSubmit = () => {
        if (scores.some(score => score === null)) {
            alert("모든 질문에 답해주세요.");
        } else {
            let sums = {};
            selectedQuestions.forEach((question, index) => {
                if (!sums[question.number]) sums[question.number] = 0;
                sums[question.number] += scores[index];
            });

            // 최고 점수를 계산합니다.
            const maxScore = Math.max(...Object.values(sums));
            
            // 최고 점수와 동일한 점수를 가진 질문 번호들을 찾습니다.
            const maxScoreNumbers = Object.keys(sums).filter(number => sums[number] === maxScore);
            
            // 그 중 하나를 랜덤으로 선택합니다.
            const randomIndex = maxScoreNumbers[Math.floor(Math.random() * maxScoreNumbers.length)];
            
            navigate(`/type/${randomIndex}`, { state: { sums } });

            // Collect all the data to be sent to the server
            const payload = {
                ...sums,
                initialFormData,
                selectedKeyword,
                card_ans
            };
            console.log(payload)
            
            // Send all data to the server
            axios.post('/api/score/submit', payload)
                .then(response => {
                    console.log('Success:', response.data);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    };

    return (
        <div className="p-10 md:p-12 text-customGreen min-h-screen overflow-y-auto max-h-screen flex flex-col items-center">
            <h1 className="text-2xl md:text-3xl mb-10 mt-14">내가 에세이 작가였다면?</h1>
            <p className="text-center mb-10" style={{ color: "#d2d6d5", fontSize: "0.8rem" }}>
                <span className="text-customYellow">1. 전혀 그렇지 않다   2. 대체로 그렇지 않다   <br/>3. 보통이다   4. 대체로 그렇다  5. 매우 그렇다</span>
            </p>
            {selectedQuestions.map((question, index) => (
                <div key={index} className="mb-4 w-full md:w-1/2">
                    <p className="mb-3">{index + 1}번. {question.text}</p>
                    <div className="mb-4 flex justify-around">
                        {[1, 2, 3, 4, 5].map((score) => (
                            <button 
                                key={score} 
                                className={`mt-8 mb-8 px-6 py-2 border rounded hover:bg-gray-500 hover:text-white active:bg-gray-700 active:text-white transition duration-300 ease-in-out ${scores[index] === score ? 'bg-customYellow' : ''}`}
                                onClick={() => handleScoreChange(index, score)}
                            >
                                {score}
                            </button>
                        ))}
                    </div>
                </div>
            ))}
            <button 
                className="mt-8 mb-20 px-6 py-2 border rounded hover:bg-gray-500 hover:text-white active:bg-gray-700 active:text-white transition duration-300 ease-in-out" style={{ color: "#d2d6d5", borderColor: "#d2d6d5" }}
                onClick={handleSubmit}
            >
                제출하기
            </button>
        </div>
    );
}

export { Score };