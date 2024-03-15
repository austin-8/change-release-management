import React, { useState } from 'react';
import styles from './TypeChart.module.css';
import PieChart from '../Chart/PieChart/PieChart';
import data from '../Dashboard/data.json';
import { typeData } from '../../utils/Common';
import BarChart from '../Chart/BarChart/BarChart';
import CustomDropdown from '../Common/CustomDropdown';
import LineChart from '../Chart/LineChart/LineChart';
import { Col, Row } from 'react-bootstrap';

const TypeChart = () => {
  const [filterData, setFilterData] = useState({
    chart: "",
  });
  // console.log(data)
  const labels = typeData();
  const counts = new Array(labels.length).fill(0);

  data.forEach(item => {
    const index = labels.indexOf(item.type);
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

  return <PieChart title={"Types"} labels={labels} series={series} />
}

export default TypeChart