import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { EmploymentHistoryController } from "../employmentHistory.controller";
import { EmploymentHistoryService } from "../employmentHistory.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  additionalInfo: "exampleAdditionalInfo",
  archived: "true",
  cityOfWork: "exampleCityOfWork",
  companyName: "exampleCompanyName",
  countryOfWork: "exampleCountryOfWork",
  createdAt: new Date(),
  duties: "exampleDuties",
  endDate: new Date(),
  id: "exampleId",
  isCurrentJob: "true",
  jobTitle: "exampleJobTitle",
  nzBusinessNumber: "exampleNzBusinessNumber",
  startDate: new Date(),
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  additionalInfo: "exampleAdditionalInfo",
  archived: "true",
  cityOfWork: "exampleCityOfWork",
  companyName: "exampleCompanyName",
  countryOfWork: "exampleCountryOfWork",
  createdAt: new Date(),
  duties: "exampleDuties",
  endDate: new Date(),
  id: "exampleId",
  isCurrentJob: "true",
  jobTitle: "exampleJobTitle",
  nzBusinessNumber: "exampleNzBusinessNumber",
  startDate: new Date(),
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    additionalInfo: "exampleAdditionalInfo",
    archived: "true",
    cityOfWork: "exampleCityOfWork",
    companyName: "exampleCompanyName",
    countryOfWork: "exampleCountryOfWork",
    createdAt: new Date(),
    duties: "exampleDuties",
    endDate: new Date(),
    id: "exampleId",
    isCurrentJob: "true",
    jobTitle: "exampleJobTitle",
    nzBusinessNumber: "exampleNzBusinessNumber",
    startDate: new Date(),
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  additionalInfo: "exampleAdditionalInfo",
  archived: "true",
  cityOfWork: "exampleCityOfWork",
  companyName: "exampleCompanyName",
  countryOfWork: "exampleCountryOfWork",
  createdAt: new Date(),
  duties: "exampleDuties",
  endDate: new Date(),
  id: "exampleId",
  isCurrentJob: "true",
  jobTitle: "exampleJobTitle",
  nzBusinessNumber: "exampleNzBusinessNumber",
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

describe("EmploymentHistory", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: EmploymentHistoryService,
          useValue: service,
        },
      ],
      controllers: [EmploymentHistoryController],
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

  test("POST /employmentHistories", async () => {
    await request(app.getHttpServer())
      .post("/employmentHistories")
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

  test("GET /employmentHistories", async () => {
    await request(app.getHttpServer())
      .get("/employmentHistories")
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

  test("GET /employmentHistories/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/employmentHistories"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /employmentHistories/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/employmentHistories"}/${existingId}`)
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
