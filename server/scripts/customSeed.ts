import { PrismaClient, Prisma } from "@prisma/client";
import { hash } from "bcrypt";
import { parseSalt } from "../src/auth/password.service";
import { CreateUserArgs } from '../src/user/base/CreateUserArgs';

const client = new PrismaClient();

export async function customSeed() {

  //replace this sample code to populate your database
  //with data that is required for your application to start
  await seedPersonalInfos();

  client.$disconnect();
}

const USER_CT = 5;
const ENTITY_CT = 5;
const generateId = (length: number) => {
  let result           = '';
  let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
 }
 return result;
}

const generateRandomNumBetween = (min = 0, max = 100) => {
  let difference = max - min;
  let rand = Math.random();
  rand = Math.floor( rand * difference);
  rand = rand + min;
  return rand;
}

const countries = ['China', 'India', 'Pakistan', 'South Korea', 'Brazil', 'Mexico', 'United Kingdom', 'Canada', 'Japan', 'South Africa', 'Dubai'];
const randomAddress = () => {
  return `${generateRandomNumBetween(1, 300)} Random Street, ${countries[generateRandomNumBetween(0, countries.length)]}`;
}

const randomDate = (start: Date, end: Date) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const randomMobile = (length: number) => {
  const prefixs = ['021', '022', '027'];
  let result           = '';
  let characters       = '0123456789';
  let charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
 }
 return prefixs[generateRandomNumBetween(0, prefixs.length)] + result;
}

// DB seeding plan for dev work on a new machine
// Create 5 users, roles: ['user'] => DONE
// Create 10 Applicants for each user => DOING
// For each Applicant, 
//   - Create 1 PersonalInfo => Applicant ID as relation, CreatedBy => User that created the applicant
//   - Create 5 EducationHistory
//   - Create 5 EmploymentHistory
//   - Create 5 TravelHistory
//   - Create 5 FamilyMember

export const seedUsers = async () => {
  const { BCRYPT_SALT } = process.env;
  const salt = parseSalt(BCRYPT_SALT);
  for (let i = 0; i < USER_CT; i++) {
    const user: CreateUserArgs = {
      data: {
        username: `user-${i+1}@gmail.com`,
        password: await hash(`user-${i+1}`, salt),
        roles: ['user'],

        // optional_fields
        email: `user-${i+1}@gmail.com`,
        firstName: 'User',
        lastName: (i + 1).toString(),
      }
    }
    try {
      await client.user.create(user);
    } catch (error) {
      throw(error);
    }
  }
  console.log(`❎ ${USER_CT} Users seeded to DB`);
}

export const seedApplicants = async () => {
  const users = await client.user.findMany({});
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    for (let k = 0; k < ENTITY_CT; k++) {
      const applicant: Prisma.ApplicantCreateArgs = {
        data: {
          archived: false,
          createdBy: {
            connect: {
              id: user.id,
            }
          }
        }
      }
      try {
        await client.applicant.create(applicant);
      } catch (error) {
        throw error;
      }
      console.log(`❎ ${ENTITY_CT} Applicants for ${user.username} seeded to DB`);
    }
  }
}

export const seedPersonalInfos = async () => {
  console.log(`🚀 Started seeding PersonalInfos`);
  const applicants = await client.applicant.findMany({});
  console.log(`Num of applicants: ${applicants.length}`);

  for (let k = 0; k < applicants.length; k++) {
    const applicant = applicants[k];
    const personalInfo: Prisma.PersonalInfoCreateArgs = {
      data: {
        // system
        archived: false,
        applicant: {
          connect: {
            id: applicant.id,
          }
        },

        // personalInfo_specific
        countriesOfCitizenship: countries[generateRandomNumBetween(0, countries.length)],
        countryOfBirth: countries[generateRandomNumBetween(0, countries.length)],
        dateOfBirth: randomDate(new Date('1950-01-01'), new Date('2000-01-01')),
        email: `applicant-${applicant.id}@gmail.com`,
        firstName: 'Applicant',
        homeCountryAddress: randomAddress(),
        inzClientNumber: generateId(12),
        lastName: applicant.id,
        mobile: randomMobile(8),
        nzAddress: randomAddress(),
        passportNumber: generateId(9),
      }
    }
    try {
      // console.log(personalInfo);
      await client.personalInfo.create(personalInfo);
    } catch (error) {
      throw error;
    }
    console.log(`❎ ${ENTITY_CT} PersonalInfo for ${applicant.userId} seeded to DB`);
  }
}