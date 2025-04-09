document.addEventListener("DOMContentLoaded", function () {
  const chartElement = document.getElementById("myPieChart");

  if (chartElement) {
    // Check if the element exists
    const ctx = chartElement.getContext("2d");

    const myPieChart = new Chart(ctx, {
      type: "pie",
      data: {
        datasets: [
          {
            data: [25.0, 25.4, 20.7, 15.5, 22.05],
            backgroundColor: [
              "#B92124",
              "#2682EE",
              "#1CD691",
              "#DFC730",
              "#359846",
            ],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          tooltip: {
            enabled: true,
          },

          datalabels: {
            formatter: (value, ctx) => {
              let sum = ctx.chart.data.datasets[0].data.reduce(
                (a, b) => a + b,
                0
              );
              let percentage = "$" + ((value * 100) / sum).toFixed(1);
              return percentage;
            },
            color: "#fff",
            font: {
              weight: "bold",
              size: 30,
            },
          },
        },
      },
      plugins: [ChartDataLabels],
    });
  } else {
    console.warn(
      "Chart element #myPieChart not found. Skipping chart initialization."
    );
  }
});
// balance chart start
document.addEventListener("DOMContentLoaded", function () {
  const chartElement = document.getElementById("balanceChart");
  if (!chartElement)
    return console.warn("Chart element #balanceChart not found.");
  const ctx = chartElement.getContext("2d");
  const datasets = [
    {
      label: "Total Balance",
      color: "rgba(0, 123, 255, 1)",
      data: [
        100000, 150000, 80000, 120000, 95000, 200000, 170000, 250000, 180000,
        260000, 220000, 150000,
      ],
    },
    {
      label: "ECM Balance",
      color: "rgba(40, 167, 69, 1)",
      data: [
        70000, 85000, 60000, 75000, 90000, 110000, 105000, 130000, 100000,
        140000, 130000, 90000,
      ],
    },
    {
      label: "ETH Balance",
      color: "rgba(220, 53, 69, 1)",
      data: [
        50000, 60000, 40000, 55000, 70000, 90000, 85000, 100000, 85000, 110000,
        95000, 60000,
      ],
    },
  ];
  const myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: datasets.map((ds) => ({
        ...ds,
        borderColor: ds.color,
        backgroundColor: ds.color.replace("1)", "0.1)"),
        borderWidth: 1.5,
        fill: true,
      })),
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          ticks: { color: "#ddd" },
          grid: { color: "rgba(255, 255, 255, 0.03)" },
        },
        y: {
          ticks: { color: "#ddd", callback: (value) => `${value / 1000}K` },
          grid: { color: "rgba(255, 255, 255, 0.03)" },
        },
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (tooltipItem) =>
              `${tooltipItem.dataset.label}: ${tooltipItem.raw / 1000}K USD`,
          },
        },
      },
    },
  });
  // Create Custom Legend Buttons
  const legendContainer = document.getElementById("chartLegend");
  datasets.forEach((ds, i) => {
    const btn = document.createElement("button");
    Object.assign(btn.style, {
      background: ds.color,
      color: "#fff",
      fontSize: "12px",
      padding: "2px 6px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      opacity: myChart.isDatasetVisible(i) ? "1" : "0.5",
      marginRight: "5px",
    });
    btn.innerText = ds.label;
    btn.onclick = () => {
      myChart.setDatasetVisibility(i, !myChart.isDatasetVisible(i));
      myChart.update();
      btn.style.opacity = myChart.isDatasetVisible(i) ? "1" : "0.3";
    };
    legendContainer.appendChild(btn);
  });
});

// balance chart end
// top milestone start
const chartElement = document.getElementById('milestoneChart');
if (chartElement) {
  const ctx = chartElement.getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Milestone 1', 'Milestone 2', 'Milestone 3', 'Milestone 4', 'Milestone 5'],
      datasets: [{
        data: [100000, 70000, 110000, 70000, 105000],
        backgroundColor: [
          '#1CD691', // teal
          '#2682EE', // blue
          '#DFC730', // yellow
          '#359846', // green
          '#B92124'  // red
        ],
        borderRadius: 6,
        barThickness: 60
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false
        } 
      },
      scales: {
        x: {
          ticks: {
            color: '#ddd',
            font: { size: 14 }
          },
          grid: {
            display: false
          }
        },
        y: {
          ticks: {
            color: '#ddd',
            callback: function(value) {
              return value / 1000 + 'k';
            }
          },
          grid: {
            color: '#FFFFFF0D'
          },
          beginAtZero: true,
          max: 120000
        }
      }
    }
  });
}
// top milestone end
// user transaction chart start
const ctx = document.getElementById('ecmChart');
    
if (ctx) {
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        '12am', '6am', '12pm', '6pm', '12am', '6am', '12pm', '6pm',
        '12am', '6am', '12pm', '6pm'
      ],
      datasets: [
        {
          label: 'ECM Sales',
          data: [100, 60, 120, 80, 150, 50, 170, 60, 110, 90, 130, 180],
          borderColor: '#359846',
          backgroundColor: 'rgba(16, 185, 129, 0.1)',
          tension: 0.4,
          fill: true,
          pointBackgroundColor: '#10B981',
          pointRadius:3,
          pointHoverRadius: 7
        },
        {
          label: 'ECM Purchase',
          data: [90, 100, 80, 110, 70, 85, 60, 95, 50, 70, 90, 100],
          borderColor: '#B92124',
          backgroundColor: 'rgba(239, 68, 68, 0.1)',
          tension: 0.4,
          fill: true,
          pointBackgroundColor: '#EF4444',
          pointRadius: 3,
          pointHoverRadius: 5
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: '#E5E7EB',
            usePointStyle: true,
            boxWidth: 10
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return context.dataset.label + ': ' + context.parsed.y + 'k';
            }
          },
          backgroundColor: '#1F2937',
          titleColor: '#ffffff',
          bodyColor: '#ffffff',
          borderColor: '#374151',
          borderWidth: 1
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#ddd'
          },
          grid: {
            color: '#040C16'
          }
        },
        y: {
          ticks: {
            color: '#ddd',
            callback: function(value) {
              return value + '';
            }
          },
          grid: {
            color: '#1F2937'
          },
          min: 20,
          max: 200
        }
      }
    }
  });
}
// user transaction chart end
// new register chart start
const Registrations  = document.getElementById('progressChart').getContext('2d');
    const gradient = Registrations .createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, '#277BF5'); // Blue
    gradient.addColorStop(1, '#1CD691'); // Teal

    new Chart(Registrations , {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [20, 80],
          backgroundColor: [gradient, '#0F282C'], // matching background
          borderWidth: 0,
          cutout: '80%',
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          tooltip: { enabled: true },
          legend: { display: true }
        }
      }
    });
// new register chart end
// start active user chart
const active_user = document.getElementById('activeUserChart');
  
      if (active_user) {
        new Chart(active_user, {
          type: 'line',
          data: {
            labels: [
              '12am', '6am', '12pm', '6pm', '12am', '6am',
              '12pm', '6pm', '12am', '6am', '12pm', '6pm'
            ],
            datasets: [
              {
                label: 'Active User',
                data: [60, 95, 1800, 110, 70, 2800, 3000, 75, 50, 65, 85, 100],
                borderColor: '#3B82F6',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                tension: 0.1,
                fill: true,
                pointBackgroundColor: '#3B82F6',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6,
                borderWidth: 2
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: true,
                labels: {
                  color: '#E5E7EB',
                  usePointStyle: true,
                  pointStyle: 'circle',
                  boxWidth: 10,
                  padding: 20
                }
              },
              tooltip: {
                backgroundColor: '#1F2937',
 
                bodyColor: '#ffffff',
                borderColor: '#374151',
                borderWidth: 1,
                usePointStyle: true,
                callbacks: {
                  label: function(context) {
                    return `${context.dataset.label}: ${context.parsed.y}`;
                  }
                }
              }
            },
            scales: {
              x: {
                ticks: {
                  color: '#94a3b8'
                },
                grid: {
                  color: '#111822',
                  drawTicks: true
                }
              },
              y: {
                min: 0,
                max: 5000,
                ticks: {
                  color: '#94a3b8'
                },
                grid: {
                  color: '#09111B',
                  drawTicks: true
                }
              }
            }
          }
        });
      }
// end active user chart