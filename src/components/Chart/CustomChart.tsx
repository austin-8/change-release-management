import React from 'react';
import Chart from "react-apexcharts";
import { Card, CardBody } from 'react-bootstrap';

interface CustomChartProps {
    series: any;
    options: any;
    type: any;
    title: string;
}

const CustomChart: React.FC <CustomChartProps>  = (props) => {
    const {options, series, type, title} = props;
  return (
    <Card className='h-100'>
      <CardBody>
        <h4>{title}</h4>
       <Chart
        options={options}
        series={series}
        type={type}
        width={'80%'}
        />
    </CardBody>
    </Card>
  )
}


export default CustomChart