import React, { Component } from "react"
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), {ssr:false})

class MixedChart extends Component {
  constructor(props) {
    super(props)

    this.state = {
    
      series: [{
        name: 'Deaths 2020',
        type: 'column',
        data: props.deaths2020
      }, {
        name: 'Deaths 2019',
        type: 'column',
        data: props.deaths2019
      }, {
        name: 'Covid19',
        type: 'line',
        data: props.deathsCovid19
      }],
      options: {
        chart: {
          height: 600,
          type: 'line',
          stacked: false
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [1, 1, 4]
        },
        title: {
          text: '26 days (deaths pulmonary complications 2019 vs 2020) vs Covid 19 Growth line',
          align: 'left',
          offsetX: 110
        },
        xaxis: {
          categories: props.periodDates,
        },
        yaxis: [
          {
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: '#008FFB'
            },
            labels: {
              style: {
                colors: '#008FFB',
              }
            },
            title: {
              text: "Pulmonary complications 2020",
              style: {
                color: '#008FFB',
              }
            },
            tooltip: {
              enabled: true
            }
          },
          {
            seriesName: 'Income',
            opposite: true,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: '#00E396'
            },
            labels: {
              style: {
                colors: '#00E396',
              }
            },
            title: {
              text: "Pulmonary complications 2019",
              style: {
                color: '#00E396',
              }
            },
          },
          {
            seriesName: 'Revenue',
            opposite: true,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: '#FEB019'
            },
            labels: {
              style: {
                colors: '#FEB019',
              },
            },
            title: {
              text: "Covid19",
              style: {
                color: '#FEB019',
              }
            }
          },
        ],
        tooltip: {
          fixed: {
            enabled: true,
            position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
            offsetY: 30,
            offsetX: 60
          },
        },
        legend: {
          horizontalAlign: 'left',
          offsetX: 40
        }
      },
    
    
    }
  }
  render() {
    return (
      <Chart 
        options={this.state.options} 
        series={this.state.series} 
        type="line" 
        width={1000}
        height={600} 
      />

    )
  }
}

export default MixedChart