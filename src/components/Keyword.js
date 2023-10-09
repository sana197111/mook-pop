import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "./style.css";

function Keyword() {
    const keywords = ["자존감", "인간관계", "성장", "행복", "노력", "사랑", "연애", "신뢰", "건강한 삶", "성취", "합격"];
    const navigate = useNavigate();
    const location = useLocation();
    const { formData: initialFormData } = location.state || {};
    const [error, setError] = useState(null);

    const [formData, setFormData] = useState({
        keyword: initialFormData?.keyword || null,
    });
    
    const handleKeywordChange = (e) => {
        // 키워드 선택 시 formData를 업데이트합니다.
        setFormData({
            ...formData,
            keyword: e.target.value,
        });
        setError(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.keyword) { // 키워드가 선택되지 않았다면,
            setError("키워드를 선택해주세요."); // 에러 상태를 업데이트합니다.
            return; // 함수를 종료하고 이동하지 않습니다.
        }
        try {
            navigate('/page3', { state: { initialFormData, selectedKeyword: formData.keyword } });
            console.log(initialFormData)
            console.log(formData.keyword)
            // console.log(selectedKeyword)
        } catch (error) {
            console.error("오류가 발생했습니다. 다시 한번 시도해주시길 바랍니다.", error);
        }
    };

    return (
        <div className="min-h-screen p-4 overflow-y-auto max-h-screen flex flex-col items-center justify-center" style={{backgroundColor: "#514d4c"}}>
            <h3 className="mb-4 text-center text-2xl" style={{color: "#d2d6d5"}}>
                Page 2.
            </h3>
            <h1 className="mb-4 text-center text-6xl" style={{color: "#d2d6d5"}}>
                키워드 선택
            </h1>
            <h5 className="mb-10 text-center text-xl" style={{color: "#d2d6d5"}}>
                [ 單語 ]
            </h5>
            <p className="text-center mb-4" style={{color: "#d2d6d5"}}>
                {/* 당신의 여정에서 중요한 역할을 하는 것 중 하나는 ‘키워드’입니다.  <br/> */}
                {/* 이 키워드는 당신의 실패와 성공, 그리고 그 사이의 모든 순간들과 깊숙이 연결되어 있습니다.<br/> */}
                여기에는 다양한 키워드가 있습니다.<br/>
                선택한 키워드는 당신의 이야기를 <br/>더욱 선명하고 의미 있게 만들어줄 것입니다. <br/><br/>
                아래 키워드들 중에서 <br/>당신의 이야기와 가장 관련 있는 것은 무엇인가요?<br/>
                {/* 당신의 이야기에 어떤 키워드가 큰 역할을 했나요?<br/> */}
                {/* 당신의 실패, 성공, 그리고 그 사이의 여정을 가장 잘 표현하는 단어를 선택해보세요.<br/> */}
                <br/>
            </p>
            <div className="flex flex-wrap justify-center space-x-2 space-y-2">
                {keywords.map((keyword) => (
                    <label
                    key={keyword}
                    className="flex items-center justify-center px-2 py-2 border rounded-lg cursor-pointer hover:bg-gray-200"
                    style={{color: "#d2d6d5"}}
                    >
                        <input
                            className="mr-1 hidden"
                            type="radio"
                            value={keyword}
                            name="keyword"
                            onChange={handleKeywordChange} // 상태를 업데이트하는 핸들러를 추가합니다.
                            // onChange={() => setKeyword1(keyword)}
                        />
                    <span className="flex-grow text-center" style={{color: "#d2d6d5"}}>{keyword}</span>
                    </label>
                ))}
            </div>
            <p className="text-center mb-4" style={{color: "#d2d6d5"}}>
                {/* <br/>
                이 키워드는 당신의 이야기의 중심이 될 것입니다.<br/>
                이를 통해 당신의 여정은 보다 명확하고, <br/>
                가치 있는 경험으로 전달될 것입니다.<br/>
                선택한 키워드와 함께, 당신의 이야기가 어떻게 전개될지 기대가 됩니다.<br/>
                <br/> */}
            </p>
            {error && (
                <p className="mt-2 text-red-500">{error}</p>
            )}
            <button
                onClick={handleSubmit}
                className="mt-8 mb-12 px-6 py-2 border rounded hover:bg-gray-500 hover:text-white active:bg-gray-700 active:text-white transition duration-300 ease-in-out"
                style={{ color: "#d2d6d5", borderColor: "#d2d6d5" }}
            >
                키워드 선택하고 Page3 이동하기
            </button>
            <div
                className="mt-8 mb-8"
            ></div>
    </div>
            // <button 
            //     onClick={handleSubmit} 
            //     className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow"
            // >
            //     페이지 3로 넘어가기
            // </button>
    );
}


export { Keyword };
