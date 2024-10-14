const ctx = document.getElementById('myPieChart').getContext('2d');
const myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        // labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
        datasets: [{
            data: [25.0, 25.4, 20.7, 15.5, 22.05],
            backgroundColor: ['#B92124', '#2682EE', '#1CD691', '#DFC730', '#359846'],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                enabled: true
            },
            datalabels: {
                formatter: (value, ctx) => {
                    let sum = 0;
                    let dataArr = ctx.chart.data.datasets[0].data;
                    dataArr.map(data => {
                        sum += data;
                    });
                    let percentage = "$" + (value * 100 / sum).toFixed(1);
                    return percentage;
                },
                color: '#fff',
                font: {
                    weight: 'bold',
                    size:'30'
                }
            }
        }
    },
    plugins: [ChartDataLabels]
});