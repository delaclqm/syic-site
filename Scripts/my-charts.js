/**
 * Charts to draw
 */
function drawChartsForGreenScorePage() {
    var ctx = document.getElementById('myLineChart');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['May', 'June', 'July', 'August', 'September', 'October'],
            datasets: [
                {
                    data: [28, 10, 22, 20, 24, 25],
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
            labels: ['Food & Drink', 'Clothing', 'Health & Beauty'],
            datasets: [
                {
                    data: [3, 4, 5],
                    backgroundColor: '#00af66'
                }
            ],
        },
        options: {
            title: {
                display: true,
                text: 'My Score by Purchasing Groups',
                fontColor: '#ffffff'
            },
            legend: {
                display: false
            },
            tooltips: {
                enabled: false
            },
            scales: {
                yAxes: [
                    {
                        ticks: {
                            min: 1,
                            fontColor: '#ffffff',
                            stepSize: 1,
                            callback: function (value, index, values) {
                                if (value >= 5) return 'A';
                                if (value >= 4) return 'B';
                                if (value >= 3) return 'C';
                                if (value >= 2) return 'D';
                                else return 'F';
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

function drawChartsForGreenGoalsPage() {
    var ctx1 = document.getElementById('foodChart');
    var myFoodChart = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['Food & Drink'],
            datasets: [
                {   
                    label: 'Current',
                    data: [3],
                    backgroundColor: '#0b142e'
                },
                {   
                    label: 'Goals Achieved',
                    data: [0.2],
                    backgroundColor: '#00af66'
                },
                {   
                    label: 'If All Goals Achieved',
                    data: [0.2],
                    backgroundColor: '#04ff96'
                },
            ],
        },
        options: {
            title: {
                display: false,
                text: 'Food & Drink Goals',
                fontColor: '#ffffff'
            },
            legend: {
                display: true,
                position: 'right',
                labels: {fontColor: '#ffffff'}
            },
            tooltips: {
                enabled: false
            },
            scales: {
                yAxes: [
                    {
                        stacked: true,
                        ticks: {
                            min: 1,
                            fontColor: '#ffffff',
                            stepSize: 1,
                            callback: function (value, index, values) {
                                if (value >= 5) return 'A';
                                if (value >= 4) return 'B';
                                if (value >= 3) return 'C';
                                if (value >= 2) return 'D';
                                else return 'F';
                            }
                        }
                    }
                ],
                xAxes: [
                    {
                        stacked: true,
                        ticks: {
                            fontColor: '#ffffff'
                        }
                    }
                ]
            }
        }
    });
}