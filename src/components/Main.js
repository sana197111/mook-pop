import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
    return (
        <div className="min-h-screen p-4 flex flex-col items-center justify-center" style={{backgroundColor: "#514d4c"}}>
            <h1 className="mb-4 text-center text-6xl" style={{color: "#d2d6d5"}}>
                묵묵한 페이지 팝업스토어
            </h1>
            <h3 className="mb-4 text-center text-2xl" style={{color: "#d2d6d5"}}>
                "누구나 에세이를 쓸 수 있다."
            </h3>
            <p className="text-center mb-4" style={{color: "#d2d6d5"}}>
                인생의 첫 문장을 써내려가고 있는 이들에게
            </p>
            <h5 className="mb-10 text-center text-xl" style={{color: "#d2d6d5"}}>
                Page 1 공백 | Page 2 키워드 | Page 3 문장 | Page 4 스토리
            </h5>
            <Link to="/author">
                <button className="mt-8 mb-8 px-6 py-2 border rounded" style={{ color: "#d2d6d5", borderColor: "#d2d6d5" }}>
                    체험 시작하기
                </button>
            </Link>
        </div>
    );
}

export { Main };
