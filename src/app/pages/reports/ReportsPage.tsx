import React, { useState } from 'react';
import data from "../../data/data.json"
import { KTSVG, toAbsoluteUrl } from '../../../_metronic/helpers';
import Reports from '../../modules/reports/Reports';

interface Task {
  "number": string;
  "shortDescription": "string";
  "type": string;
  "state": string;
  "plannedStartDate": string;
  "plannedEndDate": string;
  "assignedTo": string;
  "closed": string;
  "serviceOffering": string;
  "taskType": string;
}

interface Header {
  label: string;
  key: keyof Task;
}

interface Props {
  className?: string;
}

const ReportsPage: React.FC<Props> = ({ className }) => {
  const [tableData, setTableData] = useState<Task[]>(data as Task[]);

  const [tableHeaders, setTableHeaders] = useState<Header[]>([
    { label: 'Number', key: 'number' },
    { label: 'Short Description', key: 'shortDescription' },
    { label: 'Type', key: 'type' },
    { label: 'State', key: 'state' },
    { label: 'Planned Start Date', key: 'plannedStartDate' },
    { label: 'Planned End Date', key: 'plannedEndDate' },
    { label: 'Assigned To', key: 'assignedTo' },
    { label: 'Closed', key: 'closed' },
    { label: 'Service Offering', key: 'serviceOffering' },
    { label: 'Task Type', key: 'taskType' },
    // Add more headers as needed
  ]);

  return (
    <>
     
      <Reports />
    </>
  );
};

export { ReportsPage };
