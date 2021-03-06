/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, FamilyMember, Applicant, User } from "@prisma/client";

export class FamilyMemberServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.FamilyMemberFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FamilyMemberFindManyArgs>
  ): Promise<number> {
    return this.prisma.familyMember.count(args);
  }

  async findMany<T extends Prisma.FamilyMemberFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FamilyMemberFindManyArgs>
  ): Promise<FamilyMember[]> {
    return this.prisma.familyMember.findMany(args);
  }
  async findOne<T extends Prisma.FamilyMemberFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.FamilyMemberFindUniqueArgs>
  ): Promise<FamilyMember | null> {
    return this.prisma.familyMember.findUnique(args);
  }
  async create<T extends Prisma.FamilyMemberCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FamilyMemberCreateArgs>
  ): Promise<FamilyMember> {
    return this.prisma.familyMember.create<T>(args);
  }
  async update<T extends Prisma.FamilyMemberUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FamilyMemberUpdateArgs>
  ): Promise<FamilyMember> {
    return this.prisma.familyMember.update<T>(args);
  }
  async delete<T extends Prisma.FamilyMemberDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.FamilyMemberDeleteArgs>
  ): Promise<FamilyMember> {
    return this.prisma.familyMember.delete(args);
  }

  async findApplicants(
    parentId: string,
    args: Prisma.ApplicantFindManyArgs
  ): Promise<Applicant[]> {
    return this.prisma.familyMember
      .findUnique({
        where: { id: parentId },
      })
      .applicants(args);
  }

  async getArchivedBy(parentId: string): Promise<User | null> {
    return this.prisma.familyMember
      .findUnique({
        where: { id: parentId },
      })
      .archivedBy();
  }

  async getCreatedBy(parentId: string): Promise<User | null> {
    return this.prisma.familyMember
      .findUnique({
        where: { id: parentId },
      })
      .createdBy();
  }

  async getUpdatedBy(parentId: string): Promise<User | null> {
    return this.prisma.familyMember
      .findUnique({
        where: { id: parentId },
      })
      .updatedBy();
  }
}
