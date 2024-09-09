import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

function MyTimeGraph() {
    // グラフのオプション
    const options = {
        animation: false,
        plugins: {
            title: {
                display: true,
                text: '終業まで7時間'
            },
            legend: {
                display: false,
            },
        },
        indexAxis: 'y',
        responsive: true,
        scales: {
            x: {
                stacked: true,
                min: 0,
                max: 24,
            },
            y: {
                stacked: true,
            },
        },
    };
    // データ
    const graphdata = [9, 1, 8, 6];

    const data = {
        labels: [''],
        datasets: [
            // 始業まで
            {
                data: [graphdata[0]],
                backgroundColor: 'rgb(232, 250, 233)',
            },
            // 始業からの経過時間
            {
                data: [graphdata[1]],
                backgroundColor: 'rgb(144, 227, 109)',
            },
            // 終業までの時間
            {
                data: [graphdata[2]],
                backgroundColor: 'rgb(250, 225, 35)',
            },
            // 終業後の時間
            {
                data: [graphdata[3]],
                backgroundColor: 'rgb(232, 250, 233)',
            },
        ],
    };

    return (
        <Bar options={options} data={data} />
    );

}

export default MyTimeGraph;