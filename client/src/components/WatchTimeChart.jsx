import React, { Component } from 'react'
import Chart from 'chart.js'

class WatchTimeChart extends Component {
    componentDidMount() {
        const ctx = document.getElementById('header-chart')
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: this.props.labels,
                datasets: [{
                    data: this.props.data,
                    backgroundColor: 'rgba(132, 250, 176, 0.2)',
                    borderColor: 'rgba(132, 250, 176, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [{
                        display: false
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        },
                        display: false
                    }]
                }
            }
        });
    }

	render() {
		return (
            <canvas id='header-chart'/>
		)
	}
}

export default WatchTimeChart
