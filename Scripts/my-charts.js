/**
 * Charts to draw
 */
function drawCharts() {
    var ctx = document.getElementById('myLineChart');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['May', 'June', 'July', 'August', 'September', 'October'],
            datasets: [
                {
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: '#00af66'
                }
            ],
        },
        options: {
            title: {
                display: true,
                text: 'My Savings by Month',
                fontColor: '#ffffff'
            },
            legend: {
                display: false
            },
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                            fontColor: '#ffffff',
                            callback: function (value, index, values) {
                                return value.toLocaleString("en-US", { style: "currency", currency: "USD" });
                            }
                        }
                    }
                ],
                xAxes: [
                    {
                        ticks: {
                            fontColor: '#ffffff'
                        }
                    }
                ]
            }
        }
    });


    var ctx2 = document.getElementById('myBarChart');
    var myBarChart = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['May', 'June', 'July', 'August', 'September', 'October'],
            datasets: [
                {
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: '#00af66'
                }
            ],
        },
        options: {
            title: {
                display: true,
                text: 'My Savings by Month',
                fontColor: '#ffffff'
            },
            legend: {
                display: false
            },
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                            fontColor: '#ffffff',
                            callback: function (value, index, values) {
                                return value.toLocaleString("en-US", { style: "currency", currency: "USD" });
                            }
                        }
                    }
                ],
                xAxes: [
                    {
                        ticks: {
                            fontColor: '#ffffff'
                        }
                    }
                ]
            }
        }
    });
}