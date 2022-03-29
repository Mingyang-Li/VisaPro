/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EducationHistoryWhereInput } from "./EducationHistoryWhereInput";
import { Type } from "class-transformer";
import { EducationHistoryOrderByInput } from "./EducationHistoryOrderByInput";

@ArgsType()
class EducationHistoryFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => EducationHistoryWhereInput,
  })
  @Field(() => EducationHistoryWhereInput, { nullable: true })
  @Type(() => EducationHistoryWhereInput)
  where?: EducationHistoryWhereInput;

  @ApiProperty({
    required: false,
    type: [EducationHistoryOrderByInput],
  })
  @Field(() => [EducationHistoryOrderByInput], { nullable: true })
  @Type(() => EducationHistoryOrderByInput)
  orderBy?: Array<EducationHistoryOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { EducationHistoryFindManyArgs };
