import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Applicant = {
  __typename?: 'Applicant';
  archived?: Maybe<Scalars['Boolean']>;
  archivedAt?: Maybe<Scalars['DateTime']>;
  archivedBy?: Maybe<User>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  educationHistories: Array<EducationHistory>;
  employmentHistories: Array<EmploymentHistory>;
  familyMembers: Array<FamilyMember>;
  id: Scalars['String'];
  personalInfo?: Maybe<PersonalInfo>;
  travelHistories: Array<TravelHistory>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedBy: Array<User>;
  user?: Maybe<User>;
};


export type ApplicantEducationHistoriesArgs = {
  orderBy?: InputMaybe<Array<EducationHistoryOrderByInput>>;
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
  where?: InputMaybe<EducationHistoryWhereInput>;
};


export type ApplicantEmploymentHistoriesArgs = {
  orderBy?: InputMaybe<Array<EmploymentHistoryOrderByInput>>;
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
  where?: InputMaybe<EmploymentHistoryWhereInput>;
};


export type ApplicantFamilyMembersArgs = {
  orderBy?: InputMaybe<Array<FamilyMemberOrderByInput>>;
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
  where?: InputMaybe<FamilyMemberWhereInput>;
};


export type ApplicantTravelHistoriesArgs = {
  orderBy?: InputMaybe<Array<TravelHistoryOrderByInput>>;
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
  where?: InputMaybe<TravelHistoryWhereInput>;
};


export type ApplicantUpdatedByArgs = {
  orderBy?: InputMaybe<Array<UserOrderByInput>>;
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
  where?: InputMaybe<UserWhereInput>;
};

export type ApplicantCreateInput = {
  archived?: InputMaybe<Scalars['Boolean']>;
  archivedAt?: InputMaybe<Scalars['DateTime']>;
  archivedBy?: InputMaybe<UserWhereUniqueInput>;
  createdBy?: InputMaybe<UserWhereUniqueInput>;
  educationHistories?: InputMaybe<EducationHistoryCreateNestedManyWithoutApplicantsInput>;
  employmentHistories?: InputMaybe<EmploymentHistoryCreateNestedManyWithoutApplicantsInput>;
  familyMembers?: InputMaybe<FamilyMemberCreateNestedManyWithoutApplicantsInput>;
  personalInfo?: InputMaybe<PersonalInfoWhereUniqueInput>;
  travelHistories?: InputMaybe<TravelHistoryCreateNestedManyWithoutApplicantsInput>;
  updatedBy?: InputMaybe<UserCreateNestedManyWithoutApplicantsInput>;
  user?: InputMaybe<UserWhereUniqueInput>;
};

export type ApplicantCreateNestedManyWithoutFamilyMembersInput = {
  connect?: InputMaybe<Array<ApplicantWhereUniqueInput>>;
};

export type ApplicantCreateNestedManyWithoutUsersInput = {
  connect?: InputMaybe<Array<ApplicantWhereUniqueInput>>;
};

export type ApplicantListRelationFilter = {
  every?: InputMaybe<ApplicantWhereInput>;
  none?: InputMaybe<ApplicantWhereInput>;
  some?: InputMaybe<ApplicantWhereInput>;
};

export type ApplicantOrderByInput = {
  archived?: InputMaybe<SortOrder>;
  archivedAt?: InputMaybe<SortOrder>;
  archivedById?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdById?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  personalInfoId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ApplicantUpdateInput = {
  archived?: InputMaybe<Scalars['Boolean']>;
  archivedAt?: InputMaybe<Scalars['DateTime']>;
  archivedBy?: InputMaybe<UserWhereUniqueInput>;
  createdBy?: InputMaybe<UserWhereUniqueInput>;
  educationHistories?: InputMaybe<EducationHistoryUpdateManyWithoutApplicantsInput>;
  employmentHistories?: InputMaybe<EmploymentHistoryUpdateManyWithoutApplicantsInput>;
  familyMembers?: InputMaybe<FamilyMemberUpdateManyWithoutApplicantsInput>;
  personalInfo?: InputMaybe<PersonalInfoWhereUniqueInput>;
  travelHistories?: InputMaybe<TravelHistoryUpdateManyWithoutApplicantsInput>;
  updatedBy?: InputMaybe<UserUpdateManyWithoutApplicantsInput>;
  user?: InputMaybe<UserWhereUniqueInput>;
};

export type ApplicantUpdateManyWithoutFamilyMembersInput = {
  connect?: InputMaybe<Array<ApplicantWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<ApplicantWhereUniqueInput>>;
  set?: InputMaybe<Array<ApplicantWhereUniqueInput>>;
};

export type ApplicantUpdateManyWithoutUsersInput = {
  connect?: InputMaybe<Array<ApplicantWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<ApplicantWhereUniqueInput>>;
  set?: InputMaybe<Array<ApplicantWhereUniqueInput>>;
};

export type ApplicantWhereInput = {
  archived?: InputMaybe<BooleanNullableFilter>;
  archivedAt?: InputMaybe<DateTimeNullableFilter>;
  archivedBy?: InputMaybe<UserWhereUniqueInput>;
  createdBy?: InputMaybe<UserWhereUniqueInput>;
  educationHistories?: InputMaybe<EducationHistoryListRelationFilter>;
  employmentHistories?: InputMaybe<EmploymentHistoryListRelationFilter>;
  familyMembers?: InputMaybe<FamilyMemberListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  personalInfo?: InputMaybe<PersonalInfoWhereUniqueInput>;
  travelHistories?: InputMaybe<TravelHistoryListRelationFilter>;
  updatedBy?: InputMaybe<UserListRelationFilter>;
  user?: InputMaybe<UserWhereUniqueInput>;
};

export type ApplicantWhereUniqueInput = {
  id: Scalars['String'];
};

export type BooleanNullableFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<Scalars['Boolean']>;
};

export type Credentials = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type EducationHistory = {
  __typename?: 'EducationHistory';
  additionalInfo?: Maybe<Scalars['String']>;
  applicant?: Maybe<Applicant>;
  archived?: Maybe<Scalars['Boolean']>;
  archivedBy?: Maybe<User>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  endDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  institutionName?: Maybe<Scalars['String']>;
  isCurrentInstitution?: Maybe<Scalars['Boolean']>;
  qualificationGained?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<User>;
};

export type EducationHistoryCreateInput = {
  additionalInfo?: InputMaybe<Scalars['String']>;
  applicant?: InputMaybe<ApplicantWhereUniqueInput>;
  archived?: InputMaybe<Scalars['Boolean']>;
  archivedBy?: InputMaybe<UserWhereUniqueInput>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  createdBy?: InputMaybe<UserWhereUniqueInput>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  institutionName?: InputMaybe<Scalars['String']>;
  isCurrentInstitution?: InputMaybe<Scalars['Boolean']>;
  qualificationGained?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<UserWhereUniqueInput>;
};

export type EducationHistoryCreateNestedManyWithoutApplicantsInput = {
  connect?: InputMaybe<Array<EducationHistoryWhereUniqueInput>>;
};

export type EducationHistoryCreateNestedManyWithoutUsersInput = {
  connect?: InputMaybe<Array<EducationHistoryWhereUniqueInput>>;
};

export type EducationHistoryListRelationFilter = {
  every?: InputMaybe<EducationHistoryWhereInput>;
  none?: InputMaybe<EducationHistoryWhereInput>;
  some?: InputMaybe<EducationHistoryWhereInput>;
};

export type EducationHistoryOrderByInput = {
  additionalInfo?: InputMaybe<SortOrder>;
  applicantId?: InputMaybe<SortOrder>;
  archived?: InputMaybe<SortOrder>;
  archivedById?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdById?: InputMaybe<SortOrder>;
  endDate?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  institutionName?: InputMaybe<SortOrder>;
  isCurrentInstitution?: InputMaybe<SortOrder>;
  qualificationGained?: InputMaybe<SortOrder>;
  startDate?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedById?: InputMaybe<SortOrder>;
};

export type EducationHistoryUpdateInput = {
  additionalInfo?: InputMaybe<Scalars['String']>;
  applicant?: InputMaybe<ApplicantWhereUniqueInput>;
  archived?: InputMaybe<Scalars['Boolean']>;
  archivedBy?: InputMaybe<UserWhereUniqueInput>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  createdBy?: InputMaybe<UserWhereUniqueInput>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  institutionName?: InputMaybe<Scalars['String']>;
  isCurrentInstitution?: InputMaybe<Scalars['Boolean']>;
  qualificationGained?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<UserWhereUniqueInput>;
};

export type EducationHistoryUpdateManyWithoutApplicantsInput = {
  connect?: InputMaybe<Array<EducationHistoryWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<EducationHistoryWhereUniqueInput>>;
  set?: InputMaybe<Array<EducationHistoryWhereUniqueInput>>;
};

export type EducationHistoryUpdateManyWithoutUsersInput = {
  connect?: InputMaybe<Array<EducationHistoryWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<EducationHistoryWhereUniqueInput>>;
  set?: InputMaybe<Array<EducationHistoryWhereUniqueInput>>;
};

export type EducationHistoryWhereInput = {
  additionalInfo?: InputMaybe<StringNullableFilter>;
  applicant?: InputMaybe<ApplicantWhereUniqueInput>;
  archived?: InputMaybe<BooleanNullableFilter>;
  archivedBy?: InputMaybe<UserWhereUniqueInput>;
  city?: InputMaybe<StringNullableFilter>;
  country?: InputMaybe<StringNullableFilter>;
  createdBy?: InputMaybe<UserWhereUniqueInput>;
  endDate?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  institutionName?: InputMaybe<StringNullableFilter>;
  isCurrentInstitution?: InputMaybe<BooleanNullableFilter>;
  qualificationGained?: InputMaybe<StringNullableFilter>;
  startDate?: InputMaybe<DateTimeNullableFilter>;
  updatedBy?: InputMaybe<UserWhereUniqueInput>;
};

export type EducationHistoryWhereUniqueInput = {
  id: Scalars['String'];
};

export type EmploymentHistory = {
  __typename?: 'EmploymentHistory';
  additionalInfo?: Maybe<Scalars['String']>;
  applicant?: Maybe<Applicant>;
  archived?: Maybe<Scalars['Boolean']>;
  archivedBy?: Maybe<User>;
  cityOfWork?: Maybe<Scalars['String']>;
  companyName?: Maybe<Scalars['String']>;
  countryOfWork?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  duties?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  isCurrentJob?: Maybe<Scalars['Boolean']>;
  jobTitle?: Maybe<Scalars['String']>;
  nzBusinessNumber?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<User>;
};

export type EmploymentHistoryCreateInput = {
  additionalInfo?: InputMaybe<Scalars['String']>;
  applicant?: InputMaybe<ApplicantWhereUniqueInput>;
  archived?: InputMaybe<Scalars['Boolean']>;
  archivedBy?: InputMaybe<UserWhereUniqueInput>;
  cityOfWork?: InputMaybe<Scalars['String']>;
  companyName?: InputMaybe<Scalars['String']>;
  countryOfWork?: InputMaybe<Scalars['String']>;
  createdBy?: InputMaybe<UserWhereUniqueInput>;
  duties?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  isCurrentJob?: InputMaybe<Scalars['Boolean']>;
  jobTitle?: InputMaybe<Scalars['String']>;
  nzBusinessNumber?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<UserWhereUniqueInput>;
};

export type EmploymentHistoryCreateNestedManyWithoutApplicantsInput = {
  connect?: InputMaybe<Array<EmploymentHistoryWhereUniqueInput>>;
};

export type EmploymentHistoryCreateNestedManyWithoutUsersInput = {
  connect?: InputMaybe<Array<EmploymentHistoryWhereUniqueInput>>;
};

export type EmploymentHistoryListRelationFilter = {
  every?: InputMaybe<EmploymentHistoryWhereInput>;
  none?: InputMaybe<EmploymentHistoryWhereInput>;
  some?: InputMaybe<EmploymentHistoryWhereInput>;
};

export type EmploymentHistoryOrderByInput = {
  additionalInfo?: InputMaybe<SortOrder>;
  applicantId?: InputMaybe<SortOrder>;
  archived?: InputMaybe<SortOrder>;
  archivedById?: InputMaybe<SortOrder>;
  cityOfWork?: InputMaybe<SortOrder>;
  companyName?: InputMaybe<SortOrder>;
  countryOfWork?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdById?: InputMaybe<SortOrder>;
  duties?: InputMaybe<SortOrder>;
  endDate?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isCurrentJob?: InputMaybe<SortOrder>;
  jobTitle?: InputMaybe<SortOrder>;
  nzBusinessNumber?: InputMaybe<SortOrder>;
  startDate?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedById?: InputMaybe<SortOrder>;
};

export type EmploymentHistoryUpdateInput = {
  additionalInfo?: InputMaybe<Scalars['String']>;
  applicant?: InputMaybe<ApplicantWhereUniqueInput>;
  archived?: InputMaybe<Scalars['Boolean']>;
  archivedBy?: InputMaybe<UserWhereUniqueInput>;
  cityOfWork?: InputMaybe<Scalars['String']>;
  companyName?: InputMaybe<Scalars['String']>;
  countryOfWork?: InputMaybe<Scalars['String']>;
  createdBy?: InputMaybe<UserWhereUniqueInput>;
  duties?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  isCurrentJob?: InputMaybe<Scalars['Boolean']>;
  jobTitle?: InputMaybe<Scalars['String']>;
  nzBusinessNumber?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<UserWhereUniqueInput>;
};

export type EmploymentHistoryUpdateManyWithoutApplicantsInput = {
  connect?: InputMaybe<Array<EmploymentHistoryWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<EmploymentHistoryWhereUniqueInput>>;
  set?: InputMaybe<Array<EmploymentHistoryWhereUniqueInput>>;
};

export type EmploymentHistoryUpdateManyWithoutUsersInput = {
  connect?: InputMaybe<Array<EmploymentHistoryWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<EmploymentHistoryWhereUniqueInput>>;
  set?: InputMaybe<Array<EmploymentHistoryWhereUniqueInput>>;
};

export type EmploymentHistoryWhereInput = {
  additionalInfo?: InputMaybe<StringNullableFilter>;
  applicant?: InputMaybe<ApplicantWhereUniqueInput>;
  archived?: InputMaybe<BooleanNullableFilter>;
  archivedBy?: InputMaybe<UserWhereUniqueInput>;
  cityOfWork?: InputMaybe<StringNullableFilter>;
  companyName?: InputMaybe<StringNullableFilter>;
  countryOfWork?: InputMaybe<StringNullableFilter>;
  createdBy?: InputMaybe<UserWhereUniqueInput>;
  duties?: InputMaybe<StringNullableFilter>;
  endDate?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  isCurrentJob?: InputMaybe<BooleanNullableFilter>;
  jobTitle?: InputMaybe<StringNullableFilter>;
  nzBusinessNumber?: InputMaybe<StringNullableFilter>;
  startDate?: InputMaybe<DateTimeNullableFilter>;
  updatedBy?: InputMaybe<UserWhereUniqueInput>;
};

export type EmploymentHistoryWhereUniqueInput = {
  id: Scalars['String'];
};

export type FamilyMember = {
  __typename?: 'FamilyMember';
  applicants: Array<Applicant>;
  archived?: Maybe<Scalars['Boolean']>;
  archivedBy?: Maybe<User>;
  countriesOfCitizenship?: Maybe<Scalars['String']>;
  countryOfBirth?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  lastName?: Maybe<Scalars['String']>;
  relationshipToApplicant?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<User>;
};


export type FamilyMemberApplicantsArgs = {
  orderBy?: InputMaybe<Array<ApplicantOrderByInput>>;
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
  where?: InputMaybe<ApplicantWhereInput>;
};

export type FamilyMemberCreateInput = {
  applicants?: InputMaybe<ApplicantCreateNestedManyWithoutFamilyMembersInput>;
  archived?: InputMaybe<Scalars['Boolean']>;
  archivedBy?: InputMaybe<UserWhereUniqueInput>;
  countriesOfCitizenship?: InputMaybe<Scalars['String']>;
  countryOfBirth?: InputMaybe<Scalars['String']>;
  createdBy?: InputMaybe<UserWhereUniqueInput>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  relationshipToApplicant?: InputMaybe<Scalars['String']>;
  updatedBy?: InputMaybe<UserWhereUniqueInput>;
};

export type FamilyMemberCreateNestedManyWithoutApplicantsInput = {
  connect?: InputMaybe<Array<FamilyMemberWhereUniqueInput>>;
};

export type FamilyMemberCreateNestedManyWithoutUsersInput = {
  connect?: InputMaybe<Array<FamilyMemberWhereUniqueInput>>;
};

export type FamilyMemberListRelationFilter = {
  every?: InputMaybe<FamilyMemberWhereInput>;
  none?: InputMaybe<FamilyMemberWhereInput>;
  some?: InputMaybe<FamilyMemberWhereInput>;
};

export type FamilyMemberOrderByInput = {
  archived?: InputMaybe<SortOrder>;
  archivedById?: InputMaybe<SortOrder>;
  countriesOfCitizenship?: InputMaybe<SortOrder>;
  countryOfBirth?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdById?: InputMaybe<SortOrder>;
  dateOfBirth?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  relationshipToApplicant?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedById?: InputMaybe<SortOrder>;
};

export type FamilyMemberUpdateInput = {
  applicants?: InputMaybe<ApplicantUpdateManyWithoutFamilyMembersInput>;
  archived?: InputMaybe<Scalars['Boolean']>;
  archivedBy?: InputMaybe<UserWhereUniqueInput>;
  countriesOfCitizenship?: InputMaybe<Scalars['String']>;
  countryOfBirth?: InputMaybe<Scalars['String']>;
  createdBy?: InputMaybe<UserWhereUniqueInput>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  relationshipToApplicant?: InputMaybe<Scalars['String']>;
  updatedBy?: InputMaybe<UserWhereUniqueInput>;
};

export type FamilyMemberUpdateManyWithoutApplicantsInput = {
  connect?: InputMaybe<Array<FamilyMemberWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<FamilyMemberWhereUniqueInput>>;
  set?: InputMaybe<Array<FamilyMemberWhereUniqueInput>>;
};

export type FamilyMemberUpdateManyWithoutUsersInput = {
  connect?: InputMaybe<Array<FamilyMemberWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<FamilyMemberWhereUniqueInput>>;
  set?: InputMaybe<Array<FamilyMemberWhereUniqueInput>>;
};

export type FamilyMemberWhereInput = {
  applicants?: InputMaybe<ApplicantListRelationFilter>;
  archived?: InputMaybe<BooleanNullableFilter>;
  archivedBy?: InputMaybe<UserWhereUniqueInput>;
  countriesOfCitizenship?: InputMaybe<StringNullableFilter>;
  countryOfBirth?: InputMaybe<StringNullableFilter>;
  createdBy?: InputMaybe<UserWhereUniqueInput>;
  dateOfBirth?: InputMaybe<DateTimeNullableFilter>;
  firstName?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  lastName?: InputMaybe<StringNullableFilter>;
  relationshipToApplicant?: InputMaybe<StringNullableFilter>;
  updatedBy?: InputMaybe<UserWhereUniqueInput>;
};

export type FamilyMemberWhereUniqueInput = {
  id: Scalars['String'];
};

export type MetaQueryPayload = {
  __typename?: 'MetaQueryPayload';
  count: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createApplicant: Applicant;
  createEducationHistory: EducationHistory;
  createEmploymentHistory: EmploymentHistory;
  createFamilyMember: FamilyMember;
  createPersonalInfo: PersonalInfo;
  createTravelHistory: TravelHistory;
  createUser: User;
  deleteApplicant: Applicant;
  deleteEducationHistory: EducationHistory;
  deleteEmploymentHistory: EmploymentHistory;
  deleteFamilyMember: FamilyMember;
  deletePersonalInfo: PersonalInfo;
  deleteTravelHistory: TravelHistory;
  deleteUser: User;
  login: UserInfo;
  updateApplicant: Applicant;
  updateEducationHistory: EducationHistory;
  updateEmploymentHistory: EmploymentHistory;
  updateFamilyMember: FamilyMember;
  updatePersonalInfo: PersonalInfo;
  updateTravelHistory: TravelHistory;
  updateUser: User;
};


export type MutationCreateApplicantArgs = {
  data: ApplicantCreateInput;
};


export type MutationCreateEducationHistoryArgs = {
  data: EducationHistoryCreateInput;
};


export type MutationCreateEmploymentHistoryArgs = {
  data: EmploymentHistoryCreateInput;
};


export type MutationCreateFamilyMemberArgs = {
  data: FamilyMemberCreateInput;
};


export type MutationCreatePersonalInfoArgs = {
  data: PersonalInfoCreateInput;
};


export type MutationCreateTravelHistoryArgs = {
  data: TravelHistoryCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteApplicantArgs = {
  where: ApplicantWhereUniqueInput;
};


export type MutationDeleteEducationHistoryArgs = {
  where: EducationHistoryWhereUniqueInput;
};


export type MutationDeleteEmploymentHistoryArgs = {
  where: EmploymentHistoryWhereUniqueInput;
};


export type MutationDeleteFamilyMemberArgs = {
  where: FamilyMemberWhereUniqueInput;
};


export type MutationDeletePersonalInfoArgs = {
  where: PersonalInfoWhereUniqueInput;
};


export type MutationDeleteTravelHistoryArgs = {
  where: TravelHistoryWhereUniqueInput;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationLoginArgs = {
  credentials: Credentials;
};


export type MutationUpdateApplicantArgs = {
  data: ApplicantUpdateInput;
  where: ApplicantWhereUniqueInput;
};


export type MutationUpdateEducationHistoryArgs = {
  data: EducationHistoryUpdateInput;
  where: EducationHistoryWhereUniqueInput;
};


export type MutationUpdateEmploymentHistoryArgs = {
  data: EmploymentHistoryUpdateInput;
  where: EmploymentHistoryWhereUniqueInput;
};


export type MutationUpdateFamilyMemberArgs = {
  data: FamilyMemberUpdateInput;
  where: FamilyMemberWhereUniqueInput;
};


export type MutationUpdatePersonalInfoArgs = {
  data: PersonalInfoUpdateInput;
  where: PersonalInfoWhereUniqueInput;
};


export type MutationUpdateTravelHistoryArgs = {
  data: TravelHistoryUpdateInput;
  where: TravelHistoryWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type PersonalInfo = {
  __typename?: 'PersonalInfo';
  applicant?: Maybe<Applicant>;
  archived?: Maybe<Scalars['Boolean']>;
  archivedBy?: Maybe<User>;
  countriesOfCitizenship?: Maybe<Scalars['String']>;
  countryOfBirth?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  homeCountryAddress?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  inzClientNumber?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  modile?: Maybe<Scalars['String']>;
  nzAddress?: Maybe<Scalars['String']>;
  passportNumber?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<User>;
};

export type PersonalInfoCreateInput = {
  applicant?: InputMaybe<ApplicantWhereUniqueInput>;
  archived?: InputMaybe<Scalars['Boolean']>;
  archivedBy?: InputMaybe<UserWhereUniqueInput>;
  countriesOfCitizenship?: InputMaybe<Scalars['String']>;
  countryOfBirth?: InputMaybe<Scalars['String']>;
  createdBy?: InputMaybe<UserWhereUniqueInput>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  homeCountryAddress?: InputMaybe<Scalars['String']>;
  inzClientNumber?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  modile?: InputMaybe<Scalars['String']>;
  nzAddress?: InputMaybe<Scalars['String']>;
  passportNumber?: InputMaybe<Scalars['String']>;
  updatedBy?: InputMaybe<UserWhereUniqueInput>;
};

export type PersonalInfoCreateNestedManyWithoutUsersInput = {
  connect?: InputMaybe<Array<PersonalInfoWhereUniqueInput>>;
};

export type PersonalInfoListRelationFilter = {
  every?: InputMaybe<PersonalInfoWhereInput>;
  none?: InputMaybe<PersonalInfoWhereInput>;
  some?: InputMaybe<PersonalInfoWhereInput>;
};

export type PersonalInfoOrderByInput = {
  applicantId?: InputMaybe<SortOrder>;
  archived?: InputMaybe<SortOrder>;
  archivedById?: InputMaybe<SortOrder>;
  countriesOfCitizenship?: InputMaybe<SortOrder>;
  countryOfBirth?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdById?: InputMaybe<SortOrder>;
  dateOfBirth?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  homeCountryAddress?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  inzClientNumber?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  modile?: InputMaybe<SortOrder>;
  nzAddress?: InputMaybe<SortOrder>;
  passportNumber?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedById?: InputMaybe<SortOrder>;
};

export type PersonalInfoUpdateInput = {
  applicant?: InputMaybe<ApplicantWhereUniqueInput>;
  archived?: InputMaybe<Scalars['Boolean']>;
  archivedBy?: InputMaybe<UserWhereUniqueInput>;
  countriesOfCitizenship?: InputMaybe<Scalars['String']>;
  countryOfBirth?: InputMaybe<Scalars['String']>;
  createdBy?: InputMaybe<UserWhereUniqueInput>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  homeCountryAddress?: InputMaybe<Scalars['String']>;
  inzClientNumber?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  modile?: InputMaybe<Scalars['String']>;
  nzAddress?: InputMaybe<Scalars['String']>;
  passportNumber?: InputMaybe<Scalars['String']>;
  updatedBy?: InputMaybe<UserWhereUniqueInput>;
};

export type PersonalInfoUpdateManyWithoutUsersInput = {
  connect?: InputMaybe<Array<PersonalInfoWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<PersonalInfoWhereUniqueInput>>;
  set?: InputMaybe<Array<PersonalInfoWhereUniqueInput>>;
};

export type PersonalInfoWhereInput = {
  applicant?: InputMaybe<ApplicantWhereUniqueInput>;
  archived?: InputMaybe<BooleanNullableFilter>;
  archivedBy?: InputMaybe<UserWhereUniqueInput>;
  countriesOfCitizenship?: InputMaybe<StringNullableFilter>;
  countryOfBirth?: InputMaybe<StringNullableFilter>;
  createdBy?: InputMaybe<UserWhereUniqueInput>;
  dateOfBirth?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringNullableFilter>;
  firstName?: InputMaybe<StringNullableFilter>;
  homeCountryAddress?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  inzClientNumber?: InputMaybe<StringNullableFilter>;
  lastName?: InputMaybe<StringNullableFilter>;
  modile?: InputMaybe<StringNullableFilter>;
  nzAddress?: InputMaybe<StringNullableFilter>;
  passportNumber?: InputMaybe<StringNullableFilter>;
  updatedBy?: InputMaybe<UserWhereUniqueInput>;
};

export type PersonalInfoWhereUniqueInput = {
  id: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  _applicantsMeta: MetaQueryPayload;
  _educationHistoriesMeta: MetaQueryPayload;
  _employmentHistoriesMeta: MetaQueryPayload;
  _familyMembersMeta: MetaQueryPayload;
  _personalInfosMeta: MetaQueryPayload;
  _travelHistoriesMeta: MetaQueryPayload;
  _usersMeta: MetaQueryPayload;
  applicant?: Maybe<Applicant>;
  applicants: Array<Applicant>;
  educationHistories: Array<EducationHistory>;
  educationHistory?: Maybe<EducationHistory>;
  employmentHistories: Array<EmploymentHistory>;
  employmentHistory?: Maybe<EmploymentHistory>;
  familyMember?: Maybe<FamilyMember>;
  familyMembers: Array<FamilyMember>;
  personalInfo?: Maybe<PersonalInfo>;
  personalInfos: Array<PersonalInfo>;
  travelHistories: Array<TravelHistory>;
  travelHistory?: Maybe<TravelHistory>;
  user?: Maybe<User>;
  userInfo: UserInfo;
  users: Array<User>;
};


export type Query_ApplicantsMetaArgs = {
  orderBy?: InputMaybe<Array<ApplicantOrderByInput>>;
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
  where?: InputMaybe<ApplicantWhereInput>;
};


export type Query_EducationHistoriesMetaArgs = {
  orderBy?: InputMaybe<Array<EducationHistoryOrderByInput>>;
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
  where?: InputMaybe<EducationHistoryWhereInput>;
};


export type Query_EmploymentHistoriesMetaArgs = {
  orderBy?: InputMaybe<Array<EmploymentHistoryOrderByInput>>;
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
  where?: InputMaybe<EmploymentHistoryWhereInput>;
};


export type Query_FamilyMembersMetaArgs = {
  orderBy?: InputMaybe<Array<FamilyMemberOrderByInput>>;
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
  where?: InputMaybe<FamilyMemberWhereInput>;
};


export type Query_PersonalInfosMetaArgs = {
  orderBy?: InputMaybe<Array<PersonalInfoOrderByInput>>;
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
  where?: InputMaybe<PersonalInfoWhereInput>;
};


export type Query_TravelHistoriesMetaArgs = {
  orderBy?: InputMaybe<Array<TravelHistoryOrderByInput>>;
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
  where?: InputMaybe<TravelHistoryWhereInput>;
};


export type Query_UsersMetaArgs = {
  orderBy?: InputMaybe<Array<UserOrderByInput>>;
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryApplicantArgs = {
  where: ApplicantWhereUniqueInput;
};


export type QueryApplicantsArgs = {
  orderBy?: InputMaybe<Array<ApplicantOrderByInput>>;
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
  where?: InputMaybe<ApplicantWhereInput>;
};


export type QueryEducationHistoriesArgs = {
  orderBy?: InputMaybe<Array<EducationHistoryOrderByInput>>;
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
  where?: InputMaybe<EducationHistoryWhereInput>;
};


export type QueryEducationHistoryArgs = {
  where: EducationHistoryWhereUniqueInput;
};


export type QueryEmploymentHistoriesArgs = {
  orderBy?: InputMaybe<Array<EmploymentHistoryOrderByInput>>;
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
  where?: InputMaybe<EmploymentHistoryWhereInput>;
};


export type QueryEmploymentHistoryArgs = {
  where: EmploymentHistoryWhereUniqueInput;
};


export type QueryFamilyMemberArgs = {
  where: FamilyMemberWhereUniqueInput;
};


export type QueryFamilyMembersArgs = {
  orderBy?: InputMaybe<Array<FamilyMemberOrderByInput>>;
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
  where?: InputMaybe<FamilyMemberWhereInput>;
};


export type QueryPersonalInfoArgs = {
  where: PersonalInfoWhereUniqueInput;
};


export type QueryPersonalInfosArgs = {
  orderBy?: InputMaybe<Array<PersonalInfoOrderByInput>>;
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
  where?: InputMaybe<PersonalInfoWhereInput>;
};


export type QueryTravelHistoriesArgs = {
  orderBy?: InputMaybe<Array<TravelHistoryOrderByInput>>;
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
  where?: InputMaybe<TravelHistoryWhereInput>;
};


export type QueryTravelHistoryArgs = {
  where: TravelHistoryWhereUniqueInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  orderBy?: InputMaybe<Array<UserOrderByInput>>;
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'Default',
  Insensitive = 'Insensitive'
}

export enum SortOrder {
  Asc = 'Asc',
  Desc = 'Desc'
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type TravelHistory = {
  __typename?: 'TravelHistory';
  applicant?: Maybe<Applicant>;
  archived?: Maybe<Scalars['Boolean']>;
  archivedBy?: Maybe<User>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  dateDeparted?: Maybe<Scalars['DateTime']>;
  dateEntered?: Maybe<Scalars['DateTime']>;
  destinationAirport?: Maybe<Scalars['String']>;
  destinationCity?: Maybe<Scalars['String']>;
  destinationCountry?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  reasonOfTravel?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<User>;
};

export type TravelHistoryCreateInput = {
  applicant?: InputMaybe<ApplicantWhereUniqueInput>;
  archived?: InputMaybe<Scalars['Boolean']>;
  archivedBy?: InputMaybe<UserWhereUniqueInput>;
  createdBy?: InputMaybe<UserWhereUniqueInput>;
  dateDeparted?: InputMaybe<Scalars['DateTime']>;
  dateEntered?: InputMaybe<Scalars['DateTime']>;
  destinationAirport?: InputMaybe<Scalars['String']>;
  destinationCity?: InputMaybe<Scalars['String']>;
  destinationCountry?: InputMaybe<Scalars['String']>;
  reasonOfTravel?: InputMaybe<Scalars['String']>;
  updatedBy?: InputMaybe<UserWhereUniqueInput>;
};

export type TravelHistoryCreateNestedManyWithoutApplicantsInput = {
  connect?: InputMaybe<Array<TravelHistoryWhereUniqueInput>>;
};

export type TravelHistoryCreateNestedManyWithoutUsersInput = {
  connect?: InputMaybe<Array<TravelHistoryWhereUniqueInput>>;
};

export type TravelHistoryListRelationFilter = {
  every?: InputMaybe<TravelHistoryWhereInput>;
  none?: InputMaybe<TravelHistoryWhereInput>;
  some?: InputMaybe<TravelHistoryWhereInput>;
};

export type TravelHistoryOrderByInput = {
  applicantId?: InputMaybe<SortOrder>;
  archived?: InputMaybe<SortOrder>;
  archivedById?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdById?: InputMaybe<SortOrder>;
  dateDeparted?: InputMaybe<SortOrder>;
  dateEntered?: InputMaybe<SortOrder>;
  destinationAirport?: InputMaybe<SortOrder>;
  destinationCity?: InputMaybe<SortOrder>;
  destinationCountry?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  reasonOfTravel?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedById?: InputMaybe<SortOrder>;
};

export type TravelHistoryUpdateInput = {
  applicant?: InputMaybe<ApplicantWhereUniqueInput>;
  archived?: InputMaybe<Scalars['Boolean']>;
  archivedBy?: InputMaybe<UserWhereUniqueInput>;
  createdBy?: InputMaybe<UserWhereUniqueInput>;
  dateDeparted?: InputMaybe<Scalars['DateTime']>;
  dateEntered?: InputMaybe<Scalars['DateTime']>;
  destinationAirport?: InputMaybe<Scalars['String']>;
  destinationCity?: InputMaybe<Scalars['String']>;
  destinationCountry?: InputMaybe<Scalars['String']>;
  reasonOfTravel?: InputMaybe<Scalars['String']>;
  updatedBy?: InputMaybe<UserWhereUniqueInput>;
};

export type TravelHistoryUpdateManyWithoutApplicantsInput = {
  connect?: InputMaybe<Array<TravelHistoryWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<TravelHistoryWhereUniqueInput>>;
  set?: InputMaybe<Array<TravelHistoryWhereUniqueInput>>;
};

export type TravelHistoryUpdateManyWithoutUsersInput = {
  connect?: InputMaybe<Array<TravelHistoryWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<TravelHistoryWhereUniqueInput>>;
  set?: InputMaybe<Array<TravelHistoryWhereUniqueInput>>;
};

export type TravelHistoryWhereInput = {
  applicant?: InputMaybe<ApplicantWhereUniqueInput>;
  archived?: InputMaybe<BooleanNullableFilter>;
  archivedBy?: InputMaybe<UserWhereUniqueInput>;
  createdBy?: InputMaybe<UserWhereUniqueInput>;
  dateDeparted?: InputMaybe<DateTimeNullableFilter>;
  dateEntered?: InputMaybe<DateTimeNullableFilter>;
  destinationAirport?: InputMaybe<StringNullableFilter>;
  destinationCity?: InputMaybe<StringNullableFilter>;
  destinationCountry?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  reasonOfTravel?: InputMaybe<StringNullableFilter>;
  updatedBy?: InputMaybe<UserWhereUniqueInput>;
};

export type TravelHistoryWhereUniqueInput = {
  id: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  applicants: Array<Applicant>;
  applicantsArchived: Array<Applicant>;
  applicantsCreated: Array<Applicant>;
  applicantsUpdated: Array<Applicant>;
  createdAt?: Maybe<Scalars['DateTime']>;
  educationHistoriesArchived: Array<EducationHistory>;
  educationHistoriesCreated: Array<EducationHistory>;
  educationHistoriesUpdated: Array<EducationHistory>;
  email?: Maybe<Scalars['String']>;
  employmentHistoriesArchived: Array<EmploymentHistory>;
  employmentHistoriesCreated: Array<EmploymentHistory>;
  employmentHistoriesUpdated: Array<EmploymentHistory>;
  familyMembersArchived: Array<FamilyMember>;
  familyMembersCreated: Array<FamilyMember>;
  familyMembersUpdated: Array<FamilyMember>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  lastName?: Maybe<Scalars['String']>;
  personalInfosArchived: Array<PersonalInfo>;
  personalInfosCreated: Array<PersonalInfo>;
  personalInfosUpdated: Array<PersonalInfo>;
  roles: Array<Scalars['String']>;
  travelHistoriesArchived: Array<TravelHistory>;
  travelHistoriesCreated: Array<TravelHistory>;
  travelHistoriesUpdated: Array<TravelHistory>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};


export type UserApplicantsArgs = {
  orderBy?: InputMaybe<Array<ApplicantOrderByInput>>;
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
  where?: InputMaybe<ApplicantWhereInput>;
};


export type UserApplicantsArchivedArgs = {
  orderBy?: InputMaybe<Array<ApplicantOrderByInput>>;
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
  where?: InputMaybe<ApplicantWhereInput>;
};


export type UserApplicantsCreatedArgs = {
  orderBy?: InputMaybe<Array<ApplicantOrderByInput>>;
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
  where?: InputMaybe<ApplicantWhereInput>;
};


export type UserApplicantsUpdatedArgs = {
  orderBy?: InputMaybe<Array<ApplicantOrderByInput>>;
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
  where?: InputMaybe<ApplicantWhereInput>;
};


export type UserEducationHistoriesArchivedArgs = {
  orderBy?: InputMaybe<Array<EducationHistoryOrderByInput>>;
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
  where?: InputMaybe<EducationHistoryWhereInput>;
};


export type UserEducationHistoriesCreatedArgs = {
  orderBy?: InputMaybe<Array<EducationHistoryOrderByInput>>;
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
  where?: InputMaybe<EducationHistoryWhereInput>;
};


export type UserEducationHistoriesUpdatedArgs = {
  orderBy?: InputMaybe<Array<EducationHistoryOrderByInput>>;
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
  where?: InputMaybe<EducationHistoryWhereInput>;
};


export type UserEmploymentHistoriesArchivedArgs = {
  orderBy?: InputMaybe<Array<EmploymentHistoryOrderByInput>>;
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
  where?: InputMaybe<EmploymentHistoryWhereInput>;
};


export type UserEmploymentHistoriesCreatedArgs = {
  orderBy?: InputMaybe<Array<EmploymentHistoryOrderByInput>>;
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
  where?: InputMaybe<EmploymentHistoryWhereInput>;
};


export type UserEmploymentHistoriesUpdatedArgs = {
  orderBy?: InputMaybe<Array<EmploymentHistoryOrderByInput>>;
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
  where?: InputMaybe<EmploymentHistoryWhereInput>;
};


export type UserFamilyMembersArchivedArgs = {
  orderBy?: InputMaybe<Array<FamilyMemberOrderByInput>>;
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
  where?: InputMaybe<FamilyMemberWhereInput>;
};


export type UserFamilyMembersCreatedArgs = {
  orderBy?: InputMaybe<Array<FamilyMemberOrderByInput>>;
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
  where?: InputMaybe<FamilyMemberWhereInput>;
};


export type UserFamilyMembersUpdatedArgs = {
  orderBy?: InputMaybe<Array<FamilyMemberOrderByInput>>;
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
  where?: InputMaybe<FamilyMemberWhereInput>;
};


export type UserPersonalInfosArchivedArgs = {
  orderBy?: InputMaybe<Array<PersonalInfoOrderByInput>>;
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
  where?: InputMaybe<PersonalInfoWhereInput>;
};


export type UserPersonalInfosCreatedArgs = {
  orderBy?: InputMaybe<Array<PersonalInfoOrderByInput>>;
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
  where?: InputMaybe<PersonalInfoWhereInput>;
};


export type UserPersonalInfosUpdatedArgs = {
  orderBy?: InputMaybe<Array<PersonalInfoOrderByInput>>;
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
  where?: InputMaybe<PersonalInfoWhereInput>;
};


export type UserTravelHistoriesArchivedArgs = {
  orderBy?: InputMaybe<Array<TravelHistoryOrderByInput>>;
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
  where?: InputMaybe<TravelHistoryWhereInput>;
};


export type UserTravelHistoriesCreatedArgs = {
  orderBy?: InputMaybe<Array<TravelHistoryOrderByInput>>;
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
  where?: InputMaybe<TravelHistoryWhereInput>;
};


export type UserTravelHistoriesUpdatedArgs = {
  orderBy?: InputMaybe<Array<TravelHistoryOrderByInput>>;
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
  where?: InputMaybe<TravelHistoryWhereInput>;
};

export type UserCreateInput = {
  applicants?: InputMaybe<ApplicantCreateNestedManyWithoutUsersInput>;
  applicantsArchived?: InputMaybe<ApplicantCreateNestedManyWithoutUsersInput>;
  applicantsCreated?: InputMaybe<ApplicantCreateNestedManyWithoutUsersInput>;
  applicantsUpdated?: InputMaybe<ApplicantCreateNestedManyWithoutUsersInput>;
  educationHistoriesArchived?: InputMaybe<EducationHistoryCreateNestedManyWithoutUsersInput>;
  educationHistoriesCreated?: InputMaybe<EducationHistoryCreateNestedManyWithoutUsersInput>;
  educationHistoriesUpdated?: InputMaybe<EducationHistoryCreateNestedManyWithoutUsersInput>;
  email?: InputMaybe<Scalars['String']>;
  employmentHistoriesArchived?: InputMaybe<EmploymentHistoryCreateNestedManyWithoutUsersInput>;
  employmentHistoriesCreated?: InputMaybe<EmploymentHistoryCreateNestedManyWithoutUsersInput>;
  employmentHistoriesUpdated?: InputMaybe<EmploymentHistoryCreateNestedManyWithoutUsersInput>;
  familyMembersArchived?: InputMaybe<FamilyMemberCreateNestedManyWithoutUsersInput>;
  familyMembersCreated?: InputMaybe<FamilyMemberCreateNestedManyWithoutUsersInput>;
  familyMembersUpdated?: InputMaybe<FamilyMemberCreateNestedManyWithoutUsersInput>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  personalInfosArchived?: InputMaybe<PersonalInfoCreateNestedManyWithoutUsersInput>;
  personalInfosCreated?: InputMaybe<PersonalInfoCreateNestedManyWithoutUsersInput>;
  personalInfosUpdated?: InputMaybe<PersonalInfoCreateNestedManyWithoutUsersInput>;
  roles: Array<Scalars['String']>;
  travelHistoriesArchived?: InputMaybe<TravelHistoryCreateNestedManyWithoutUsersInput>;
  travelHistoriesCreated?: InputMaybe<TravelHistoryCreateNestedManyWithoutUsersInput>;
  travelHistoriesUpdated?: InputMaybe<TravelHistoryCreateNestedManyWithoutUsersInput>;
  username: Scalars['String'];
};

export type UserCreateNestedManyWithoutApplicantsInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserInfo = {
  __typename?: 'UserInfo';
  accessToken?: Maybe<Scalars['String']>;
  roles: Array<Scalars['String']>;
  username: Scalars['String'];
};

export type UserListRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserOrderByInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  roles?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserUpdateInput = {
  applicants?: InputMaybe<ApplicantUpdateManyWithoutUsersInput>;
  applicantsArchived?: InputMaybe<ApplicantUpdateManyWithoutUsersInput>;
  applicantsCreated?: InputMaybe<ApplicantUpdateManyWithoutUsersInput>;
  applicantsUpdated?: InputMaybe<ApplicantUpdateManyWithoutUsersInput>;
  educationHistoriesArchived?: InputMaybe<EducationHistoryUpdateManyWithoutUsersInput>;
  educationHistoriesCreated?: InputMaybe<EducationHistoryUpdateManyWithoutUsersInput>;
  educationHistoriesUpdated?: InputMaybe<EducationHistoryUpdateManyWithoutUsersInput>;
  email?: InputMaybe<Scalars['String']>;
  employmentHistoriesArchived?: InputMaybe<EmploymentHistoryUpdateManyWithoutUsersInput>;
  employmentHistoriesCreated?: InputMaybe<EmploymentHistoryUpdateManyWithoutUsersInput>;
  employmentHistoriesUpdated?: InputMaybe<EmploymentHistoryUpdateManyWithoutUsersInput>;
  familyMembersArchived?: InputMaybe<FamilyMemberUpdateManyWithoutUsersInput>;
  familyMembersCreated?: InputMaybe<FamilyMemberUpdateManyWithoutUsersInput>;
  familyMembersUpdated?: InputMaybe<FamilyMemberUpdateManyWithoutUsersInput>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  personalInfosArchived?: InputMaybe<PersonalInfoUpdateManyWithoutUsersInput>;
  personalInfosCreated?: InputMaybe<PersonalInfoUpdateManyWithoutUsersInput>;
  personalInfosUpdated?: InputMaybe<PersonalInfoUpdateManyWithoutUsersInput>;
  roles?: InputMaybe<Array<Scalars['String']>>;
  travelHistoriesArchived?: InputMaybe<TravelHistoryUpdateManyWithoutUsersInput>;
  travelHistoriesCreated?: InputMaybe<TravelHistoryUpdateManyWithoutUsersInput>;
  travelHistoriesUpdated?: InputMaybe<TravelHistoryUpdateManyWithoutUsersInput>;
  username?: InputMaybe<Scalars['String']>;
};

export type UserUpdateManyWithoutApplicantsInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserWhereInput = {
  applicants?: InputMaybe<ApplicantListRelationFilter>;
  applicantsArchived?: InputMaybe<ApplicantListRelationFilter>;
  applicantsCreated?: InputMaybe<ApplicantListRelationFilter>;
  applicantsUpdated?: InputMaybe<ApplicantListRelationFilter>;
  educationHistoriesArchived?: InputMaybe<EducationHistoryListRelationFilter>;
  educationHistoriesCreated?: InputMaybe<EducationHistoryListRelationFilter>;
  educationHistoriesUpdated?: InputMaybe<EducationHistoryListRelationFilter>;
  email?: InputMaybe<StringNullableFilter>;
  employmentHistoriesArchived?: InputMaybe<EmploymentHistoryListRelationFilter>;
  employmentHistoriesCreated?: InputMaybe<EmploymentHistoryListRelationFilter>;
  employmentHistoriesUpdated?: InputMaybe<EmploymentHistoryListRelationFilter>;
  familyMembersArchived?: InputMaybe<FamilyMemberListRelationFilter>;
  familyMembersCreated?: InputMaybe<FamilyMemberListRelationFilter>;
  familyMembersUpdated?: InputMaybe<FamilyMemberListRelationFilter>;
  firstName?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  lastName?: InputMaybe<StringNullableFilter>;
  personalInfosArchived?: InputMaybe<PersonalInfoListRelationFilter>;
  personalInfosCreated?: InputMaybe<PersonalInfoListRelationFilter>;
  personalInfosUpdated?: InputMaybe<PersonalInfoListRelationFilter>;
  travelHistoriesArchived?: InputMaybe<TravelHistoryListRelationFilter>;
  travelHistoriesCreated?: InputMaybe<TravelHistoryListRelationFilter>;
  travelHistoriesUpdated?: InputMaybe<TravelHistoryListRelationFilter>;
  username?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  id: Scalars['String'];
};

export type LoginMutationVariables = Exact<{ [key: string]: never; }>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserInfo', accessToken?: string | null } };


export const LoginDocument = gql`
    mutation LOGIN {
  login(credentials: {username: "mingyang", password: "mingyang"}) {
    accessToken
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;