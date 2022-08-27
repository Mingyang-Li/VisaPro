import React from 'react';
import EmploymentHistoryCreate from '../employmentHistoryCreate/EmploymentHistoryCreate';
import EmploymentHistoryTable from '../employmentHistoryTable/EmploymentHistoryTable';

export const EmploymentHistoryForm: React.FC = () => (
  <>
    <EmploymentHistoryCreate />
    <br />
    <EmploymentHistoryTable />
  </>
);
