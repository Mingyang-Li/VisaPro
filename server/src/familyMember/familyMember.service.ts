import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { FamilyMemberServiceBase } from "./base/familyMember.service.base";

@Injectable()
export class FamilyMemberService extends FamilyMemberServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
