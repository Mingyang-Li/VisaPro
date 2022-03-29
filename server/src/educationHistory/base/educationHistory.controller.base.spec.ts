import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { EducationHistoryController } from "../educationHistory.controller";
import { EducationHistoryService } from "../educationHistory.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  additionalInfo: "exampleAdditionalInfo",
  archived: "true",
  city: "exampleCity",
  country: "exampleCountry",
  createdAt: new Date(),
  endDate: new Date(),
  id: "exampleId",
  institutionName: "exampleInstitutionName",
  isCurrentInstitution: "true",
  qualificationGained: "exampleQualificationGained",
  startDate: new Date(),
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  additionalInfo: "exampleAdditionalInfo",
  archived: "true",
  city: "exampleCity",
  country: "exampleCountry",
  createdAt: new Date(),
  endDate: new Date(),
  id: "exampleId",
  institutionName: "exampleInstitutionName",
  isCurrentInstitution: "true",
  qualificationGained: "exampleQualificationGained",
  startDate: new Date(),
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    additionalInfo: "exampleAdditionalInfo",
    archived: "true",
    city: "exampleCity",
    country: "exampleCountry",
    createdAt: new Date(),
    endDate: new Date(),
    id: "exampleId",
    institutionName: "exampleInstitutionName",
    isCurrentInstitution: "true",
    qualificationGained: "exampleQualificationGained",
    startDate: new Date(),
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  additionalInfo: "exampleAdditionalInfo",
  archived: "true",
  city: "exampleCity",
  country: "exampleCountry",
  createdAt: new Date(),
  endDate: new Date(),
  id: "exampleId",
  institutionName: "exampleInstitutionName",
  isCurrentInstitution: "true",
  qualificationGained: "exampleQualificationGained",
  startDate: new Date(),
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

describe("EducationHistory", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: EducationHistoryService,
          useValue: service,
        },
      ],
      controllers: [EducationHistoryController],
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

  test("POST /educationHistories", async () => {
    await request(app.getHttpServer())
      .post("/educationHistories")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        endDate: CREATE_RESULT.endDate.toISOString(),
        startDate: CREATE_RESULT.startDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /educationHistories", async () => {
    await request(app.getHttpServer())
      .get("/educationHistories")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          endDate: FIND_MANY_RESULT[0].endDate.toISOString(),
          startDate: FIND_MANY_RESULT[0].startDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /educationHistories/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/educationHistories"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /educationHistories/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/educationHistories"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        endDate: FIND_ONE_RESULT.endDate.toISOString(),
        startDate: FIND_ONE_RESULT.startDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
