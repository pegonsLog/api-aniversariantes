import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Aniversariante {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  birthday: string;
}
