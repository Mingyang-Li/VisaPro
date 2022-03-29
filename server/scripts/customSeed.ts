import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";
import { parseSalt } from "../src/auth/password.service";

export async function customSeed() {
  const client = new PrismaClient();
  const username = "admin";
  const { BCRYPT_SALT } = process.env;
  const salt = parseSalt(BCRYPT_SALT);

  //replace this sample code to populate your database
  //with data that is required for your application to start
  await client.user.update({
    where: { username: username },
    data: {
      username: 'mingyang',
      password: await hash("mingyang", salt),
    },
  });

  client.$disconnect();
}
