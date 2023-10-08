import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
    return (
        <div className="min-h-screen overflow-y-auto max-h-screen p-4 flex flex-col items-center justify-center" style={{backgroundColor: "#514d4c"}}>
            <h1 className="mb-10 text-center text-4xl" style={{color: "#d2d6d5"}}>
                묵묵한 페이지<br/><span className="text-customYellow">POPUP</span>
            </h1>
            <h3 className="mb-2 text-center text-2xl" style={{color: "#d2d6d5"}}>
                "누구나 에세이를 쓸 수 있다."
            </h3>
            <p className="text-center mb-10" style={{color: "#d2d6d5"}}>
            <span className="text-customYellow">인생의 첫 문장을 써내려가고 있는 이들에게</span>
            </p>
            <h5 className="mb-8 text-center text-l" style={{color: "#d2d6d5"}}>
                Page 1 공백 | Page 2 키워드 <br/> Page 3 문장 | Page 4 스토리
            </h5>
            <Link to="/author">
                <button className="mt-8 mb-8 px-6 py-2 border rounded hover:bg-gray-500 hover:text-white active:bg-gray-700 active:text-white transition duration-300 ease-in-out" style={{ color: "#d2d6d5", borderColor: "#d2d6d5" }}>체험 시작하기</button>
            </Link>
        </div>
    );
}

export { Main };
