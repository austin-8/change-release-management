import React from 'react';
import TypeChart from '../TypeChart/TypeChart';
import styles from './Reports.module.css';
import StatusChart from '../StatusChart/StatusChart';
import ServiceOfferingChart from '../ServiceOfferingChart/ServiceOfferingChart';
import { Row,Col, Card, CardBody } from 'react-bootstrap';
import CountCard from '../Common/CountCard';
import Chart from "react-apexcharts";

const Reports = () => {
  const options = {
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: ['Jan','Feb','Mar', 'Apr','May','June', 'July']
    }
  };
  const series = [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91]
    }
  ]
  return (
    <React.Fragment>
       <Row className='mt-2'>
          <Col xs={5}>
            <Row>
              <Col xs={6}>
                <CountCard title={"Total Changes"} count={300}/>
              </Col>
              <Col xs={6}>
                 <CountCard title={"Delayed Changes"} count={22}/>
              </Col>
              <Col xs={12} className='mt-3'>
                <Card>
                  <CardBody>
              <Chart
                options={options}
                series={series}
                type="bar"
                width="500"
              />
              </CardBody>
              </Card>
              </Col>
            </Row>
          </Col>
            <Col xs={7}>
                <ServiceOfferingChart />
            </Col>
        </Row>
        <Row className='mt-4'>
             <Col xs={4}>
                 <TypeChart />
            </Col>
            <Col xs={4}>
                <StatusChart />
            </Col>
        </Row>
      
    </React.Fragment>
      
  )
}

export default Reports;