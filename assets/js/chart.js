document.addEventListener("DOMContentLoaded", function () {
    const chartElement = document.getElementById('myPieChart');

    if (chartElement) { // Check if the element exists
        const ctx = chartElement.getContext('2d');

        const myPieChart = new Chart(ctx, {
            type: 'pie',
            data: {
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
                            let sum = ctx.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
                            let percentage = "$" + (value * 100 / sum).toFixed(1);
                            return percentage;
                        },
                        color: '#fff',
                        font: {
                            weight: 'bold',
                            size: 30
                        }
                    }
                }
            },
            plugins: [ChartDataLabels]
        });
    } else {
        console.warn("Chart element #myPieChart not found. Skipping chart initialization.");
    }
});

// balance chart start
document.addEventListener("DOMContentLoaded", function () {
    const chartElement = document.getElementById('balanceChart');

    if (chartElement) { // Check if the element exists
        const ctx = chartElement.getContext('2d');

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [
                    {
                        label: 'Total Balance',
                        data: [100000, 150000, 80000, 120000, 95000, 200000, 170000, 250000, 180000, 260000, 220000, 150000],
                        borderColor: 'rgba(0, 123, 255, 1)',
                        backgroundColor: 'rgba(0, 123, 255, 0.1)',
                        borderWidth: 1,
                        fill: true
                    },
                    {
                        label: 'ECM Balance',
                        data: [70000, 85000, 60000, 75000, 90000, 110000, 105000, 130000, 100000, 140000, 130000, 90000],
                        borderColor: 'rgba(40, 167, 69, 1)',
                        backgroundColor: 'rgba(40, 167, 69, 0.1)',
                        borderWidth: 1,
                        fill: true
                    },
                    {
                        label: 'ETH Balance',
                        data: [50000, 60000, 40000, 55000, 70000, 90000, 85000, 100000, 85000, 110000, 95000, 60000],
                        borderColor: 'rgba(220, 53, 69, 1)',
                        backgroundColor: 'rgba(220, 53, 69, 0.1)',
                        borderWidth: 1,
                        fill: true
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        ticks: { color: '#ffffff' },
                        grid: { color: 'rgba(255, 255, 255, 0.03)' }
                    },
                    y: {
                        ticks: {
                            color: '#ffffff',
                            callback: function (value) {
                                return (value / 1000) + 'K'; // Converts 100000 to 100K format
                            }
                        },
                        grid: { color: 'rgba(255, 255, 255, 0.03)' }
                    }
                },
                plugins: {
                    legend: {
                        labels: { color: '#ffffff' }
                    },
                    tooltip: {
                        callbacks: {
                            label: function (tooltipItem) {
                                let value = tooltipItem.raw;
                                return tooltipItem.dataset.label + ': ' + (value / 1000) + 'K USD';
                            }
                        }
                    }
                }
            }
        });
    } else {
        console.warn("Chart element #balanceChart not found. Skipping chart initialization.");
    }
});

// balance chart end