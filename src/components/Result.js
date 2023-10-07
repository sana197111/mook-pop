import React from 'react';
import Type1 from './type/type1.png';

function Result() {
    return (
        <div className="min-h-screen p-4 overflow-y-auto max-h-screen flex flex-col items-center justify-center" style={{backgroundColor: "#514d4c"}}>
            {/* <h1 className="mb-4 text-center text-4xl" style={{color: "#d2d6d5"}}>
                결과입니다
            </h1> */}
            <img src={Type1} alt="Type 1" className="object-contain" />
        </div>
    );
}

export { Result };
