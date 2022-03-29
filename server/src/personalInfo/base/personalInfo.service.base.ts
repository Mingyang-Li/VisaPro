/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, PersonalInfo, Applicant, User } from "@prisma/client";

export class PersonalInfoServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.PersonalInfoFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PersonalInfoFindManyArgs>
  ): Promise<number> {
    return this.prisma.personalInfo.count(args);
  }

  async findMany<T extends Prisma.PersonalInfoFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PersonalInfoFindManyArgs>
  ): Promise<PersonalInfo[]> {
    return this.prisma.personalInfo.findMany(args);
  }
  async findOne<T extends Prisma.PersonalInfoFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PersonalInfoFindUniqueArgs>
  ): Promise<PersonalInfo | null> {
    return this.prisma.personalInfo.findUnique(args);
  }
  async create<T extends Prisma.PersonalInfoCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PersonalInfoCreateArgs>
  ): Promise<PersonalInfo> {
    return this.prisma.personalInfo.create<T>(args);
  }
  async update<T extends Prisma.PersonalInfoUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PersonalInfoUpdateArgs>
  ): Promise<PersonalInfo> {
    return this.prisma.personalInfo.update<T>(args);
  }
  async delete<T extends Prisma.PersonalInfoDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PersonalInfoDeleteArgs>
  ): Promise<PersonalInfo> {
    return this.prisma.personalInfo.delete(args);
  }

  async getApplicant(parentId: string): Promise<Applicant | null> {
    return this.prisma.personalInfo
      .findUnique({
        where: { id: parentId },
      })
      .applicant();
  }

  async getArchivedBy(parentId: string): Promise<User | null> {
    return this.prisma.personalInfo
      .findUnique({
        where: { id: parentId },
      })
      .archivedBy();
  }

  async getCreatedBy(parentId: string): Promise<User | null> {
    return this.prisma.personalInfo
      .findUnique({
        where: { id: parentId },
      })
      .createdBy();
  }

  async getUpdatedBy(parentId: string): Promise<User | null> {
    return this.prisma.personalInfo
      .findUnique({
        where: { id: parentId },
      })
      .updatedBy();
  }
}
