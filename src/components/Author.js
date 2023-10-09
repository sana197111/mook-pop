import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Author() {
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: ''
    });

    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setError(null);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 추가: 입력 유효성 검사
        if (!formData.name.trim() || !formData.phoneNumber.trim()) {
            setError("이름과 전화번호를 입력해주세요."); // 사용자에게 오류 메시지 표시
            return; // 함수 종료
        }

        try {
            // 여기서 페이지 이동을 합니다. Navigate 컴포넌트가 아닌, 함수를 사용합니다.
            navigate('/page1', { state: { formData } });
        } catch (error) {
            console.error("오류가 발생했습니다. 다시 한번 시도해주시길 바랍니다.", error);
            setError("오류가 발생했습니다. 다시 한번 시도해주세요.");
        }
    };
    

    return (
        <div className="min-h-screen overflow-y-auto max-h-screen p-4 flex flex-col items-center justify-center" style={{ backgroundColor: "#514d4c" }}>
            {/* <h3 className="mb-10 text-center text-3xl" style={{ color: "#d2d6d5" }}>
                환영합니다!<br/> 
                여정의 시작점에 오신 것을
            </h3> */}
            <p className="text-center mb-10 text-2xl" style={{ color: "#d2d6d5" }}>
                <span className="text-customYellow">작가님</span>,<br/>
                <span className="text-customYellow">첫 페이지의 주인공</span>이 되어, <br/>당신의 이야기를 우리와 함께 나누어주세요.<br/>
                {/* 당신의 이름과 연락처를 통해 <br/>묵묵한 페이지와 연결되는 그 첫 단추를 잠가봅시다.<br/><br/> */}
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
                <label className="mb-2 text-center" htmlFor="name" style={{ color: "#d2d6d5" }}>
                    <span className="text-customYellow">작가님의 이름</span>을 알려주세요.
                </label>
                <input type="text" id="name" name="name" onChange={handleInputChange} className="mb-8 p-2 border rounded" style={{ borderColor: "#d2d6d5", color: "#d2d6d5", backgroundColor: "#514d4c" }}/>

                <label className="mb-2 text-center" htmlFor="phoneNumber" style={{ color: "#d2d6d5" }}>
                    이야기를 나눌 수 있는 <span className="text-customYellow">연락처</span>를 입력해주세요.
                </label>
                <input type="text" id="phoneNumber" name="phoneNumber" onChange={handleInputChange} className="mb-8 p-2 border rounded" style={{ borderColor: "#d2d6d5", color: "#d2d6d5", backgroundColor: "#514d4c" }}/>
                {error && (
                    <p className="mb-4 text-red-500">{error}</p>
                )}
                <button 
                    type="submit" 
                    className="mt-8 mb-4 px-6 py-2 border rounded hover:bg-gray-500 hover:text-white active:bg-gray-700 active:text-white transition duration-300 ease-in-out" 
                    style={{ color: "#d2d6d5", borderColor: "#d2d6d5" }}
                >
                    여정 시작하기
                </button>
            </form>
            <p className="text-center" style={{ color: "#d2d6d5", fontSize: "0.8rem" }}>
                귀하의 개인 정보는 안전하게 보호되며, <br/>이를 통해 저희는 작가님과 소중한 이야기를 나누게 됩니다.
            </p>
        </div>
    );
}

export { Author };
