import React, { useState } from 'react';
import { Table, Card } from 'react-bootstrap';
import CustomPagination from './CustomPagination';
import styles from './CustomTable.module.css';
import { Resizable, ResizeCallbackData } from 'react-resizable';

interface Column {
  header: string;
  field: string;
}

interface RowData {
  [key: string]: string | number;
}

interface CustomTableProps {
  data: RowData[];
  columns: Column[];
  itemsPerPage: number;
  searchInput: string;
  filterData: { type: string; state: string; serviceOffering: string };
  dateRange: { startDate: Date | null; endDate: Date | null; key: string; };
}

const CustomTable: React.FC<CustomTableProps> = ({ data, columns, itemsPerPage, searchInput, filterData, dateRange }) => {

  const filteredData = data.filter(row => {
    const numberMatch = row['number'].toString().toLowerCase().includes(searchInput.toLowerCase());
    const descriptionMatch = row['shortDescription'].toString().toLowerCase().includes(searchInput.toLowerCase());

    const typeMatch = !filterData.type || filterData.type === row['type'];
    const stateMatch = !filterData.state || filterData.state === row['state'];
    const serviceOfferingMatch = !filterData.serviceOffering || filterData.serviceOffering === row['serviceOffering'];

    const startDate = dateRange.startDate;
    const endDate = dateRange.endDate;
    const rowDate = new Date(row['plannedStartDate']);
    const dateRangeMatch = !startDate || !endDate || (startDate <= rowDate && rowDate <= endDate);

    return (numberMatch || descriptionMatch) && typeMatch && stateMatch && serviceOfferingMatch && dateRangeMatch;
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [columnWidths, setColumnWidths] = useState<{ [key: number]: number }>({});
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

  const onResize = (index: number, { size }: ResizeCallbackData) => {
    setColumnWidths(prevWidths => ({
      ...prevWidths,
      [index]: size.width,
    }));
  };

  return (
    <Card className={`styles.card mt-3`}>
      <Card.Body>
        <Table striped bordered hover className={styles.table}>
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={index}>{column.header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentItems.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column, colIndex) => (
                  <td key={colIndex}>{row[column.field]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
        <CustomPagination
          totalPages={totalPages}
          activePage={currentPage}
          onPageChange={handlePageChange}
        />
      </Card.Body>
    </Card>
  );
};

export default CustomTable;
