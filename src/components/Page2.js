import React from 'react';

function Page2() {
    return (
        <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold mb-2 text-center">이 페이지는 Page2입니다</h1>
            <p className="text-gray-700 text-center mb-8">
                당신을 가장 잘 표현하는 해시태그를 보여주세요.<br />
                아래에 있는 QR코드 리더기에 종이를 보여주세요.
            </p>
            {/* QR코드 리더기 UI 표현을 위한 예시 div. 실제 QR 리더기 코드로 교체해야 합니다. */}
            <div className="border-2 border-gray-300 p-4 w-full max-w-xs rounded-md">
                <div className="bg-gray-200 h-40 w-full rounded-md flex items-center justify-center">
                    <span className="text-gray-500">QR 리더기 위치</span>
                </div>
            </div>
        </div>
    );
}

export { Page2 };
