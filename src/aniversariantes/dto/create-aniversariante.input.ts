import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateAniversarianteInput {
  @Field(() => String)
  name: number;

  @Field(() => String)
  birthday: number;
}
