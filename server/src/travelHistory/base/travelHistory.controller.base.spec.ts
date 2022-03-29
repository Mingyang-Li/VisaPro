import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { TravelHistoryController } from "../travelHistory.controller";
import { TravelHistoryService } from "../travelHistory.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  archived: "true",
  createdAt: new Date(),
  dateDeparted: new Date(),
  dateEntered: new Date(),
  destinationAirport: "exampleDestinationAirport",
  destinationCity: "exampleDestinationCity",
  destinationCountry: "exampleDestinationCountry",
  id: "exampleId",
  reasonOfTravel: "exampleReasonOfTravel",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  archived: "true",
  createdAt: new Date(),
  dateDeparted: new Date(),
  dateEntered: new Date(),
  destinationAirport: "exampleDestinationAirport",
  destinationCity: "exampleDestinationCity",
  destinationCountry: "exampleDestinationCountry",
  id: "exampleId",
  reasonOfTravel: "exampleReasonOfTravel",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    archived: "true",
    createdAt: new Date(),
    dateDeparted: new Date(),
    dateEntered: new Date(),
    destinationAirport: "exampleDestinationAirport",
    destinationCity: "exampleDestinationCity",
    destinationCountry: "exampleDestinationCountry",
    id: "exampleId",
    reasonOfTravel: "exampleReasonOfTravel",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  archived: "true",
  createdAt: new Date(),
  dateDeparted: new Date(),
  dateEntered: new Date(),
  destinationAirport: "exampleDestinationAirport",
  destinationCity: "exampleDestinationCity",
  destinationCountry: "exampleDestinationCountry",
  id: "exampleId",
  reasonOfTravel: "exampleReasonOfTravel",
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

describe("TravelHistory", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: TravelHistoryService,
          useValue: service,
        },
      ],
      controllers: [TravelHistoryController],
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

  test("POST /travelHistories", async () => {
    await request(app.getHttpServer())
      .post("/travelHistories")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateDeparted: CREATE_RESULT.dateDeparted.toISOString(),
        dateEntered: CREATE_RESULT.dateEntered.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /travelHistories", async () => {
    await request(app.getHttpServer())
      .get("/travelHistories")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          dateDeparted: FIND_MANY_RESULT[0].dateDeparted.toISOString(),
          dateEntered: FIND_MANY_RESULT[0].dateEntered.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /travelHistories/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/travelHistories"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /travelHistories/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/travelHistories"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        dateDeparted: FIND_ONE_RESULT.dateDeparted.toISOString(),
        dateEntered: FIND_ONE_RESULT.dateEntered.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
