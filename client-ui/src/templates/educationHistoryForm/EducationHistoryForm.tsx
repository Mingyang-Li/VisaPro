import React from 'react';
import EducationHistoryTable from '../educationHistoryTable/EducationHistoryTable';
import EducationHistoryCreate from '../educationHistoryCreate/EducationHistoryCreate';

export const EducationHistoryForm: React.FC = () => (
  <>
    <EducationHistoryCreate />
    <br />
    <EducationHistoryTable />
  </>
);
