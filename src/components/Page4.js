import React from 'react';
import { Link } from 'react-router-dom';

function Page4() {
    return (
        <div className="min-h-screen p-4 flex flex-col items-center justify-center" style={{backgroundColor: "#514d4c"}}>
            <h3 className="mb-4 text-center text-2xl" style={{color: "#d2d6d5"}}>
                Page 4.
            </h3>
            <h1 className="mb-4 text-center text-6xl" style={{color: "#d2d6d5"}}>
                스토리
            </h1>
            <h5 className="mb-10 text-center text-xl" style={{color: "#d2d6d5"}}>
                [ 故事 ]
            </h5>
            <p className="text-center mb-4" style={{color: "#d2d6d5"}}>
            당신의 이야기와 함께, 당신만의 작가 스타일을 만나보세요. <br/>
            당신이 쓴 에세이와 당신의 키워드를 기반으로,  <br/>
            여러분의 성향과 가장 잘 맞는 작가 스타일을 소개해 드릴 것입니다.<br/><br/>
            어떤 작가가 여러분의 이야기를 쓴다면 어떤 모습일까요? <br/>
            새로운 시각으로 여러분의 성장 이야기를 다시 한 번 조명해보세요.<br/><br/>
            #성장 <br/>
            </p>
            <Link to="/score">
                <button className="mt-8 mb-8 px-6 py-2 border rounded" style={{ color: "#d2d6d5", borderColor: "#d2d6d5" }}>
                    나만의 작가 스타일 찾기
                </button>
            </Link>
        </div>
    );
}

export { Page4 };
