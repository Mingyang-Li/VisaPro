/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsBoolean,
  IsOptional,
  IsDate,
  ValidateNested,
  IsString,
} from "class-validator";
import { Type } from "class-transformer";
import { User } from "../../user/base/User";
import { EducationHistory } from "../../educationHistory/base/EducationHistory";
import { EmploymentHistory } from "../../employmentHistory/base/EmploymentHistory";
import { FamilyMember } from "../../familyMember/base/FamilyMember";
import { PersonalInfo } from "../../personalInfo/base/PersonalInfo";
import { TravelHistory } from "../../travelHistory/base/TravelHistory";
@ObjectType()
class Applicant {
  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  archived!: boolean | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  archivedAt!: Date | null;

  @ApiProperty({
    required: false,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  archivedBy?: User | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  createdAt!: Date | null;

  @ApiProperty({
    required: false,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  createdBy?: User | null;

  @ApiProperty({
    required: false,
    type: () => [EducationHistory],
  })
  @ValidateNested()
  @Type(() => EducationHistory)
  @IsOptional()
  educationHistories?: Array<EducationHistory>;

  @ApiProperty({
    required: false,
    type: () => [EmploymentHistory],
  })
  @ValidateNested()
  @Type(() => EmploymentHistory)
  @IsOptional()
  employmentHistories?: Array<EmploymentHistory>;

  @ApiProperty({
    required: false,
    type: () => [FamilyMember],
  })
  @ValidateNested()
  @Type(() => FamilyMember)
  @IsOptional()
  familyMembers?: Array<FamilyMember>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => PersonalInfo,
  })
  @ValidateNested()
  @Type(() => PersonalInfo)
  @IsOptional()
  personalInfo?: PersonalInfo | null;

  @ApiProperty({
    required: false,
    type: () => [TravelHistory],
  })
  @ValidateNested()
  @Type(() => TravelHistory)
  @IsOptional()
  travelHistories?: Array<TravelHistory>;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  updatedAt!: Date | null;

  @ApiProperty({
    required: false,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  updatedBy?: User | null;

  @ApiProperty({
    required: false,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  user?: User | null;
}
export { Applicant };
