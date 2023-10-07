
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Link } from 'react-router-dom';
import "./style.css";

function Page1() {
    const [timeLeft, setTimeLeft] = useState(5 * 60);
    const [showNextPageMessage, setShowNextPageMessage] = useState(false);
    const [isTimerActive, setIsTimerActive] = useState(false);

    const renderTime = ({ remainingTime }) => (
        <div className="time-wrapper">
            <div className={`time ${remainingTime % 2 === 0 ? 'up' : 'down'}`}>
                {Math.floor(remainingTime / 60)}:{String(remainingTime % 60).padStart(2, '0')}
            </div>
        </div>
    );
    
    const startTimer = () => {
        setTimeLeft(5 * 60);
        setIsTimerActive(true);
        setShowNextPageMessage(false);
    };
    
    useEffect(() => {
        if (timeLeft <= 0) {
            setShowNextPageMessage(true);
        }
    }, [timeLeft]);
    
    return (
        <div className="min-h-screen p-4 overflow-y-auto max-h-screen flex flex-col items-center" style={{backgroundColor: "#514d4c"}}>
            <h3 className="mb-4 text-center text-2xl" style={{color: "#d2d6d5"}}>
                Page 1.
            </h3>
            <h1 className="mb-4 text-center text-6xl" style={{color: "#d2d6d5"}}>
                공백
            </h1>
            <h5 className="mb-10 text-center text-xl" style={{color: "#d2d6d5"}}>
                [ 空白 ]
            </h5>
            <p className="text-center mb-4" style={{color: "#d2d6d5"}}>
                에세이 체험을 하기 전, <br/>
                생각과 마음을 비워보며 휴식을 가져보세요.<br/><br/>
                지금부터는 핸드폰을 잠시 멀리하시고 <br/>
                바쁘게 살고 있는 인생 중 5분의 공백의 시간을 통해<br/>
                잠시 여유를 누리시면서 아무 생각없이<br/>
                영감을 찾아 떠날 준비를 해봅시다.<br/>
                <br/>
                #휴식 <br/>
            </p>
            <button
                className="mt-8 mb-8 px-6 py-2 border rounded hover:bg-gray-500 hover:text-white active:bg-gray-700 active:text-white transition duration-300 ease-in-out" 
                style={{ color: "#d2d6d5", borderColor: "#d2d6d5" }}
                onClick={startTimer}
            >
                시작하기
            </button>
            <AnimatePresence>
                <CountdownCircleTimer
                    key={timeLeft}
                    isPlaying={isTimerActive}
                    duration={10}
                    colors={[["#A30000", 0.33], ["#F7B801", 0.33], ["#004777"]]}
                    size={100}
                    strokeWidth={12} // This controls the thickness of the circle.
                    trailColor="#514d4c"
                    onComplete={() => {
                        setIsTimerActive(false);
                        setShowNextPageMessage(true);
                        return [false, 0]; // Stop the timer and do not repeat
                    }}
                >
                    {renderTime}
                </CountdownCircleTimer>
                {showNextPageMessage && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{ color: "#d2d6d5" }}
                    >
                        <Link to="/page2">
                            <button className="mt-8 mb-8 px-6 py-2 border rounded hover:bg-gray-500 hover:text-white active:bg-gray-700 active:text-white transition duration-300 ease-in-out" style={{ color: "#d2d6d5", borderColor: "#d2d6d5" }}>
                                페이지2로 이동하세요
                            </button>
                        </Link>
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    );
}

export { Page1 };
