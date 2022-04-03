import { Button, Link } from 'react-admin';
import { IoNewspaperOutline } from 'react-icons/io5';
import { Applicant } from '../../api/applicant/Applicant';

export const AddPersonalInfo = () => (
  <Button
    component={Link}
    to={{
      pathname: 'personalInfos/create',
      state: { record: { applicantId: 1 } },
    }}
    label={'Add personal info'}
  >
    <IoNewspaperOutline />
  </Button>
);
