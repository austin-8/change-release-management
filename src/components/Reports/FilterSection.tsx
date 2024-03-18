import React from 'react';
import { Card, CardBody, Form, FormControl, Button, Dropdown, InputGroup, Row, Col } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import CustomDropdown from '../Common/CustomDropdown';
import { serviceOffering, statusData, typeData } from '../../utils/Common';
import moment from 'moment';
import DateRangePickerComponent from '../Common/DateRangePickerComponent';

interface FilterSectionProps {
  setSearchInput: (searchInput: string) => void;
  setFilterData: React.Dispatch<React.SetStateAction<{ type: string; state: string; serviceOffering: string; }>>;
  filterData: { type: string; state: string; serviceOffering: string };
  setDateRange: React.Dispatch<React.SetStateAction<any>>;
  dateRange: { startDate: Date | null; endDate: Date | null; key: string };
}

const FilterSection: React.FC<FilterSectionProps> = ({ setSearchInput, setFilterData, filterData, setDateRange, dateRange }) => {

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const handleFilterChange = (key: string, value: string) => {
    setFilterData(prevFilterData => ({
      ...prevFilterData,
      [key]: value
    }));
  };

  const handleClearFilter = () => {
    setFilterData(prevFilterData => ({
      ...prevFilterData,
      type: "",
      state: "",
      serviceOffering: ""
    }));
    setDateRange((prevFilterData: any) => ({
      ...prevFilterData,
      startDate: null,
      endDate: null,
      key: 'selection',
    }))
  };

  return (
    <Card className='mt-3'>
      <CardBody>
        <InputGroup className="mb-3 me-3" style={{ flex: 1 }}>
          <InputGroup.Text>
            <FaSearch />
          </InputGroup.Text>
          <FormControl type="text" placeholder="Change No./ Short Description" onChange={handleInputChange} />
        </InputGroup>
        <Row>
          <Col xs={2}><DateRangePickerComponent setDateRange={setDateRange} dateRange={dateRange} /></Col>
          <Col xs={2}>
            <CustomDropdown label="Type" options={typeData()} onSelect={value => handleFilterChange('type', value)} selectedValue={filterData.type} />
          </Col>
          <Col xs={2}><CustomDropdown label="State" options={statusData()} onSelect={value => handleFilterChange('state', value)} selectedValue={filterData.state} /></Col>
          <Col xs={2}><CustomDropdown label="Service offering" options={serviceOffering()} onSelect={value => handleFilterChange('serviceOffering', value)} selectedValue={filterData.serviceOffering} /></Col>
          <Col xs={2}><CustomDropdown label="Task type" options={[]} /></Col>
          <Col xs={2}><Button className="px-4 border-0 bg-danger" onClick={handleClearFilter}>Clear</Button></Col>

        </Row>
      </CardBody>
    </Card>
  );
};

export default FilterSection;
