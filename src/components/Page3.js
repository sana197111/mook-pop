import React from 'react';
// import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';

function Page3() {

    const navigate = useNavigate();
    const location = useLocation();
    const { initialFormData, selectedKeyword } = location.state || {};

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            navigate('/sentense', { state: { initialFormData, selectedKeyword } });
            console.log(initialFormData)
            console.log(selectedKeyword)
        } catch (error) {
            console.error("오류가 발생했습니다. 다시 한번 시도해주시길 바랍니다.", error);
        }
    };

    return (
        <div className="min-h-screen p-4 overflow-y-auto max-h-screen flex flex-col items-center" style={{backgroundColor: "#514d4c"}}>
            <h3 className="mb-4 text-center text-2xl mt-14" style={{color: "#d2d6d5"}}>
                Page 3.
            </h3>
            <h1 className="mb-4 text-center text-6xl" style={{color: "#d2d6d5"}}>
                문장
            </h1>
            <h5 className="mb-10 text-center text-xl" style={{color: "#d2d6d5"}}>
                [ 文章 ]
            </h5>
            <p className="text-center mb-4" style={{color: "#d2d6d5"}}>
            {/* 당신이 선택한 키워드는 <span className="text-customYellow">[선택한 키워드 입력].</span><br/><br/> */}
            <span className="text-customYellow">'어떤 걸 쓸지 너무 막막하다면..?</span><br/>
            나만의 개성을 찾으실 수 있을 겁니다.<br/><br/>
            무언가를 굉장히 좋아하거나<br/><br/>
            무언가를 굉장히 싫어하거나<br/>
            시간을 많이 써서 남들보다 잘 알게 된 것을<br/>
            <span className="text-customYellow">마음 질문 카드</span>의 질문에 답을 하시다 보면<br/><br/>
            <span className="text-customYellow">나만의 개성</span>이 드러나는<br/>
            글감이 될 겁니다.<br/><br/>
            <span className="text-customYellow">#극복 #Overcome #마음질문 #구체화</span><br/>
            </p>
            <button 
                className="mt-8 mb-20 px-6 py-2 border rounded hover:bg-gray-500 hover:text-white active:bg-gray-700 active:text-white transition duration-300 ease-in-out" 
                style={{ color: "#d2d6d5", borderColor: "#d2d6d5" }}
                onClick={handleSubmit}
            >
                문장 입력하러가기
            </button>
            <div
                className="mt-8 mb-8"
            ></div>
        </div>
    );
}

export { Page3 };
