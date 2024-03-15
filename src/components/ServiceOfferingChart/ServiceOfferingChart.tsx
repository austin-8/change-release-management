import React, { useState } from 'react';
import styles from './ServiceOfferingChart.module.css';
import PieChart from '../Chart/PieChart/PieChart';
import data from '../Dashboard/data.json';
import { serviceOffering } from '../../utils/Common';
import BarChart from '../Chart/BarChart/BarChart';
import CustomDropdown from '../Common/CustomDropdown';
import LineChart from '../Chart/LineChart/LineChart';
import { Col, Row } from 'react-bootstrap';

const ServiceOfferingChart = () => {
  const labels = serviceOffering();
  const counts = new Array(labels.length).fill(0);
  const [filterData, setFilterData] = useState({
    chart: "",
  })

  data.forEach(item => {
    const index = labels.indexOf(item.serviceOffering);
    if (index !== -1) {
      counts[index]++;
    }
  });

  const series = [{
    data: counts
  }];

  const handleFilterChange = (key: string, value: string) => {
    setFilterData(prevFilterData => ({
      ...prevFilterData,
      [key]: value
    }));
  };

  return <PieChart title={"Service Offering"} labels={labels} series={series} />
    
}

export default ServiceOfferingChart