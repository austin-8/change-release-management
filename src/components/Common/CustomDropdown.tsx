import React from 'react';
import { Form, Dropdown } from 'react-bootstrap';

interface CustomDropdownProps {
  label: string;
  options: string[];
  onSelect?: (value: string) => void;
  selectedValue?: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ label, options, onSelect, selectedValue }) => {

  const handleSelect = (value: string) => {
    if (onSelect) {
      onSelect(value);
    }
  };

  return (
    <Form.Group className="mb-3 me-3" controlId={`formDropdown-${label}`}>
      <Dropdown>
        <Dropdown.Toggle variant="primary" style={{ width: '100%' }} id={`dropdown-${label}`}>
          {label}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {options.map((option, index) => (
            <Dropdown.Item key={index} href="#" onClick={() => handleSelect(option)} active={option === selectedValue}>
              {option}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </Form.Group>
  );
};

export default CustomDropdown;
