import React from 'react';
import { Link } from 'react-router-dom';

function Page2() {
    return (
        <div className="min-h-screen p-4 overflow-y-auto max-h-screen flex flex-col items-center justify-center" style={{backgroundColor: "#514d4c"}}>
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
            에세이를 처음 써보시는 분들의 최대 고민은 <br/>
            독자가 내가 아닌 타인이라는 점입니다. <br/><br/>
            내가 실패했던 경험들과 그 실패 가운데에서<br/>
            배웠던 점을 에세이로 쓰면<br/>
            독자에게 줄 수 있는 선물이 생깁니다.<br/><br/>
            제시된 10가지 키워드 중<br/>
            나만의 글감이 되어줄 키워드를 골라주세요.<br/>
            <br/>
            #실패 #Fail #글감 #실패는_성공의_어머니<br/>
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
