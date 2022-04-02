import * as React from 'react';

import {
  Create,
  CreateProps,
  SimpleForm,
} from 'react-admin';


export const ApplicantionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        {/* add form for entering PersonalInfo */}
        {/* add form for entering EducationHistory + options_to_add_more*/}
        {/* add form for entering EmploymentHistory + options_to_add_more */}
        {/* add form for entering FamilyMember + options_to_add_more */}
        {/* add form for entering TravelHistory + options_to_add_more */}
      </SimpleForm>
    </Create>
  );
};
