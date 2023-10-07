import React from 'react';
import { Link } from 'react-router-dom';

function Page4() {
    return (
        <div className="min-h-screen p-4 overflow-y-auto max-h-screen flex flex-col items-center justify-center" style={{backgroundColor: "#514d4c"}}>
            <h3 className="mb-4 text-center text-2xl" style={{color: "#d2d6d5"}}>
                Special Page 4.
            </h3>
            <h1 className="mb-4 text-center text-6xl" style={{color: "#d2d6d5"}}>
                스토리
            </h1>
            <h5 className="mb-10 text-center text-xl" style={{color: "#d2d6d5"}}>
                [ 故事 ]
            </h5>
            <p className="text-center mb-4" style={{color: "#d2d6d5"}}>
            나의 실패와 그 실패를 극복한 스토리를<br/>
            '내가 에세이로 쓰게 된다면''<br/>
            과연 어떤 에세이가 나을까요?<br/><br/>
            에세이의 성장 스토리가 와닿기 위해서는<br/>
            '나랑 비슷한 사람이구나'<br/>
            '어쩌면 나도 이렇게 극복할 수 있겠네?'라는<br/>
            공감대가 있어야 합니다.<br/><br/>
            묵묵한 페이지에서 준비한<br/>
            유형별 에세이 테스트를 통해<br/>
            나의 성향과 잘 맞는 작가님들은<br/>
            어떤 성장 스토리를 적으셨는지 확인해 보세요.<br/><br/>

            #성장 Growth #내가_에세이_작가가_된다면?<br/>
            </p>
            <Link to="/score">
                <button className="mt-8 mb-8 px-6 py-2 border rounded hover:bg-gray-500 hover:text-white active:bg-gray-700 active:text-white transition duration-300 ease-in-out" style={{ color: "#d2d6d5", borderColor: "#d2d6d5" }}>
                    에세이 작가가 된다면?
                </button>
            </Link>
        </div>
    );
}

export { Page4 };
