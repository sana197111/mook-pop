import React from 'react';
import { Link } from 'react-router-dom';

function Page3() {
    return (
        <div className="min-h-screen p-4 flex flex-col items-center justify-center" style={{backgroundColor: "#514d4c"}}>
            <h3 className="mb-4 text-center text-2xl" style={{color: "#d2d6d5"}}>
                Page 3.
            </h3>
            <h1 className="mb-4 text-center text-6xl" style={{color: "#d2d6d5"}}>
                문장
            </h1>
            <h5 className="mb-10 text-center text-xl" style={{color: "#d2d6d5"}}>
                [ 文章 ]
            </h5>
            <p className="text-center mb-4" style={{color: "#d2d6d5"}}>
            당신이 선택한 키워드는 [선택한 키워드 입력]. <br/>
            이 단어는 당신의 여정에서 중요한 역할을 했습니다.  <br/>
            실패의 순간, 이 키워드는 어떻게 당신에게 작용했나요?<br/><br/>
            그리고 어떻게 당신은 이를 극복하려 했나요? <br/><br/>
            극복은 결코 쉽지 않은 일입니다.<br/>
            그 과정에서 우리는 스스로를 더 많이 알게 되며, 또한 우리를 키워주는 중요한 교훈들을 얻게 됩니다.<br/>
            그렇기에 여기에서 당신의 극복 이야기를 나누고자 합니다.<br/><br/>
            키워드 [선택한 키워드 입력]에 관한 당신만의 이야기를 들려주세요.<br/>
            그 이야기가 다른 이들에게 어떤 희망과 용기를 줄 수 있을지 기대합니다.<br/><br/>
            #극복 <br/>
            </p>
            <Link to="/sentense">
                <button className="mt-8 mb-8 px-6 py-2 border rounded" style={{ color: "#d2d6d5", borderColor: "#d2d6d5" }}>
                    문장 입력하러가기
                </button>
            </Link>
        </div>
    );
}

export { Page3 };
