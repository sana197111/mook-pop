import React, { useState, useEffect } from "react";
import questions from "./BookTestQuestions";
import { Link } from 'react-router-dom';

function Score() {
    const [selectedQuestions, setSelectedQuestions] = useState([]);
    const [scores, setScores] = useState(Array(27).fill(null));

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
        // Check if all questions have been answered
        if (scores.some(score => score === null)) {
          alert("모든 질문에 답해주세요.");
        } else {
          // Calculate the sum for each question number
          let sums = {};
          selectedQuestions.forEach((question, index) => {
            if (!sums[question.number]) sums[question.number] = 0;
            sums[question.number] += scores[index];
          });
    
          console.log("Sums: ", sums); // You should see the sums per question number
    
          // Send the sums to the backend
        //   fetch('your_api_endpoint_here', {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(sums)
        //   })
        //   .then(response => response.json())
        //   .then(data => console.log('Success:', data))
        //   .catch((error) => console.error('Error:', error));
        }
    };    

    return (
        <div className="p-20 md:p-12 text-customGreen min-h-screen overflow-y-auto max-h-screen flex flex-col items-center">
            <h1 className="text-xl md:text-3xl mb-10 mt-14">내가 에세이 작가였다면?</h1>
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
            <Link to="/result">
                <button 
                    className="mt-8 mb-8 px-6 py-2 border rounded hover:bg-gray-500 hover:text-white active:bg-gray-700 active:text-white transition duration-300 ease-in-out" style={{ color: "#d2d6d5", borderColor: "#d2d6d5" }}
                    onClick={handleSubmit}
                >
                    제출하기
                </button>
            </Link>
        </div>
    );
}

export { Score };