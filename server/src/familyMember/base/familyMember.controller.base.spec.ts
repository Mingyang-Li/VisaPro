import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { FamilyMemberController } from "../familyMember.controller";
import { FamilyMemberService } from "../familyMember.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  archived: "true",
  countriesOfCitizenship: "exampleCountriesOfCitizenship",
  countryOfBirth: "exampleCountryOfBirth",
  createdAt: new Date(),
  dateOfBirth: new Date(),
  firstName: "exampleFirstName",
  id: "exampleId",
  lastName: "exampleLastName",
  relationshipToApplicant: "exampleRelationshipToApplicant",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  archived: "true",
  countriesOfCitizenship: "exampleCountriesOfCitizenship",
  countryOfBirth: "exampleCountryOfBirth",
  createdAt: new Date(),
  dateOfBirth: new Date(),
  firstName: "exampleFirstName",
  id: "exampleId",
  lastName: "exampleLastName",
  relationshipToApplicant: "exampleRelationshipToApplicant",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    archived: "true",
    countriesOfCitizenship: "exampleCountriesOfCitizenship",
    countryOfBirth: "exampleCountryOfBirth",
    createdAt: new Date(),
    dateOfBirth: new Date(),
    firstName: "exampleFirstName",
    id: "exampleId",
    lastName: "exampleLastName",
    relationshipToApplicant: "exampleRelationshipToApplicant",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  archived: "true",
  countriesOfCitizenship: "exampleCountriesOfCitizenship",
  countryOfBirth: "exampleCountryOfBirth",
  createdAt: new Date(),
  dateOfBirth: new Date(),
  firstName: "exampleFirstName",
  id: "exampleId",
  lastName: "exampleLastName",
  relationshipToApplicant: "exampleRelationshipToApplicant",
  updatedAt: new Date(),
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

describe("FamilyMember", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: FamilyMemberService,
          useValue: service,
        },
      ],
      controllers: [FamilyMemberController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /familyMembers", async () => {
    await request(app.getHttpServer())
      .post("/familyMembers")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateOfBirth: CREATE_RESULT.dateOfBirth.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /familyMembers", async () => {
    await request(app.getHttpServer())
      .get("/familyMembers")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          dateOfBirth: FIND_MANY_RESULT[0].dateOfBirth.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /familyMembers/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/familyMembers"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /familyMembers/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/familyMembers"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        dateOfBirth: FIND_ONE_RESULT.dateOfBirth.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
