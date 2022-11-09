import { CreateAniversariantesGraphqlInput } from './create-aniversariantes-graphql.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAniversariantesGraphqlInput extends PartialType(CreateAniversariantesGraphqlInput) {
  @Field(() => Int)
  id: number;
}
