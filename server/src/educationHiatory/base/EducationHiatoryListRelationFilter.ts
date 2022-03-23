/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EducationHiatoryWhereInput } from "./EducationHiatoryWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class EducationHiatoryListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => EducationHiatoryWhereInput,
  })
  @ValidateNested()
  @Type(() => EducationHiatoryWhereInput)
  @IsOptional()
  @Field(() => EducationHiatoryWhereInput, {
    nullable: true,
  })
  every?: EducationHiatoryWhereInput;

  @ApiProperty({
    required: false,
    type: () => EducationHiatoryWhereInput,
  })
  @ValidateNested()
  @Type(() => EducationHiatoryWhereInput)
  @IsOptional()
  @Field(() => EducationHiatoryWhereInput, {
    nullable: true,
  })
  some?: EducationHiatoryWhereInput;

  @ApiProperty({
    required: false,
    type: () => EducationHiatoryWhereInput,
  })
  @ValidateNested()
  @Type(() => EducationHiatoryWhereInput)
  @IsOptional()
  @Field(() => EducationHiatoryWhereInput, {
    nullable: true,
  })
  none?: EducationHiatoryWhereInput;
}
export { EducationHiatoryListRelationFilter };
