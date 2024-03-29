import { PrismaClient, Prisma } from "@prisma/client";
import { hash } from "bcrypt";
import { parseSalt } from "../src/auth/password.service";
import { CreateUserArgs } from "../src/user/base/CreateUserArgs";

const client = new PrismaClient();

export async function customSeed() {
  //replace this sample code to populate your database
  //with data that is required for your application to start
  await seedAllTables();
  client.$disconnect();
}

export const seedAllTables = async () => {
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
}

export const clearAllTables = async () => {
  await client.user.deleteMany({}).then(() => console.log('✅ Cleared User table'));
  await client.applicant.deleteMany({}).then(() => console.log('✅ Cleared Applicanter table'));
  await client.personalInfo.deleteMany({}).then(() => console.log('✅ Cleared PersonalInfo table'));
  await client.educationHistory.deleteMany({}).then(() => console.log('✅ Cleared EducationHistory table'));
  await client.employmentHistory.deleteMany({}).then(() => console.log('✅ Cleared EmploymentHistory table'));
  await client.travelHistory.deleteMany({}).then(() => console.log('✅ Cleared TravelHistory table'));
  await client.familyMember.deleteMany({}).then(() => console.log('✅ Cleared FamilyMember table'));
}

const USER_CT = 5;
const ENTITY_CT = 5;
const ALL_CAP = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const ALL_LOW = "abcdefghijklmnopqrstuvwxyz";
const ALL_INTS = "0123456789";

const randomCap = (length: number) => {
  let result = "";
  let characters = ALL_CAP;
  let charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const randomLowChar = (length: number) => {
  let result = "";
  let characters = ALL_LOW;
  let charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const randomInts = (length: number) => {
  let result = "";
  let characters = ALL_INTS;
  let charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const generateId = (length: number) => {
  let result = "";
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const randomIntBetween = (min = 0, max = 100) => {
  let difference = max - min;
  let rand = Math.random();
  rand = Math.floor(rand * difference);
  rand = rand + min;
  return rand;
};

const nzMobilePrefixes = ['021', '022', '027', '020'];

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
  return `${randomIntBetween(1, 300)} Random Street`;
};

const randomDate = (start: Date, end: Date) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};

const qualifications = [
  'Secondary school', 'NCEA', 'IB', 'AP', 'A-Level', 'GCSE', 'Bachelors', 'Diploma', 'Certificate', 'Honnors', 'Masters', 'PhD', 'Postgraduate'
]

const IEmployment = [
  "Full-time",
  "Part-time",
  "Contract",
  "Freelance",
  "Self-employed",
];
const IJob = [
  "Software Engineer",
  "Android Engineer",
  "iOS Engineer",
  "Product Designer",
  "Business Development Representative",
  "DevOps Engineer",
  "Business Analyst",
  "Product Manager",
  "Engineering Manager",
  "Solution Architect",
  "Enterprise Architect",
  "Salesforce Architect",
  "Account Manager",
  "Account Executive",
  "Investor",
  "Store Manager",
  "Consultant",
  "Executive Assistant",
  "Managing Director",
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

const INZCities = [
  'Auckland',
  'Wellington',
  'Christchurch',
  'Dunedin',
  'Hamilton',
  'Palmerston North',
  'Tauranga',
  'Queenstown',
  'Invercargill',
  'Napier',
  'Nelson',
  'Gisborne'
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
          countries[randomIntBetween(0, countries.length)],
        countryOfBirth:
          countries[randomIntBetween(0, countries.length)],
        dateOfBirth: randomDate(new Date("1950-01-01"), new Date("2000-01-01")),
        email: `applicant-${randomIntBetween(1, 10000)}@gmail.com`,
        firstName: `${randomCap(1)}${randomLowChar(5)}`,
        homeCountryAddress: randomAddress(),
        inzClientNumber: generateId(12),
        lastName: `${randomCap(1)}${randomLowChar(5)}`,
        mobile: `${nzMobilePrefixes[randomIntBetween(0, nzMobilePrefixes.length)]}${randomInts(6)}`,
        nzAddress: `${randomAddress()}, ${INZCities[randomIntBetween(0, INZCities.length)]}`,
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
          city: `City-${k + 1}`,
          country: countries[randomIntBetween(0, countries.length)],
          endDate: randomDate(new Date("1960-01-01"), new Date("2021-12-31")),
          institutionName: `Institution-${k + 1}`,
          isCurrentInstitution: false,
          qualificationGained: `${qualifications[randomIntBetween(0, qualifications.length)]}`,
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

    const randomLen = randomIntBetween(5, 20);
    for (let k = 0; k < randomLen; k++) {
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
          cityOfWork: `City-${randomIntBetween(0, 500)}`,
          companyName: `Company-${randomIntBetween(0, 500)}`,
          countryOfWork:
            countries[randomIntBetween(0, countries.length)],
          duties: `${randomIntBetween(0, 500)} number of things`,
          employmentType:
            IEmployment[randomIntBetween(0, IEmployment.length)],
          endDate: randomDate(new Date("1960-01-01"), new Date("2021-12-31")),
          isCurrentJob: false,
          jobTitle: IJob[randomIntBetween(0, IJob.length)],
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
      `✅ ${randomLen} EmploymentHistories for ${applicant.createdById} seeded to DB`
    );
  }
};

export const seedTravelHistories = async () => {
  console.log(`🚀 Started seeding TravelHistory`);
  const applicants = await client.applicant.findMany({});

  for (let i = 0; i < applicants.length; i++) {
    const applicant = applicants[i];

    const randomLen = randomIntBetween(10, 30);
    for (let k = 0; k < randomLen; k++) {
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
          destinationCity: `City-${randomIntBetween(0, 500)}`,
          destinationCountry:
            countries[randomIntBetween(0, countries.length)],
          destinationHub: `${
            IDestinationHub[randomIntBetween(0, IDestinationHub.length)]
          }-${randomIntBetween(0, 100)}`,
          reasonOfTravel:
            ITravelReason[randomIntBetween(0, ITravelReason.length)],
        },
      };

      try {
        await client.travelHistory.create(travelHistory);
      } catch (error) {
        throw error;
      }
    }
    console.log(
      `✅ ${randomLen} TravelHistories for ${applicant.createdById} seeded to DB`
    );
  }
};

export const seedFamilyMembers = async () => {
  console.log(`🚀 Started seeding FamilyMember`);
  const applicants = await client.applicant.findMany({});

  for (let i = 0; i < applicants.length; i++) {
    const applicant = applicants[i];

    const randomLen = randomIntBetween(5, 10);
    for (let k = 0; k < randomLen; k++) {
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
            countries[randomIntBetween(0, countries.length)],
          countryOfBirth:
            countries[randomIntBetween(0, countries.length)],
          dateOfBirth: randomDate(
            new Date("1960-01-01"),
            new Date("2021-12-31")
          ),
          firstName: `${randomCap(1)}${randomLowChar(5)}`,
          lastName: `${randomCap(1)}${randomLowChar(5)}`,
          relationshipToApplicant:
            IRelationship[randomIntBetween(0, IRelationship.length)],
        },
      };

      try {
        await client.familyMember.create(familyMember);
      } catch (error) {
        throw error;
      }
    }
    console.log(
      `✅ ${randomLen} FamilyMembers for ${applicant.createdById} seeded to DB`
    );
  }
};
