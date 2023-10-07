import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Author() {
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // 여기서 백엔드로 formData를 보내거나 다른 액션을 취합니다.
    }

    return (
        <div className="min-h-screen overflow-y-auto max-h-screen p-4 flex flex-col items-center justify-center" style={{ backgroundColor: "#514d4c" }}>
            <h3 className="mb-10 text-center text-3xl" style={{ color: "#d2d6d5" }}>
                환영합니다!<br/> 
                여정의 시작점에 오신 것을
            </h3>
            <p className="text-center mb-4" style={{ color: "#d2d6d5" }}>
                작가님, 이제 귀하의 이야기가 시작됩니다.<br/>
                첫 페이지의 주인공이 되어, 당신의 이야기를 우리와 함께 나누어주세요.<br/>
                당신의 이름과 연락처를 통해 묵묵한 페이지와 연결되는 그 첫 단추를 잠가봅시다.<br/><br/>
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
                <label className="mb-3 text-center" htmlFor="name" style={{ color: "#d2d6d5" }}>
                    여정을 시작하는 당신의 이름을 알려주세요.
                </label>
                <input type="text" id="name" name="name" onChange={handleInputChange} className="mb-8 p-2 border rounded" style={{ borderColor: "#d2d6d5", color: "#d2d6d5", backgroundColor: "#514d4c" }}/>

                <label className="mb-3 text-center" htmlFor="phoneNumber" style={{ color: "#d2d6d5" }}>
                    당신과 이야기를 나눌 수 있는 연락처를 입력해주세요.
                </label>
                <input type="text" id="phoneNumber" name="phoneNumber" onChange={handleInputChange} className="mb-8 p-2 border rounded" style={{ borderColor: "#d2d6d5", color: "#d2d6d5", backgroundColor: "#514d4c" }}/>
                <Link to="/page1">
                    <button type="submit" className="mt-8 mb-4 px-6 py-2 border rounded hover:bg-gray-500 hover:text-white active:bg-gray-700 active:text-white transition duration-300 ease-in-out" style={{ color: "#d2d6d5", borderColor: "#d2d6d5" }}>
                        여정 시작하기
                    </button>
                </Link>
            </form>
            <p className="text-center" style={{ color: "#d2d6d5", fontSize: "0.8rem" }}>
                귀하의 개인 정보는 안전하게 보호되며, <br/>이를 통해 저희는 작가님과 소중한 이야기를 나누게 됩니다.
            </p>
        </div>
    );
}

export { Author };
