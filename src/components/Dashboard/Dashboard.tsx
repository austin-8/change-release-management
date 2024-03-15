import React, { useState } from 'react';
import CustomTable from '../Common/CustomTable';
import data from './data.json';
import FilterSection from './FilterSection';

const Dashboard: React.FC = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filterData, setFilterData] = useState({
    type: "",
    state: "",
    serviceOffering: ""
  })
  const [dateRange, setDateRange] = useState(
    {
      startDate: null, 
      endDate: null,   
      key: 'selection',
    },
  );
  console.log(dateRange)

  // Column definitions
  const columns = [
    { header: 'Number', field: 'number' },
    { header: 'Short description', field: 'shortDescription' },
    { header: 'Type', field: 'type' },
    { header: 'State', field: 'state' },
    { header: 'Planned start date', field: 'plannedStartDate' },
    { header: 'Planned end date', field: 'plannedEndDate' },
    { header: 'Assigned to', field: 'assignedTo' },
    { header: 'Closed', field: 'closed' },
    { header: 'Service offering', field: 'serviceOffering' },
    { header: 'Task type', field: 'taskType' }
  ];

  return (
    <div>
      <FilterSection setSearchInput={setSearchInput} setFilterData={setFilterData} filterData={filterData} setDateRange={setDateRange} dateRange={dateRange} />
      <CustomTable data={data} columns={columns} itemsPerPage={10} searchInput={searchInput} filterData={filterData} dateRange={dateRange} />
    </div>
  );
};

export default Dashboard;
