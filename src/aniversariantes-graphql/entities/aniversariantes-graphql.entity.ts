import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AniversariantesGraphql {
  @Field(() => ID)
  id: number;
  @Field(() => String)
  name: string;
  @Field(() => String)
  birthday: string;
}
