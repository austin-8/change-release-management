import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

interface ChartProps {
  labels: string[];
  series: { data: any[] }[];
}


const BarChart: React.FC<ChartProps> = ({ labels, series }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      chart: {
        type: 'bar'
      },
      series: [{
        name: 'sales',
        data: series[0]?.data
      }],
      xaxis: {
        categories: labels
      }
    };

    if (chartRef.current) {
      const chart = new ApexCharts(chartRef.current, options);
      chart.render();

      // Cleanup on component unmount
      return () => {
        chart.destroy();
      };
    }
  }, []);

  return (
    <div id="chart" ref={chartRef} />
  );
};

export default BarChart