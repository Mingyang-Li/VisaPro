import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { EmploymentHistoryList } from "./employmentHistory/EmploymentHistoryList";
import { EmploymentHistoryCreate } from "./employmentHistory/EmploymentHistoryCreate";
import { EmploymentHistoryEdit } from "./employmentHistory/EmploymentHistoryEdit";
import { EmploymentHistoryShow } from "./employmentHistory/EmploymentHistoryShow";
import { EducationHistoryList } from "./educationHistory/EducationHistoryList";
import { EducationHistoryCreate } from "./educationHistory/EducationHistoryCreate";
import { EducationHistoryEdit } from "./educationHistory/EducationHistoryEdit";
import { EducationHistoryShow } from "./educationHistory/EducationHistoryShow";
import { TravelHistoryList } from "./travelHistory/TravelHistoryList";
import { TravelHistoryCreate } from "./travelHistory/TravelHistoryCreate";
import { TravelHistoryEdit } from "./travelHistory/TravelHistoryEdit";
import { TravelHistoryShow } from "./travelHistory/TravelHistoryShow";
import { FamilyMemberList } from "./familyMember/FamilyMemberList";
import { FamilyMemberCreate } from "./familyMember/FamilyMemberCreate";
import { FamilyMemberEdit } from "./familyMember/FamilyMemberEdit";
import { FamilyMemberShow } from "./familyMember/FamilyMemberShow";
import { PersonalInfoList } from "./personalInfo/PersonalInfoList";
import { PersonalInfoCreate } from "./personalInfo/PersonalInfoCreate";
import { PersonalInfoEdit } from "./personalInfo/PersonalInfoEdit";
import { PersonalInfoShow } from "./personalInfo/PersonalInfoShow";
import { ApplicantList } from "./applicant/ApplicantList";
import { ApplicantCreate } from "./applicant/ApplicantCreate";
import { ApplicantEdit } from "./applicant/ApplicantEdit";
import { ApplicantShow } from "./applicant/ApplicantShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"VisaPro"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="EmploymentHistory"
          list={EmploymentHistoryList}
          edit={EmploymentHistoryEdit}
          create={EmploymentHistoryCreate}
          show={EmploymentHistoryShow}
        />
        <Resource
          name="EducationHistory"
          list={EducationHistoryList}
          edit={EducationHistoryEdit}
          create={EducationHistoryCreate}
          show={EducationHistoryShow}
        />
        <Resource
          name="TravelHistory"
          list={TravelHistoryList}
          edit={TravelHistoryEdit}
          create={TravelHistoryCreate}
          show={TravelHistoryShow}
        />
        <Resource
          name="FamilyMember"
          list={FamilyMemberList}
          edit={FamilyMemberEdit}
          create={FamilyMemberCreate}
          show={FamilyMemberShow}
        />
        <Resource
          name="PersonalInfo"
          list={PersonalInfoList}
          edit={PersonalInfoEdit}
          create={PersonalInfoCreate}
          show={PersonalInfoShow}
        />
        <Resource
          name="Applicant"
          list={ApplicantList}
          edit={ApplicantEdit}
          create={ApplicantCreate}
          show={ApplicantShow}
        />
      </Admin>
    </div>
  );
};

export default App;
