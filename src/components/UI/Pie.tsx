import React from 'react'
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {
    score: number
}


  
export default function MyPie({score}: Props): JSX.Element {
    const data = {
        labels: ['Неверные', 'Верные'],
        datasets: [
          {
            label: 'Answers',
            data: [5-score, score],
            backgroundColor: [
              '#DCBCE3',
              '#FAF2C0',
            ],
            borderColor: [
              '#DCBCE3',
              '#FAF2C0',
            ],
            borderWidth: 1,
          },
        ],
      };
    return <Pie data={data} />;
  }