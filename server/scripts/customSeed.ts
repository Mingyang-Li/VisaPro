import { PrismaClient, Prisma } from "@prisma/client";
import { hash } from "bcrypt";
import { parseSalt } from "../src/auth/password.service";
import { CreateUserArgs } from '../src/user/base/CreateUserArgs';

const client = new PrismaClient();

export async function customSeed() {

  //replace this sample code to populate your database
  //with data that is required for your application to start
  await seedApplicants();

  client.$disconnect();
}

const USER_CT = 5;
const ENTITY_CT = 5;

// DB seeding plan for dev work on a new machine
// Create 5 users, roles: ['user'] => DONE
// Create 10 Applicants for each user => DOING
// For each Applicant, 
//   - Create 1 PersonalInfo => Applicant ID as relation
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