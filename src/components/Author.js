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
        <div className="min-h-screen p-4 flex flex-col items-center justify-center" style={{ backgroundColor: "#514d4c" }}>
            <h3 className="mb-4 text-center text-2xl" style={{ color: "#d2d6d5" }}>
                환영합니다, 여정의 시작점에 오신 것을
            </h3>
            <p className="text-center mb-4" style={{ color: "#d2d6d5" }}>
                묵묵한 페이지에 당신의 이야기가 시작됩니다.<br/> 
                우리는 모든 이가 소중한 에세이스트가 될 수 있다고 믿습니다.<br/> 
                당신만의 이야기가 담긴 에세이로 여러분의 가치를 나누어보세요.<br/><br/>
                작가님, 이제 귀하의 이야기가 시작됩니다.<br/>
                첫 페이지의 주인공이 되어, 당신의 이야기를 우리와 함께 나누어주세요.<br/>
                당신의 이름과 연락처를 통해 묵묵한 페이지와 연결되는 그 첫 단추를 잠가봅시다.<br/><br/>
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
                <label htmlFor="name" style={{ color: "#d2d6d5" }}>
                    이름: 여정을 시작하는 당신의 이름을 알려주세요.
                </label>
                <input type="text" id="name" name="name" onChange={handleInputChange} className="mb-4 p-2 border rounded" style={{ borderColor: "#d2d6d5", color: "#d2d6d5", backgroundColor: "#514d4c" }}/>

                <label htmlFor="phoneNumber" style={{ color: "#d2d6d5" }}>
                    핸드폰 번호: 당신과 이야기를 나눌 수 있는 연락처를 입력해주세요.
                </label>
                <input type="text" id="phoneNumber" name="phoneNumber" onChange={handleInputChange} className="mb-4 p-2 border rounded" style={{ borderColor: "#d2d6d5", color: "#d2d6d5", backgroundColor: "#514d4c" }}/>
                <Link to="/page1">
                    <button type="submit" className="mb-8 px-6 py-2 border rounded" style={{ color: "#d2d6d5", borderColor: "#d2d6d5" }}>
                        여정 시작하기
                    </button>
                </Link>
            </form>
            <p className="text-center" style={{ color: "#d2d6d5", fontSize: "0.8rem" }}>
                귀하의 개인 정보는 안전하게 보호되며, 이를 통해 저희는 작가님과 소중한 이야기를 나누게 됩니다.
            </p>
        </div>
    );
}

export { Author };
