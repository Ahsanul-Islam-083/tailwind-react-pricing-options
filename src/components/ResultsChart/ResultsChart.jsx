import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData = [
    { "id": 1, "name": "Alice", "physics": 85, "chemistry": 90, "math": 92 },
    { "id": 2, "name": "Bob", "physics": 78, "chemistry": 82, "math": 88 },
    { "id": 3, "name": "Carol", "physics": 91, "chemistry": 76, "math": 95 },
    { "id": 4, "name": "David", "physics": 65, "chemistry": 70, "math": 60 },
    { "id": 5, "name": "Emma", "physics": 88, "chemistry": 94, "math": 87 },
    { "id": 6, "name": "Frank", "physics": 72, "chemistry": 68, "math": 75 },
    { "id": 7, "name": "Grace", "physics": 95, "chemistry": 89, "math": 98 },
    { "id": 8, "name": "Henry", "physics": 55, "chemistry": 62, "math": 58 },
    { "id": 9, "name": "Isla", "physics": 80, "chemistry": 85, "math": 83 },
    { "id": 10, "name": "Jack", "physics": 74, "chemistry": 79, "math": 81 }
]

const ResultsChart = () => {
    return (
        <div>
            <LineChart width={800} height={500} data={resultData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math"></Line>
                <Line dataKey="chemistry" stroke='red'></Line>
            </LineChart>
        </div>
    );
};

export default ResultsChart;