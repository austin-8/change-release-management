import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import moment from 'moment';
import { IoMdClose } from "react-icons/io";

interface DateSectionProps {
  setDateRange: React.Dispatch<React.SetStateAction<{ startDate: Date; endDate: Date; key: string }>>;
  dateRange: { startDate: Date | null; endDate: Date | null; key: string };
}

const DateRangePickerComponent: React.FC<DateSectionProps> = ({ setDateRange, dateRange }) => {

  const [calendarOpen, setCalendarOpen] = useState(false);

  const handleSelect = (ranges: any) => {
    const { startDate, endDate } = ranges.selection;
    setDateRange({ startDate, endDate, key: 'selection' });
    setCalendarOpen(false);
  };

  const formatDate = (date: any) => moment(date).format('D/MM/YYYY');

  const toggleCalendar = () => {
    setCalendarOpen(!calendarOpen);
  };

  return (
    <div style={{ position: 'relative' }}>
      <div
        id="reportrange"
        onClick={toggleCalendar}
        style={{
          background: '#fff',
          cursor: 'pointer',
          padding: '5px 10px',
          border: '1px solid #ccc',
          width: '100%',
        }}
      >
        <i className="fa fa-calendar"></i>&nbsp;
        <span>
          {dateRange.startDate === null ? "Select date" :
            `${formatDate(dateRange.startDate)} - ${formatDate(dateRange.endDate)}`
          }
        </span>{' '}
        <i className="fa fa-caret-down"></i>
          {/* <IoMdClose /> */}
      </div>
      {calendarOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            zIndex: 999,
            background: '#fff',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        >
          {/* <DateRange ranges={[dateRange]} onChange={handleSelect} /> */}
        </div>
      )}
    </div>
  );
};

export default DateRangePickerComponent;
