import React, { useState, useEffect } from "react";
import questions from "./BookTestQuestions";

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
        <div className="p-4 md:p-6 bg-customGray text-customGreen overflow-y-auto max-h-screen flex flex-col items-center">
            <h1 className="text-xl md:text-3xl mb-4">나의 추천 책 찾아보기</h1>
            {selectedQuestions.map((question, index) => (
                <div key={index} className="mb-4 w-full md:w-1/2">
                    <p className="mb-2">{index + 1}번. {question.text}</p>
                    <div className="mb-3 flex justify-around">
                        {[1, 2, 3, 4, 5].map((score) => (
                            <button 
                                key={score} 
                                className={`p-2 m-1 text-lg ${scores[index] === score ? 'bg-blue-500' : 'bg-gray-700'}`}
                                onClick={() => handleScoreChange(index, score)}
                            >
                                {score}
                            </button>
                        ))}
                    </div>
                </div>
            ))}
            <button 
                className="p-2 bg-blue-500 mt-4 mb-4" 
                onClick={handleSubmit}
            >
                제출하기
            </button>
        </div>
    );
}

export { Score };