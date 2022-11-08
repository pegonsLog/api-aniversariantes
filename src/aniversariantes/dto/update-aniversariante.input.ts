import { CreateAniversarianteInput } from './create-aniversariante.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAniversarianteInput extends PartialType(
  CreateAniversarianteInput,
) {
  @Field(() => Int)
  id: number;
}
