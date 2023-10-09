import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
// import { Link } from 'react-router-dom';

function Page2() {

    const navigate = useNavigate();
    const location = useLocation();
    const { formData } = location.state || {};

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            navigate('/keyword', { state: { formData } });
            console.log(formData)
        } catch (error) {
            console.error("오류가 발생했습니다. 다시 한번 시도해주시길 바랍니다.", error);
        }
    };

    return (
        <div className="min-h-screen p-4 overflow-y-auto max-h-screen flex flex-col items-center" style={{backgroundColor: "#514d4c"}}>
            <h3 className="mb-4 text-center text-2xl mt-14" style={{color: "#d2d6d5"}}>
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
            <span className="text-customYellow">'도대체 뭐부터 써야 할지 모르겠다'</span>입니다<br/><br/>
            에세이와 일기의 가장 큰 차이점은<br/>
            <span className="text-customYellow">독자</span>가 내가 아닌 <span className="text-customYellow">타인</span>이라는 점입니다.<br/><br/>
            내가 <span className="text-customYellow">실패했던 경험</span>들과 그 실패 가운데에서<br/>
            <span className="text-customYellow">배웠던 점</span>을 에세이로 쓰면<br/>
            독자에게 줄 수 있는 <span className="text-customYellow">선물</span>이 생깁니다.<br/><br/>
            제시된 10가지 키워드 중 <br/>나만의 글감이 되어줄 키워드를 골라주세요.
            <br/><br/>
            <span className="text-customYellow">#실패 #Fail #글감 #실패는_성공의_어머니</span><br/>
            </p>
            <button 
                className="mt-8 mb-20 px-6 py-2 border rounded hover:bg-gray-500 hover:text-white active:bg-gray-700 active:text-white transition duration-300 ease-in-out" 
                style={{ color: "#d2d6d5", borderColor: "#d2d6d5" }}
                onClick={handleSubmit}
            >
                키워드 입력하러가기
            </button>
            <div
                className="mt-8 mb-8"
            ></div>
        </div>
    );
}

export { Page2 };
