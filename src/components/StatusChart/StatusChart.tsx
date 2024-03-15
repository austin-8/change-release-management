import React, { useState } from 'react';
import styles from './StatusChart.module.css';
import PieChart from '../Chart/PieChart/PieChart';
import data from '../Dashboard/data.json';
import { statusData } from '../../utils/Common';
import BarChart from '../Chart/BarChart/BarChart';
import CustomDropdown from '../Common/CustomDropdown';
import LineChart from '../Chart/LineChart/LineChart';
import { Col, Row } from 'react-bootstrap';

const StatusChart = () => {
  const status = statusData();
  const labels = status;
  const counts = new Array(labels.length).fill(0);
  const [filterData, setFilterData] = useState({
    chart: "",
  })

  data.forEach(item => {
    const index = labels.indexOf(item.state);
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

  return  <PieChart title={"Status"} labels={labels} series={series} />
      
}

export default StatusChart