import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';
import { Card, CardBody, CardHeader } from 'react-bootstrap';

interface PieChartProps {
  labels: string[];
  title?: string;
  series: { data: any[] }[];
}

const PieChart: React.FC<PieChartProps> = ({ labels, series, title }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      plotOptions: {
        pie: {
          expandOnClick: false,
          customScale: 0.6,
        }
      },
      chart: {
        type: 'donut'
      },
      series: series[0]?.data,
      labels: labels,
      dataLabels: {
        style: {
          fontSize: '25px',
        }
      }
    };

    if (chartRef.current) {
      const chart = new ApexCharts(chartRef.current, options);
      chart.render();

      return () => {
        chart.destroy();
      };
    }
  }, []);

  return (
    <Card className='h-100'> 
      <CardBody>
      <h3>{title}</h3>
        <div id="chart" ref={chartRef} />
      </CardBody>
    </Card>
  );
};

export default PieChart;
