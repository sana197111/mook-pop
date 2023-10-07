import React from 'react';
import { Link } from 'react-router-dom';

function Page2() {
    return (
        <div className="min-h-screen p-4 overflow-y-auto max-h-screen flex flex-col items-center" style={{backgroundColor: "#514d4c"}}>
            <h3 className="mb-4 text-center text-2xl" style={{color: "#d2d6d5"}}>
                Page 2.
            </h3>
            <h1 className="mb-4 text-center text-6xl" style={{color: "#d2d6d5"}}>
                키워드
            </h1>
            <h5 className="mb-10 text-center text-xl" style={{color: "#d2d6d5"}}>
                [ 單語 ]
            </h5>
            <p className="text-center mb-4" style={{color: "#d2d6d5"}}>
            여정의 시작 전, 잠시 마음을 가다듬어보세요. <br/>
            당신의 속 세상을 조용히 열어두고, <br/>지난 일들을 마음의 눈으로 바라봅시다. <br/><br/>
            평온한 이 순간, <br/>실패와 좌절의 경험을 잠시 안아보며, <br/>스스로를 위로해봅시다.<br/><br/>
            깊고 고요한 숨을 들이마시며 <br/>
            잔잔한 속삭임 속에서, <br/>지난 일들의 소중한 교훈을 찾아보세요.<br/><br/>
            실패의 순간들에서 나타나는 키워드를 통해 <br/>
            스스로의 이야기를 섬세하게 펼쳐보며, <br/>새로운 시작을 꿈꾸어봅시다.<br/>
            <br/>
            #실패 <br/>
            </p>
            <Link to="/keyword">
                <button className="mt-8 mb-12 px-6 py-2 border rounded hover:bg-gray-500 hover:text-white active:bg-gray-700 active:text-white transition duration-300 ease-in-out" style={{ color: "#d2d6d5", borderColor: "#d2d6d5" }}>
                    키워드 입력하러가기
                </button>
            </Link>
        </div>
    );
}

export { Page2 };
