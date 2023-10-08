import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Result() {
    const [type, setType] = useState(1);

    useEffect(() => {
        // Fetch the scores from the server when component mounts
        axios.get('/api/scores')
            .then(response => {
                // response.data contains the returned data
                const data = response.data;

                // Find the index of the max score
                const maxIndex = Object.keys(data).reduce((a, b) => data[a] > data[b] ? a : b);

                // Set the type state
                setType(parseInt(maxIndex.replace('score', '')));
            })
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div className="min-h-screen p-4 overflow-y-auto max-h-screen flex flex-col items-center" style={{backgroundColor: "#514d4c"}}>
            <img src={require(`./type/type${type}.png`).default} alt={`Type ${type}`} className="object-contain" />
        </div>
    );
}

export { Result };
