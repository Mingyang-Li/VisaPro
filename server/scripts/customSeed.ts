import { PrismaClient, Prisma } from "@prisma/client";
import { hash } from "bcrypt";
import { parseSalt } from "../src/auth/password.service";
import { CreateUserArgs } from "../src/user/base/CreateUserArgs";

const client = new PrismaClient();

export async function customSeed() {
  //replace this sample code to populate your database
  //with data that is required for your application to start
  await seedUsers().then(async () => {
    await seedApplicants().then(async () => {
      await seedPersonalInfos().then(async () => {
        await seedEducationHistories();
        await seedEmploymentHistories();
        await seedTravelHistories();
        await seedFamilyMembers();
      });
    });
  });
  client.$disconnect();
}

const USER_CT = 5;
const ENTITY_CT = 5;
const generateId = (length: number) => {
  let result = "";
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const generateRandomNumBetween = (min = 0, max = 100) => {
  let difference = max - min;
  let rand = Math.random();
  rand = Math.floor(rand * difference);
  rand = rand + min;
  return rand;
};

const countries = [
  "China",
  "India",
  "Pakistan",
  "South Korea",
  "Brazil",
  "Mexico",
  "United Kingdom",
  "Canada",
  "Japan",
  "South Africa",
  "Dubai",
];
const randomAddress = () => {
  return `${generateRandomNumBetween(1, 300)} Random Street, ${
    countries[generateRandomNumBetween(0, countries.length)]
  }`;
};

const randomDate = (start: Date, end: Date) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};

const randomMobile = (length: number) => {
  const prefixs = ["021", "022", "027"];
  let result = "";
  let characters = "0123456789";
  let charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return prefixs[generateRandomNumBetween(0, prefixs.length)] + result;
};

const IEmployment = [
  "Full-time",
  "Part-time",
  "Contract",
  "Freelance",
  "Self-employed",
];
const IJob = [
  "Software Engineer",
  "Product Manager",
  "Site Manager",
  "Solution Architect",
  "Account Manager",
  "Investor",
  "Cashier",
  "Chef",
  "Store Manager",
  "Consultant",
  "Executive Assistant",
  "Director",
];
const IDestinationHub = ["Airport", "Port", "Train-Station"];
const ITravelReason = [
  "Work",
  "Business",
  "Travel",
  "Visiting friends and family",
];
const IRelationship = [
  "Mother",
  "Father",
  "Step-mum",
  "Step-dad",
  "Brother",
  "Sister",
  "Son",
  "Daughter",
  "Step-son",
  "Step-daughter",
  "Girlfriend",
  "Boyfriend",
  "Husband",
  "Wife",
];

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
        username: `user-${i + 1}@gmail.com`,
        password: await hash(`user-${i + 1}`, salt),
        roles: ["user"],

        // optional_fields
        email: `user-${i + 1}@gmail.com`,
        firstName: "User",
        lastName: (i + 1).toString(),
      },
    };
    try {
      await client.user.create(user);
    } catch (error) {
      throw error;
    }
  }
  console.log(`✅ ${USER_CT} Users seeded to DB`);
};

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
            },
          },
          updatedBy: {
            connect: {
              id: user.id,
            },
          },
          user: {
            connect: {
              id: user.id,
            },
          },
        },
      };
      try {
        await client.applicant.create(applicant);
      } catch (error) {
        throw error;
      }
      console.log(
        `✅ ${ENTITY_CT} Applicants for ${user.username} seeded to DB`
      );
    }
  }
};

export const seedPersonalInfos = async () => {
  console.log(`🚀 Started seeding PersonalInfos`);
  const applicants = await client.applicant.findMany({});

  for (let k = 0; k < applicants.length; k++) {
    const applicant = applicants[k];
    const personalInfo: Prisma.PersonalInfoCreateArgs = {
      data: {
        // system
        archived: false,
        applicant: {
          connect: {
            id: applicant.id,
          },
        },
        createdBy: {
          connect: {
            id: applicant.createdById ?? "none",
          },
        },
        updatedBy: {
          connect: {
            id: applicant.createdById ?? "none",
          },
        },

        // personalInfo_specific
        countriesOfCitizenship:
          countries[generateRandomNumBetween(0, countries.length)],
        countryOfBirth:
          countries[generateRandomNumBetween(0, countries.length)],
        dateOfBirth: randomDate(new Date("1950-01-01"), new Date("2000-01-01")),
        email: `applicant-${applicant.id}@gmail.com`,
        firstName: `Firstname-${k+1}`,
        homeCountryAddress: randomAddress(),
        inzClientNumber: generateId(12),
        lastName: `Lastname-${k+1}`,
        mobile: randomMobile(8),
        nzAddress: randomAddress(),
        passportNumber: generateId(9),
      },
    };
    try {
      await client.personalInfo.create(personalInfo);
    } catch (error) {
      throw error;
    }
    console.log(
      `✅ ${ENTITY_CT} PersonalInfo for ${applicant.createdById} seeded to DB`
    );
  }
};

export const seedEducationHistories = async () => {
  console.log(`🚀 Started seeding EducationHistories`);
  const applicants = await client.applicant.findMany({});

  for (let i = 0; i < applicants.length; i++) {
    const applicant = applicants[i];

    for (let k = 0; k < ENTITY_CT; k++) {
      const educationHistory: Prisma.EducationHistoryCreateArgs = {
        data: {
          // system
          archived: false,
          applicant: {
            connect: {
              id: applicant.id,
            },
          },
          createdBy: {
            connect: {
              id: applicant.createdById ?? "none",
            },
          },
          updatedBy: {
            connect: {
              id: applicant.createdById ?? "none",
            },
          },

          // specific
          additionalInfo: "None",
          city: `City-${k+1}`,
          country: countries[generateRandomNumBetween(0, countries.length)],
          endDate: randomDate(new Date("1960-01-01"), new Date("2021-12-31")),
          institutionName: `Random School of ${
            countries[generateRandomNumBetween(0, countries.length)]
          }`,
          isCurrentInstitution: false,
          qualificationGained: `Bloody good one`,
          startDate: randomDate(new Date("1960-01-01"), new Date("2021-12-31")),
        },
      };

      try {
        await client.educationHistory.create(educationHistory);
      } catch (error) {
        throw error;
      }
    }
    console.log(
      `✅ ${ENTITY_CT} EducationHistories for ${applicant.createdById} seeded to DB`
    );
  }
};

export const seedEmploymentHistories = async () => {
  console.log(`🚀 Started seeding EmploymentHistories`);
  const applicants = await client.applicant.findMany({});

  for (let i = 0; i < applicants.length; i++) {
    const applicant = applicants[i];

    for (let k = 0; k < ENTITY_CT; k++) {
      const employmentHistory: Prisma.EmploymentHistoryCreateArgs = {
        data: {
          // system
          archived: false,
          applicant: {
            connect: {
              id: applicant.id,
            },
          },
          createdBy: {
            connect: {
              id: applicant.createdById ?? "none",
            },
          },
          updatedBy: {
            connect: {
              id: applicant.createdById ?? "none",
            },
          },

          // specific
          additionalInfo: "None",
          cityOfWork: `City-${generateRandomNumBetween(0, 500)}`,
          companyName: `Company-${generateRandomNumBetween(0, 500)}`,
          countryOfWork:
            countries[generateRandomNumBetween(0, countries.length)],
          duties: `${generateRandomNumBetween(0, 500)} number of things`,
          employmentType:
            IEmployment[generateRandomNumBetween(0, IEmployment.length)],
          endDate: randomDate(new Date("1960-01-01"), new Date("2021-12-31")),
          isCurrentJob: false,
          jobTitle: IJob[generateRandomNumBetween(0, IJob.length)],
          nzBusinessNumber: generateId(11),
          startDate: randomDate(new Date("1960-01-01"), new Date("2021-12-31")),
        },
      };

      try {
        await client.employmentHistory.create(employmentHistory);
      } catch (error) {
        throw error;
      }
    }
    console.log(
      `✅ ${ENTITY_CT} EmploymentHistories for ${applicant.createdById} seeded to DB`
    );
  }
};

export const seedTravelHistories = async () => {
  console.log(`🚀 Started seeding TravelHistory`);
  const applicants = await client.applicant.findMany({});

  for (let i = 0; i < applicants.length; i++) {
    const applicant = applicants[i];

    for (let k = 0; k < ENTITY_CT; k++) {
      const travelHistory: Prisma.TravelHistoryCreateArgs = {
        data: {
          // system
          archived: false,
          applicant: {
            connect: {
              id: applicant.id,
            },
          },
          createdBy: {
            connect: {
              id: applicant.createdById ?? "none",
            },
          },
          updatedBy: {
            connect: {
              id: applicant.createdById ?? "none",
            },
          },

          // specific
          dateDeparted: randomDate(
            new Date("1960-01-01"),
            new Date("2021-12-31")
          ),
          dateEntered: randomDate(
            new Date("1960-01-01"),
            new Date("2021-12-31")
          ),
          destinationCity: `City-${generateRandomNumBetween(0, 500)}`,
          destinationCountry:
            countries[generateRandomNumBetween(0, countries.length)],
          destinationHub: `${
            IDestinationHub[generateRandomNumBetween(0, IDestinationHub.length)]
          }-${generateRandomNumBetween(0, 100)}`,
          reasonOfTravel:
            ITravelReason[generateRandomNumBetween(0, ITravelReason.length)],
        },
      };

      try {
        await client.travelHistory.create(travelHistory);
      } catch (error) {
        throw error;
      }
    }
    console.log(
      `✅ ${ENTITY_CT} TravelHistories for ${applicant.createdById} seeded to DB`
    );
  }
};

export const seedFamilyMembers = async () => {
  console.log(`🚀 Started seeding FamilyMember`);
  const applicants = await client.applicant.findMany({});

  for (let i = 0; i < applicants.length; i++) {
    const applicant = applicants[i];

    for (let k = 0; k < ENTITY_CT; k++) {
      const familyMember: Prisma.FamilyMemberCreateArgs = {
        data: {
          // system
          archived: false,
          applicants: {
            connect: {
              id: applicant.id,
            },
          },
          createdBy: {
            connect: {
              id: applicant.createdById ?? "none",
            },
          },
          updatedBy: {
            connect: {
              id: applicant.createdById ?? "none",
            },
          },

          // specific
          countriesOfCitizenship:
            countries[generateRandomNumBetween(0, countries.length)],
          countryOfBirth:
            countries[generateRandomNumBetween(0, countries.length)],
          dateOfBirth: randomDate(
            new Date("1960-01-01"),
            new Date("2021-12-31")
          ),
          firstName: `Firstname-${generateRandomNumBetween(0, 5)}`,
          lastName: `Lastname-${generateRandomNumBetween(0, 5)}`,
          relationshipToApplicant:
            IRelationship[generateRandomNumBetween(0, IRelationship.length)],
        },
      };

      try {
        await client.familyMember.create(familyMember);
      } catch (error) {
        throw error;
      }
    }
    console.log(
      `✅ ${ENTITY_CT} FamilyMembers for ${applicant.createdById} seeded to DB`
    );
  }
};
