import React from 'react';
import Chart from 'react-apexcharts';

const RadialBarChart: React.FC = () => {
  const series = [100];
  const labelColor = 'rgba(27, 132, 255, 0.85)';
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: 'radialBar', // Change type to radialBar
      height: 350,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: '65%',
          },
          dataLabels: {
            name: {
              show: true,
              fontWeight: '700',
            },
            value: {
              color: labelColor,
              fontSize: '30px',
              fontWeight: '700',
              offsetY: 20,
              show: true,
              formatter: function (val) {
                return val + '%'
              },
            },
          },
          track: {
            background: 'rgba(27, 132, 255, 0.85)',
            strokeWidth: '100%',
          },
        },
      },
    labels: ['Apple'],
  };

  return <Chart options={options} series={series} type="radialBar" />;
};

export default RadialBarChart;
