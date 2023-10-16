import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

function AdChart() {
    ChartJS.register(ArcElement, Tooltip, Legend);
    const data = {
        labels: ['40% Male','35% Female','25% Unknown' ],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3],
            backgroundColor: [
            'rgba(255, 159, 64, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 99, 132, 0.2)',
              
            ],
            borderColor: [
                'rgba(255, 159, 64, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
             
            ],
            borderWidth: 1,
          },
        ],
      };

  return (
    <div className='doughnut'>
    <p className='table-header'>Ad Insights</p>
       <Doughnut
       data={data}
       options = {{
        plugins: {
        //     tooltip: {
        //       titleFont: {
        //         size: 20
        //       },
        //       bodyFont: {
        //         size: 20
        //       },
        //    },
          legend: {
            display: true,
            responsive: true,
            position: "right",
            padding: 50,
            labels: {
            //   boxWidth: 36,
              padding: 30,
            //   font: {
            //     size: 34
            //   },
            },
            align: "center",
          },
        }
        } } 
        
       />
    </div>
  )
}

export default AdChart