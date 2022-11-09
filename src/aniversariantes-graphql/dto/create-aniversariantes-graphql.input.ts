import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAniversariantesGraphqlInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
